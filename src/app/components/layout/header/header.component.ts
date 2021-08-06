import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnChanges {

  menus: any;
  @Input() user: any;
  constructor(private route: Router, private service: CommonService,) { }

  ngOnInit(): void {
    this.getMenus();
  }

  ngOnChanges() {

  }

  /* LOADING MENUS */
  getMenus() {
    this.menus = [] = this.service.getMenus();
    console.log(this.menus);
  }

  /*MENU CONDITION*/
  getClass(menu) {

    if (menu == "Other Pages") {
      return "fa fa-angle-down";
    }
  }
  getdropdown(menu) {

    if (menu == "Other Pages") {
      return "menu-item";
    }
  }
  getIcon(menu) {
    switch (menu) {
      case "About Us":
        return "fa fa-info";
        break;
      case "File Upload":
        return "fa fa-upload";
        break;
      case "Other Pages":
        return "fa fa-file";
        break;
    }
  }

  /**navigation*/
  navigate_menu(menu) {

    switch (menu) {
      case "Dashboard":
        this.route.navigate(['layout/dashboard'])
        break;
      case "About Us":
        this.route.navigate(['layout/dashboard'])
        break;
      case "File Upload":
        this.route.navigate(['dashboard/fileupload'])
        break;
    }
  }
  navigate_sub(sub) {

    switch (sub) {
      case "Testimonials":
        this.route.navigate(['dashboard/testimonials'])
        break;
      case "Clients":
        this.route.navigate(['dashboard/clients'])
        break;
      case "Partners":
        this.route.navigate(['dashboard/partner'])
        break;
      case "Clients":
        this.route.navigate(['dashboard/clients'])
        break;
    }

  }

}
