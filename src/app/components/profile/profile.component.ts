import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { MessageType } from 'src/app/enums/messagetype.enum';
import { SpinnerService } from 'src/app/services/spinner.service';
import { CommonService } from 'src/app/services/common.service';
import { PersonalDetails } from 'src/app/models/register.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  result:PersonalDetails[] ;
  RegId : any
  constructor(private route: ActivatedRoute,
    private router:Router,
    private spinnerService: SpinnerService,
    private service: CommonService,
    private notificationservice: NotificationService,) { }

  ngAfterContentInit(): void {

  }

  ngOnInit(): void {
    debugger;
    this.showprofile();
  }

  showprofile(){

    let response;
    this.RegId = this.route.snapshot.queryParamMap.get('Id');
    console.log(this.RegId);
    alert('api')
    // this.spinnerService.show();
    // this.service.GetInitialData().subscribe(res => {
    //   response = res;
    //   if (response != undefined) {
    //    // this.result = response.Result.Registration;
        
       
    //     this.result=response.Result.Registration.filter(x=>x.RegistrationId==this.RegId);
    //     debugger;
    //     console.log(this.result[0].FirstName+  "gfffggfg");
    //   }
    //   this.spinnerService.hide();
    // }, err => {
    //   this.spinnerService.hide();
    //   this.notificationservice.showError(MessageType.ServerError, "Radix");
    // })
  }

}
