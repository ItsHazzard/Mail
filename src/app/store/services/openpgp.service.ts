import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, MailBoxesState } from '../datatypes';

declare var openpgp;

@Injectable()
export class OpenPgpService {
  options: any;
  encrypted: any;
  private pubkey: any;
  private privkey: any;
  private decryptedPrivKeyObj: any;
  private passphrase: any;
  private fingerprint: string;
  private decryptInProgress: boolean;

  constructor(private store: Store<AppState>) {

    this.store.select(state => state.mailboxes)
      .subscribe((response: MailBoxesState) => {
        // TODO: replace mailboxes[0] with the mailbox selected by user
        if (response.mailboxes[0]) {
          this.pubkey = response.mailboxes[0].public_key;
          this.privkey = response.mailboxes[0].private_key;
        }
        this.decryptPrivateKey();
      });
  }

  decryptPrivateKey() {
    if (this.privkey && !this.decryptedPrivKeyObj && !this.decryptInProgress) {
      this.decryptInProgress = true;
      openpgp.initWorker({
        path: '/assets/static/openpgp.worker.js',
      });

      const pgpWorker = new Worker('/assets/static/pgp-worker.js');
      pgpWorker.postMessage({
        privkey: this.privkey,
        user_key: atob(sessionStorage.getItem('user_key')),
      });
      pgpWorker.onmessage = ((event: MessageEvent) => {
        console.log('user key decrypted successfully');
        this.decryptedPrivKeyObj = event.data.key;
        this.decryptInProgress = false;
        pgpWorker.terminate();
      });
    }
  }

  generateKey(user) {
    this.passphrase = user.password;
    const options = {
      userIds: [{ name: user.username, email: `${user.username}@ctemplar.com` }],
      numbits: 4096,
      passphrase: this.passphrase
    };
    return openpgp.generateKey(options).then((key) => {
      this.pubkey = key.publicKeyArmored;
      this.privkey = key.privateKeyArmored;
      localStorage.setItem('pubkey', this.pubkey);
      localStorage.setItem('privkey', this.privkey);
      this.fingerprint = openpgp.key.readArmored(this.pubkey).keys[0].primaryKey.getFingerprint();
      return {
        fingerprint: this.fingerprint,
        privkey: this.privkey,
        pubkey: this.pubkey
      };
    });
  }

  getFingerprint() {
    return this.fingerprint;
  }

  getPubKey() {
    return this.pubkey;
  }

  getPrivateKey() {
    return this.privkey;
  }

  async makeEncrypt(data: any): Promise<string> {
    this.options = {
      data: data,
      publicKeys: openpgp.key.readArmored(this.pubkey).keys,
      privateKeys: [this.decryptedPrivKeyObj]
    };
    return openpgp.encrypt(this.options).then((ciphertext) => {
      return ciphertext.data;
    });
  }

  async makeDecrypt(str, privkey, pubkey, passphrase) {
    if (str) {
      const privKeyObj = openpgp.key.readArmored(privkey).keys[0];
      if (!privKeyObj) {
        return 'privkey Error';
      }
      if (!openpgp.message.readArmored(str)) {
        return 'message type Error';
      }
      await privKeyObj.decrypt(passphrase);
      this.options = {
        message: openpgp.message.readArmored(str),
        publicKeys: openpgp.key.readArmored(pubkey).keys,
        privateKeys: [privKeyObj]
      };
      return openpgp.decrypt(this.options).then((plaintext) => {
        return plaintext.data;
      });
    }
  }
}
