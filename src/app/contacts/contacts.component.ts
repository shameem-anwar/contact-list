import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    contactList: any = [];
    searchControl = new FormControl('');
    filteredContactList: any = []
    @Output() contactSelected = new EventEmitter<any>();

    constructor(private conactService: ContactService, private router: Router) { }

    //life cycle hook
    ngOnInit() {
        this.getContactsList()

        this.searchControl.valueChanges
            .pipe(
                debounceTime(300), // wait for 300 milliseconds after each keystroke
                distinctUntilChanged() // ignore if the value is the same as the previous one
            )
            .subscribe((searchTerm: any) => {
                this.filteredContactList = this.filterContacts(searchTerm);
            });
    }

    //methods to get Contacts List
    getContactsList() {
        this.conactService.getContactsList().subscribe(res => {
            this.contactList = res
            this.filteredContactList = res;
        })
    }

    //method to route and show contact detail by specific contact id
    showContactDetails(contact: any) {
        this.contactSelected.emit(contact);
        this.router.navigate(['/contacts', contact.id]);
    }

    //method to search specific contact
    filterContacts(searchTerm: string): any[] {
        return this.contactList.filter((contact: any) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
}
