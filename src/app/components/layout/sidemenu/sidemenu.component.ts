import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit ,OnChanges {
  @Input() user: any;
  menus: any;
  constructor(private route:Router,
    private service: CommonService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  ngOnChanges() {

  }
  getMenus(){
    this.menus = [] = this.service.getMenus();
    console.log(this.menus);
  }
  
  /**navigation*/
  navigate_menu(menu){

    switch(menu)
    {
      case "Dashboard":
        this.route.navigate(['layout/dashboard'])
        break;
      case "Item List":
        this.route.navigate(['dashboard/itemlist'])
        break; 
      case "Front Office":
        this.route.navigate(['frontoffice'])
      break;
      case "Order List":
        this.route.navigate(['dashboard/orderlist'])
      break;
      case "Kitchen":
        this.route.navigate(['dashboard/kitchen'])
      break;
      case "Invoice":
        this.route.navigate(['dashboard/invoice'])
      break;
    }
  }
}
