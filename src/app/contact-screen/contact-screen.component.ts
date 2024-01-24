import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.scss']
})
export class ContactScreenComponent {
    selectedContact: any;

    handleContactSelected(contact: any) {
      this.selectedContact = contact;
    }
}
