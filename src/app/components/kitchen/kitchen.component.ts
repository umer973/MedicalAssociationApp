import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Kitchen } from 'src/app/models/kitchen.model';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MessageType } from 'src/app/enums/messagetype.enum';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  kitchen: Kitchen;
  KitchenForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinnerService: SpinnerService,
    private service: CommonService,
    private notificationservice: NotificationService
  ) { }

  ngOnInit(): void {
    this.createFormControls();
  }
  
  // open dish popup
  open_popup(){
    document.getElementById("dish_popup").style.display="block";
    document.getElementById("freeze").style.display = "block";
   }
   // close dish popup
  close_popup(){
   document.getElementById("dish_popup").style.display="none";
   document.getElementById("freeze").style.display = "none";
   this.KitchenForm.reset();
 }

 createFormControls() {
  this.KitchenForm = this.formBuilder.group({
    orderId: [0],
    status: ['', [Validators.required]]
  });
}
get f() { return this.KitchenForm.controls }

  onSubmit(){
    this.submitted = true;
     if (this.KitchenForm.valid) {
       this.kitchen = this.KitchenForm.getRawValue();
       console.log(this.kitchen);
       this.spinnerService.show();
       this.notificationservice.showSuccess(MessageType.Update, "Radix");
     }
  }
}
