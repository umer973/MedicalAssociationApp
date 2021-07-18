import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
import { Login } from 'src/app/models/login.model';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MessageType } from 'src/app/enums/messagetype.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  
  userform: FormGroup;
  user: Login;
  isSubmitted: false;
  constructor(private formBuilder: FormBuilder,
    private router: Router, 
    private spinnerService: SpinnerService,  
    private service: CommonService,
    private notificationservice:NotificationService,) { }

  ngOnInit(): void {
    this.createFormControls();
  }
  createFormControls() {

    this.userform = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
      UseRole: ['']
    });
  }

  get f() { return this.userform.controls }
  
  onSubmit() {
    // this.spinnerService.show();
    // this.router.navigateByUrl('/layout/dashboard');

    if (this.userform.valid) {

      this.user = this.userform.getRawValue();
    
      this.spinnerService.show();
      this.service.PostLogin(this.user).subscribe(res => {
        console.log(res);
        let result: any = res;
        
        if (result.StatusCode == 200) {
                  
          if(result.Result!=undefined || result.Result!=null){
           
            localStorage.setItem('IsLoggedIn', 'true');
            this.router.navigate(['/layout'], { queryParams: { 'user': ""}});
            this.userform.reset();
           
          }
          else{
           
            this.notificationservice.showInfo(MessageType.Invalid,'Radix');
          }
        }
        this.spinnerService.hide();
        

      }
      , err => {

        this.notificationservice.showError(MessageType.ServerError,'Radix');
        this.spinnerService.hide();

      });
    }
    
  }

}
