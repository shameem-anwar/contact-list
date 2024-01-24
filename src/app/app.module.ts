import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsComponent } from './contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';

//Material Modules
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


//Services
import { ContactService } from './services/contact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent,
    ContactScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    //Material Modules
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
