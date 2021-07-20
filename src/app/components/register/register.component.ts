import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalDetails, Register } from 'src/app/models/register.model';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MessageType } from 'src/app/enums/messagetype.enum';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

  userform: FormGroup;
  register: Register;
  imageURL: string;
  submitted = false;
  


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private spinnerService: SpinnerService,
    private service: CommonService,
    private notificationservice: NotificationService,) { }

  ngOnInit(): void {
    this.createFormControls();
  }

  createFormControls() {
    this.userform = this.formBuilder.group({
      PersonalDetails: this.formBuilder.group({
        RegistrationNo: [''],
        ProfilePic: [''],
        FirstName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        MiddleName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        LastName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        FatherName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        FatherFirstName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        FatherMiddleName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        CompanyId: ['', Validators.required],
        DivisionId: ['', Validators.required],
        DesignationId: ['', Validators.required],
        EmpCode: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5), Validators.pattern("[0-9]*$")]],
        DateofJoining: ['', Validators.required]
      }),

      AddressDetails: this.formBuilder.group({
        Country: new FormControl(['', Validators.required]),
        State: ['', Validators.required],
        District: ['', Validators.required],
        PoliceStation: ['', Validators.required],
        Street: ['', Validators.required],
        HouseNo: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5), Validators.pattern("[0-9]*$")]],
        Lane: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5), Validators.pattern("[0-9]*$")]],
      }),

      ContactDetails: this.formBuilder.group({
        EmailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        ContactNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern("[0-9]*$")]],
        LandlineNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern("[0-9]*$")]]
      })
    });

    this.userform.valueChanges.subscribe(newVal=>console.log(newVal))

  }

  get f() { return this.userform.controls }

  onSubmit() {
    this.submitted = true;
    // this.router.navigateByUrl('/login');
    if (this.userform.valid) {

      this.register = this.userform.getRawValue();

      this.spinnerService.show();
     
      this.service.Register(this.register).subscribe(res => {
        console.log(res);
        let result: any = res;
        if (result.StatusCode == 200) {

          if (result.Result != undefined || result.Result != null) {

            this.notificationservice.showSuccess(MessageType.Save, "Radix");
            this.router.navigateByUrl('/login');
            // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userform.value, null, 4));
            this.userform.reset();
          }
          else {
            this.notificationservice.showInfo(MessageType.Invalid, 'Radix');
          }
          this.userform.reset();
        }
        this.spinnerService.hide();
      }, err => {
        this.spinnerService.hide();
        this.notificationservice.showError(MessageType.ServerError, "Radix");
      });
    }
  }


  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

}
