// Angular
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Helpers
import { CreateFolderComponent } from '../../mail/dialogs/create-folder/create-folder.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PaymentFailureNoticeComponent } from '../../mail/dialogs/payment-failure-notice/payment-failure-notice.component';
import { NotificationService } from './notification.service';
import { Folder } from '../models';
import { AllowIn, ShortcutEventOutput } from 'ng-keyboard-shortcuts';
import { Router } from '@angular/router';
import { GenericFolderComponent } from '../../mail/mail-list/mail-folder/generic-folder/generic-folder.component';
import { MailComponent } from '../../mail/mail.component';
import { run } from 'tslint/lib/runner';

@Injectable()
export class SharedService {
  isReady: EventEmitter<boolean> = new EventEmitter();
  hideFooter: EventEmitter<boolean> = new EventEmitter();
  hideHeader: EventEmitter<boolean> = new EventEmitter();
  hideEntireFooter: EventEmitter<boolean> = new EventEmitter();
  keyPressed: EventEmitter<any> = new EventEmitter();
  isMail: EventEmitter<boolean> = new EventEmitter();
  isExternalPage: EventEmitter<boolean> = new EventEmitter();

  private paymentFailureModalRef: NgbModalRef;

  //
  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private notificationService: NotificationService,
  ) {}

  sortByDate(data: any[], sortField: string): any[] {
    return data.sort((a: any, b: any) =>
      new Date(b[sortField]).getTime() - new Date(a[sortField]).getTime()
    );
  }

  /**
   * @description
   * Prime Users - Can create as many folders as they want
   * Free Users - Only allow a maximum of 5 folders per account
   */
  openCreateFolderDialog(isPrime, customFolders: Folder[], callback: { self: any, method: string } = null) {
    if (isPrime) {
      this.openModal(callback);
    } else if (customFolders === null || customFolders.length < 5) {
      this.openModal(callback);
    } else {
      this.notificationService.showSnackBar('Free users can only create a maximum of 5 folders.');
    }
  }

  private openModal(callback: { self: any, method: string } = null) {
    const modal: NgbModalRef = this.modalService.open(CreateFolderComponent, { centered: true, windowClass: 'modal-sm mailbox-modal' });
    (<CreateFolderComponent>modal.componentInstance).callback = callback;
  }

  showPaymentFailureDialog() {
    if (!this.paymentFailureModalRef) {
      this.paymentFailureModalRef = this.modalService.open(PaymentFailureNoticeComponent, {
        centered: true,
        windowClass: 'modal-sm',
        backdrop: 'static',
        keyboard: false
      });
      this.paymentFailureModalRef.result.then(() => this.paymentFailureModalRef = null);
    }
  }

  copyToClipboard(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.notificationService.showSnackBar('Copied to clipboard successfully.');
  }

}

export function sortByString(data: any[], field: string) {
  return data.sort((a, b) => {
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] > b[field]) {
      return 1;
    }
    return 0;
  });
}

export function getMailComponentShortcuts(mailComponent: MailComponent) {
  return [
    getShortcutKeyObj('g  i', 'Mail', 'Goto Inbox -> g and i', () => {
      mailComponent.navigateToPage('/mail/inbox/page/1');
    }),
    getShortcutKeyObj('g  d', 'Mail', 'Goto Draft -> g + d', () => {
      mailComponent.navigateToPage('/mail/draft/page/1');
    }),
    getShortcutKeyObj('g  s', 'Mail', 'Goto Sent -> g + s', () => {
      mailComponent.navigateToPage('/mail/sent/page/1');
    }),
    getShortcutKeyObj('g  .', 'Mail', 'Goto Starred -> g + .', () => {
      mailComponent.navigateToPage('/mail/starred/page/1');
    }),
    getShortcutKeyObj('g  a', 'Mail', 'Goto Archive -> g + a', () => {
      mailComponent.navigateToPage('/mail/archive/page/1');
    }),
    getShortcutKeyObj('g  x', 'Mail', 'Goto Spam -> g + x', () => {
      mailComponent.navigateToPage('/mail/spam/page/1');
    }),
    getShortcutKeyObj('g  t', 'Mail', 'Goto trash -> g + t', () => {
      mailComponent.navigateToPage('/mail/trash/page/1');
    })
  ];
}

function getShortcutKeyObj(key: string, label, description: string, command) {
  return {
    command,
    label,
    description,
    key: [key],
    preventDefault: true,
    throttleTime: 250
  };
}

export function getGenericFolderShortcuts(component: GenericFolderComponent) {
  return [
    getShortcutKeyObj('*  a', 'Conversation', 'Select all conversations -> * a', () => {
      component.markAllMails(true);
    }),
    getShortcutKeyObj('*  n', 'Conversation', 'Unselect all conversations -> * n', () => {
      component.markAllMails(false);
    }),
    getShortcutKeyObj('r', 'Conversation', 'Mark as read -> r', () => {
      component.markAsRead();
    }),
    getShortcutKeyObj('u', 'Conversation', 'Mark as unread -> u', () => {
      component.markAsRead(false);
    }),
    getShortcutKeyObj('.', 'Conversation', 'Mark as starred -> .', () => {
      component.markAsStarred();
    }),
    getShortcutKeyObj('cmd + *', 'Conversation', 'Mark as starred -> cmd + *', () => {
      component.markAsStarred();
    }),
    getShortcutKeyObj('cmd + shift + *', 'Conversation', 'Mark as unstarred -> cmd + shift + *', () => {
      component.markAsStarred(false);
    })
  ];
}
