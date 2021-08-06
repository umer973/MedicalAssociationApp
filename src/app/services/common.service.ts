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
  
  /***REGISTRATION***/
  Register(body: any) {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "Registration", body, { headers: headers });
  }
  /*Load Companies*/
  GetmasterData() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + "GetMasterData", { headers: headers });
  } 
  
  GetInitialData() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + "GetAllRegistration", { headers: headers });
  }

  // postFile(fileToUpload: File) {

  //   const formData: FormData = new FormData();
  //   formData.append('file', fileToUpload, fileToUpload.name);
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   return this.http.post(this.url + "UploadFile", formData, { headers: headers });
  // }
  /*****LOADING MENUS ******/
  getMenus() {

    const Menus = [
      {
        "MenuID": 1, "MenuName": "Dashboard", "path": "dashboard",
      },
      {
        "MenuID": 2, "MenuName": "About Us", "path": "",
      },
      {
        "MenuID": 3, "MenuName": "File Upload", "path": "fileupload",
      },
      {
        "MenuID": 4, "MenuName": "Other Pages", "path": "",
        "Pages": [
          { "path": "page2", "PageName": "Testimonials" },
          { "path": "page2", "PageName": "Clients" },
          { "path": "page2", "PageName": "Partners" }
        ]
      },
    ]
    return Menus;
  }


}
