import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { LoginComponent } from './components/login/login.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { FrontOfficeComponent } from './components/front-office/front-office.component';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { DeleteComponent } from './components/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    ButtonComponent,
    ItemListComponent,
    FrontOfficeComponent,
    CommonDialogComponent,
    OrderListComponent,
    KitchenComponent,
    InvoiceComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
      positionClass: 'toast-top-center'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
