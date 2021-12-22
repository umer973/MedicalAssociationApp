import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from '../main/main.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AsidemenuComponent } from './asidemenu/asidemenu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidemenuComponent,
    AsidemenuComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
