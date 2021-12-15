import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthComponent } from './tut/auth/auth.component';
import { FirestoreTutComponent } from './tut/firestore-tut/firestore-tut.component';
import { FormsTutComponent } from './tut/forms-tut/forms-tut.component';
import { HttpTutComponent } from './tut/http-tut/http-tut.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', canActivate: [AuthGuard], component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/customers', pathMatch: 'full' },
      { path: 'customers', component: CustomersComponent },
      { path: 'customers/new', component: CustomersNewComponent },
      { path: 'customers/:id', component: CustomersDetailsComponent },
      { path: 'customers/:id/edit', component: CustomersEditComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'tut/http', component: HttpTutComponent },
      { path: 'tut/forms', component: FormsTutComponent },
      { path: 'tut/firestore', component: FirestoreTutComponent },
      { path: 'tut/auth', component: AuthComponent },
    ],
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
