import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MessageType } from 'src/app/enums/messagetype.enum';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, AfterViewInit {

  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private spinnerService: SpinnerService,
    private service: CommonService,
    private notificationservice: NotificationService,) { }

  ngAfterViewInit(): void {
    //this.loadInitaildata();
  }
  ngOnInit(): void {
    
  }

}
