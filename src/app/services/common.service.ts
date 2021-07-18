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

  // GetInitialData() {

  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get(this.url + "GetEnquiry", { headers: headers });
  // }

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

  /*******Partners*******/
  // GetPartners() {
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get(this.url + "GetPartners", { headers: headers });
  // }
  // insertPartners(body) {
  //   let headers = new Headers({ 'Accept': 'Application/json' });
  //   return this.http.post(this.url + "SavePartners", body)
  // }
  // deletePartners(partnerId: any) {
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get(this.url + "DeletePartner?partnerId=" + partnerId, { headers: headers });
  // }


  /*******testimonials*******/
  // GetTestmonials() {
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get(this.url + "GetTestimonials", { headers: headers });
  // }
  // insertTestimonials(body) {
  //   let headers = new Headers({ 'Accept': 'Application/json' });
  //   return this.http.post(this.url + "SaveTestimonials", body)
  // }
  // deleteTestimonial(testimonialId: any) {
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get(this.url + "DeleteTestimonial?testimonialId=" + testimonialId, { headers: headers });
  // }

  /*******CLIENTS*******/
  // GetClients() {
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get(this.url + "Client", { headers: headers });
  // }
  // insertClients(body) {
  //   let headers = new Headers({ 'Accept': 'Application/json' });
  //   return this.http.post(this.url + "SaveClients", body)
  // }
  // deleteClients(clientId: any) {
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get(this.url + "DeleteClient?clientId=" + clientId, { headers: headers });
  //}
  /*******File Upload*******/
  // fileUpload(fileToUpload: File) {
  //   const formData: FormData = new FormData();
  //   formData.append('file', fileToUpload, fileToUpload.name);
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   return this.http.post(this.url + "UploadImage", formData, { headers: headers });

  // }

  
}
