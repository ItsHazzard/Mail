import { Component, OnInit } from '@angular/core';
import { Post, Category } from '../../../store/models';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})
export class BlogGridComponent implements OnInit {

  posts: Post[] = [
    {
     id: 1,
     category: 1,
     comments_count: 10,
     date: 'August 08, 2018',
     name: 'Why Everyone Needs CTemplar?',
     slug: 'why-everyone-needs-ctemplar',
     image_card: 'assets/images/blog/why-everyone-needs-ctemplar.jpg',
     image_featured: 'assets/images/blog/why-everyone-needs-ctemplar.jpg',
     image: 'assets/images/blog/why-everyone-needs-ctemplar.jpg',
     text: `Picking a secure email system is not just checking for that little padlock to see that your webpages are encrypted when using 
     webmail.  When you are searching around for the most secure email system, whether for business or personal purposes, you will find a 
     range of options available. When evaluating each product, you will need to pour over the security features, software setup, privacy 
     policy, terms and conditions of use, and company background with a fine-tooth comb.`,
     excerpt: `
      <h3 class="font-weight-bold text-secondary mb-3">
        Use Signal? Here’s Why You Need CTemplar for Email Security
    </h3>
    <p>
        When you look for the most secure messaging platform, there is a clear standout: Signal. Signal provides complete end-to-end
        encryption that cannot be read by the platform or anyone else. But what about email security?
    </p>
    <p>
        When was the last time that you did an evaluation of your email system’s security? Unless you are a system admin working
        for a large company and you run and configure your own email server, then it might not have been very recently.
    </p>
    <p>
        The problem with email privacy is that it is a complex beast, particularly if you need a webmail solution. Typically, the
        big “encrypted” webmail providers, like Gmail, only encrypt over the wire, encrypting your email from your browser,
        sending over the network, then decrypting on their servers.
    </p>
    <p>
        This is not a secure solution.
    </p>
    <p>
        There are many reasons why people need to be conscious of email security.
    </p>
    <ul>
        <li>
            You may be sending important documents, like your sensitive business records, to a client
        </li>
        <li>
            You may live in a country where freedom of speech is not a protected right
        </li>
        <li>
            You may be a whistleblower
        </li>
        <li>
            You may simply object to your data being harvested
        </li>
    </ul>

    <h3 class="text-secondary mb-3 font-weight-bold">
        What does a secure email system look like?
    </h3>
    <p>
        Picking a secure email system is not just checking for that little padlock to see that your webpages are encrypted when using
        webmail.
    </p>
    <p>
        Secure email systems ensure that no one can access the contents of your email. For maximum security, you should ensure they
        cannot peek at the metadata of your email, either - data like the To, From, and Timestamp fields.
    </p>
    <p>
        A secure email system consists of:
    </p>
    <ul>
        <li>An anonymous signup that does not require personal details</li>
        <li>An anonymous method of payment for paid accounts, such as tumbled cryptocurrencies</li>
        <li>A strong password that is not the same or similar to any other accounts, nor based on personal details</li>
        <li>End-to-end encryption of emails, using open source technology</li>
        <li>Emails stored as encrypted files on the webmail server</li>
        <li>A provider that does not keep data (or linked IP) logs</li>
        <li>Stored in an encrypted form on your device(s) (if it is stored at all)</li>
        <li>A webmail server located in a jurisdiction which has a high level of user data protection and no agreements in place
            with other countries that would require disclosure of user data</li>
        <li>A business based in a location where governments do not actively spy on data</li>
        <li>
            Both of these locations should be out of the Five Eyes
            <em>(Australia, Canada, New Zealand, United Kingdom, United States)</em>, Nine Eyes
            <em>(+ Denmark, France, the Netherlands, Norway)</em>, and Fourteen Eyes
            <em>(+ Germany, Belgium, Italy, Spain, Sweden)</em>
            intelligence alliances, as well as Israel and the EU, for maximum security with regards to information sharing
        </li>
        <li>
            An open source system, with the code readily available so there are no hidden back-doors
        </li>
    </ul>
    <p>
        On your side a secure system should look like:
    </p>

    <ul>
        <li>
            Comprehensive anti-malware and anti-virus software on your device
        </li>
        <li>
            For a heightened level of privacy, use the Firefox browser with legitimate and verified (by security conscious people) privacy
            extensions and no “random” extensions, along with disabling of WebRTC within your browser
        </li>
        <li>
            Use a VPN that abides by the majority of the rules outlined for email security if you are using a regular web browser
        </li>
        <li>
            It is recommended you use the Tor browser via
            <a target="_blank" href="https://tails.boum.org/about/index.en.html"> Tor on Tails</a>
            for a very high level of internet privacy, along with
            <a target="_blank" href="https://www.torproject.org/docs/bridges">
                Tor bridges </a> for ultimate privacy
        </li>
    </ul>
    <p>
        As you can see, there are a great many elements that go into website security. This list is not exhaustive by any means.
        The setup and configuration you use is entirely dependent on the trust and configuration of each product in the process.
        Once you have the right elements in place, you’ll be safe in the knowledge your email data is air-tight
    </p>

    <h3 class="text-secondary mb-3 font-weight-bold">
        Evaluate your secure email options carefully
    </h3>
    <p>
        When you are searching around for the most secure email system, whether for business or personal purposes, you will find
        a range of options available.
    </p>
    <p>
        When evaluating each product, you will need to pour over the security features, software setup, privacy policy, terms and
        conditions of use, and company background with a fine-tooth comb.
    </p>
    <p>
        There have been numerous incidents over the years when people using supposedly private services have been dismayed to find
        out this is not actually the case. Take for instance Cody Kretsinger, a LulzSec hacker who found out the HideMyAss
        VPN
        <a target="_blank"
        href="https://www.theatlantic.com/technology/archive/2011/09/lulzsec-hacker-exposed-service-he-thought-would-hide-him/337545/">
            wasn’t at liberty to hide his ass at all</a>, due to a clause in the software regarding illegal activities. HideMyAss
        cooperated with the UK government and disclosed account information when a court order was served.
    </p>
    <p>
        CTemplar is located in Iceland, home to the world’s most protective data privacy laws. Any governmental request for user
        data must process through an Icelandic legal system that champions internet privacy.
    </p>
    <h3 class="text-secondary mb-3 font-weight-bold">
        Why we built CTemplar
    </h3>
    <p>
        Digital security is extremely hard to implement unless you are a trained professional in the industry, able to build solutions
        yourself. We have cut out the hard work and built a service that you can put your trust in - without having to DIY.
        Take a look at our credentials and configuration to see the advantages of choosing us over a potentially “grey-area”
        competitor.
    </p>`
    },
    {
      id: 2,
      category: 1,
      comments_count: 8,
      date: 'August 08, 2018',
      name: 'CTemplar\'s 4 Wall Protection',
      slug: 'ctemplar-4-wall-protection',
      image_card: 'assets/images/blog/ctemplar-4-wall-protection.jpg',
      image_featured: 'assets/images/blog/ctemplar-4-wall-protection.jpg',
      image: 'assets/images/blog/ctemplar-4-wall-protection.jpg',
      text: `protection was created by the CTemplar team after seeing other email services knowingly offer vulnerable services under
      the illusion of complete security.   For example, they may provide good encryption, but they have access to your username
      and password and can legally be required to turn them over without your knowledge or consent.  The 4 walls of protection
      include "Company Protection, Encryption Protection, Legal Protection, and Technology Protection."`,
      excerpt: `
      <h6 class="font-weight-bold">Your data is vulnerable</h6>
      <p>
          CTemplar’s 4 Wall Watch (“4WW”) protection was created by the CTemplar team after seeing other email services knowingly offer
          vulnerable services under the illusion of complete security. For example, they may provide good encryption, but they
          have access to your username and password and can legally be required to turn them over without your knowledge or
          consent. The 4 walls of protection include “Company Protection, Encryption Protection, Legal Protection, and Technology
          Protection.”
      </p>
      <h6 class="font-weight-bold">Why does it matter?</h6>
      <p>
          Excellent encryption is pointless if your email provider hands over your sensitive data and username/password to all corporations,
          political interests and governments that request your data. At CTemplar, we are the only email service provider that
          offer wall to wall protection without gaps. The strongest fortress in the world is not secure if a wall is missing
          or gate wide open.
      </p>
      <h6 class="font-weight-bold">Unmatched service for your peace of mind</h6>
      <p>
          We lead the industry by providing maximum protection for our users. People desiring the highest level of protection should
          not buy discount services that merely give the illusion of security. Your privacy is your fortress, you want the
          walls to be thick and impenetrable to even the strongest attacks.
      </p>`
    },
    {
      id: 3,
      category: 1,
      comments_count: 14,
      date: 'August 08, 2018',
      name: 'CTemplar vs Protonmail',
      slug: 'ctemplar-vs-protonmail',
      image_card: 'assets/images/blog/ctemplar-vs-proton-mail.jpg',
      image_featured: 'assets/images/blog/ctemplar-vs-proton-mail.jpg',
      image: 'assets/images/blog/ctemplar-vs-proton-mail.jpg',
      text: `Ctemplar is the unparalleled best email service in the world for these reasons below.  We lead the industry by providing
      maximum protection for our users.  People desiring the highest level of protection should not buy discount services that may
      give the illusion of security.  Your privacy is your fortress, you want the walls to be thick and impenetrable to even the
      strongest attacks.`,
      excerpt: `
      <img alt="News thumbnail - Desktop" class="img news-img d-none d-lg-block" 
      src="assets/images/blog/ctemplar-vs-protonmail-table_min.png"/>
      <img alt="News thumbnail - Tablet" class="img news-img d-none d-sm-block d-md-block d-lg-none" 
      src="assets/images/blog/ctemplar-vs-protonmail-table_min_T.png"/>
      <img alt="News thumbnail - Mobile" class="img news-img d-block d-sm-none" 
      src="assets/images/blog/ctemplar-vs-protonmail-table_min_M.png"/>`
     }
  ];

  categories: Category[] = [{
    id: 1,
    name: 'NEWS',
    color: '#ffcc00'
    },{
    id: 2,
    name: 'ARTICLE',
    color: '#ffcc00'
  }];

  constructor() { }

  ngOnInit() {
  }

}
