import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',component: LayoutComponent,
    // children:[
    //   { path:'partner',component:PartnerComponent},
    //   { path: 'testimonials', component: TestimonialsComponent },
    //   { path: 'fileupload', component: FileuploadComponent },
    //   { path: 'clients', component: ClientsComponent },
    //   { path: 'dailog', component: CommondialogComponent}
    
    // ]
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
