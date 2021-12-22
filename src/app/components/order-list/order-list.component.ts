import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Dish } from 'src/app/models/dish.model';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MessageType } from 'src/app/enums/messagetype.enum';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  dish: Dish;
  DishForm: FormGroup;
  UpdateForm: FormGroup;
  submitted = false;
  updated= false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private spinnerService: SpinnerService,
    private service: CommonService,
    private notificationservice: NotificationService) { }

    ngOnInit(): void {
      this.createFormControls();
      this.updateFormControls();
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
    document.getElementById("orderDetails").style.display="none";
    this.DishForm.reset();
    this.submitted = false;
    this.updated = false;
  }
  createFormControls() {
    this.DishForm = this.formBuilder.group({
      orderId: [0],
      Ordernumber: ['',[Validators.required]],
      OrderDate: ['', [Validators.required]],
      Tableno: ['', [Validators.required]],
      Ordername: ['', [Validators.required]],
      Orderquantity: ['', [Validators.required]], 
      price: ['', [Validators.required]],
      Amount: ['', [Validators.required]],
      CustomerDetails: ['', [Validators.required]],
      Totalamount: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }
  get f() { return this.DishForm.controls }

  updateFormControls(){
    this.UpdateForm= this.formBuilder.group({
      orderId: [0],
      Ordername: ['', [Validators.required]],
      Orderquantity: ['', [Validators.required]], 
      price: ['', [Validators.required]],
      Amount: ['', [Validators.required]]
    })
  }
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
// open orderdetails
   open_Order(){
    document.getElementById("orderDetails").style.display="block";
    document.getElementById("freeze").style.display = "block";
  }
// on edit orders
  onEdit(){

  }
  onupdate(){
    this.updated = true;
  }
/* ON DELETE */
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
