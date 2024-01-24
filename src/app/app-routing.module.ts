import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';

const routes: Routes = [
    {
        path: 'contacts',
        component: ContactScreenComponent,
        children: [
          { path: ':id', component: ContactDetailComponent }
        ]
      },
      { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
