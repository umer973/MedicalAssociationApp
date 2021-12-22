import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Dish } from 'src/app/models/dish.model';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MessageType } from 'src/app/enums/messagetype.enum';
import { SpinnerService } from 'src/app/services/spinner.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  dish: Dish;
  fileToUpload: File = null;
  DishForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private spinnerService: SpinnerService,
    private service: CommonService,
    private notificationservice: NotificationService) { }

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
    this.DishForm.reset();
  }
  createFormControls() {
    this.DishForm = this.formBuilder.group({
      DishId: [0],
      Dishimage:  [''],
      DishNumber: ['',[Validators.required]],
      Dishname: ['', [Validators.required]],   
      Dishamount: ['', [Validators.required]]
    });
  }
  get f() { return this.DishForm.controls }


// only Alphabets
keyPressAlphabets(event){
  var inp = String.fromCharCode(event.keyCode);

  if (/^[A-Za-z ]+$/.test(inp)) {
    return true;
  } 
  else {
    event.preventDefault();
    return false;
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
   // submit
   onSubmit(){
     this.submitted = true;
     if (this.DishForm.valid) {
       this.dish = this.DishForm.getRawValue();
       console.log(this.dish);
       this.spinnerService.show();
       this.notificationservice.showSuccess(MessageType.Update, "Radix");
     }
   }
   
   onDelete(){
    document.getElementById("delete_popup").style.display = "block";
    document.getElementById("freeze").style.display = "block";
   } 

   ondataDelete(){
    
   }
   
   openDialog(isDelete:any)
   {
         if(isDelete)
         {
              this.ondataDelete()
         }
         
   }
}
