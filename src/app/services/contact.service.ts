import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    Api_Url: string = 'https://65ae98c31dfbae409a752b2f.mockapi.io/users/'
    constructor(private http: HttpClient) { }

    //contact List Methods
    getContactsList() {
        return this.http.get(this.Api_Url + `contacts`);
    }

    //contact detail by id method
    getContactById(id: number) {
        return this.http.get(this.Api_Url + `contacts/${id}`);
    }

}
