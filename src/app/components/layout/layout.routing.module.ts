import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "./layout.component";
import { ProfileComponent } from '../profile/profile.component';
import { BankformComponent } from '../bankform/bankform.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',component: LayoutComponent,
    children:[
      { path:'profile',component:ProfileComponent},
      { path: 'bankdetails', component: BankformComponent },
    //   { path: 'fileupload', component: FileuploadComponent },
    //   { path: 'clients', component: ClientsComponent },
    //   { path: 'dailog', component: CommondialogComponent}
    
     ]
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
