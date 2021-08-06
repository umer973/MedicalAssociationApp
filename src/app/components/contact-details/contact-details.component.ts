import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input() contactDetailsForm:FormGroup;
  @Input() submitted: boolean;
  message: any;
  constructor() { }

  ngOnInit(): void {
  }
  get f() { return this.contactDetailsForm.controls }

  // Only Integer Numbers
  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;   
    } else {      
      return true;
    }
  }

  keyPressEmail(event) {

    var inp = String.fromCharCode(event.keyCode);
  
    if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

}
