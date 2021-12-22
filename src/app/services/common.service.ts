import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  url = environment.API_URl

  /***LOGIN***/
  PostLogin(body: any) {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "postLogin", body, { headers: headers });
  } 
  
  GetInitialData() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + "GetAllRegistration", { headers: headers });
  }
  /*****LOADING MENUS ******/
  getMenus() {

    const Menus = [
      {
        "MenuID": 1, "MenuName": "Dashboard", "path": "dashboard",
      },
      {
        "MenuID": 2, "MenuName": "Item List", "path": "itemlist",
      },
      {
        "MenuID": 3, "MenuName": "Front Office", "path": "frontoffice",
      },
      {
        "MenuID": 4, "MenuName": "Order List", "path": "orderlist",
      },
      {
        "MenuID": 5, "MenuName": "Kitchen", "path": "kitchen",
      },
      {
        "MenuID": 6, "MenuName": "Invoice", "path": "invoice",
      }
      // {
      //   "MenuID": 4, "MenuName": "Other Pages", "path": "",
      //   "Pages": [
      //     { "path": "page2", "PageName": "Testimonials" },
      //     { "path": "page2", "PageName": "Clients" },
      //     { "path": "page2", "PageName": "Partners" }
      //   ]
      // },
    ]
    return Menus;
  }

}
