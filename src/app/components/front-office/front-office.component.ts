import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MessageType } from 'src/app/enums/messagetype.enum';
import { SpinnerService } from 'src/app/services/spinner.service';
import { Dish } from 'src/app/models/dish.model';


@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.css']
})
export class FrontOfficeComponent implements OnInit {
  
  dish: Dish;
  fileToUpload: File = null;
  DishForm: FormGroup;
  cardImageBase64: string;
  result: any;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private spinnerService: SpinnerService,
    private service: CommonService,
    private notificationservice: NotificationService,) { }

    ngOnInit(): void {
      document.getElementById("showItems").style.display="none";
    }
  
    //show items
    showDetails(){
      document.getElementById("showItems").style.display="block";
    }
    
    // open dish popup
    open_popup(){
     document.getElementById("dish_popup").style.display="block";
     document.getElementById("freeze").style.display = "block";
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
    
    openDialog(isOpen:any)
    {
        if(isOpen)
        {
          this.onSubmit()
        }
        
    }

}
