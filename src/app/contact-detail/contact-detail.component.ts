import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
    contact: any;
    contactId: number = 0;
    @Input() selectedContact: any;

    constructor(private route: ActivatedRoute, private contactService: ContactService) { }

    //life cycle hook
    ngOnInit() {
        this.route.params.subscribe(params => {
            let contactId = params['id'];
            this.getContactById(contactId);
        });

    }

    //Methods to get contact detail by id
    getContactById(id: number) {
        this.contactService.getContactById(id).subscribe(res => {
            this.contact = res
        })

    }
}
