import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { ItemListComponent } from '../item-list/item-list.component';
import { FrontOfficeComponent } from '../front-office/front-office.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { InvoiceComponent } from '../invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: 'frontoffice', component: FrontOfficeComponent},
  {
    path: 'dashboard',component: LayoutComponent,
    children:[
    { path: 'itemlist', component: ItemListComponent},
    { path: 'orderlist', component: OrderListComponent },
    { path: 'kitchen', component: KitchenComponent },
    { path: 'invoice', component: InvoiceComponent}
    
     ]
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
