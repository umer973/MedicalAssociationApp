import { Component,Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Bankdetails } from 'src/app/models/bankdetails.model';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-bankform',
  templateUrl: './bankform.component.html',
  styleUrls: ['./bankform.component.css']
})
export class BankformComponent implements OnInit {

  submitted= false;
  userform: FormGroup;
  user: Bankdetails;

  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    spinnerService: SpinnerService,
    private notificationservice: NotificationService,) { }

  ngOnInit(): void {
    this.createFormControls();
  }
  createFormControls() {

    this.userform = this.formBuilder.group({
      BankName: ['',  [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      Branch: ['',  [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      AccountNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      IFSC: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      MICR: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    });
  }

  get f() { return this.userform.controls }

  onSubmit(){
    this.submitted = true;
    if (this.userform.valid) {

      this.user = this.userform.getRawValue();

    }
  }


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

  /*Alphanumeric*/
  keyPressAlphanumeric(event) {

    var inp = String.fromCharCode(event.keyCode);
  
    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } 
    else {
      event.preventDefault();
      return false;
    }
    
   }

   // only Alphabets
keyPressAlphabets(event){
  var inp = String.fromCharCode(event.keyCode);

  if (/^[A-Za-z]+$/.test(inp)) {
    return true;
  } 
  else {
    event.preventDefault();
    return false;
  }

 }

}
