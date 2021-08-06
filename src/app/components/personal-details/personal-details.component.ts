import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { SpinnerService } from 'src/app/services/spinner.service';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit, OnChanges {

  @Input() personalDetailsForm: FormGroup;
  @Input() submitted: boolean;
  @Input() data: any;
  selectedOption;

  companies = [];
  division = [];
  designations = [];


  constructor(private service: CommonService,
    private spinnerService: SpinnerService) { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    console.log(this.data);
    if (this.data! != undefined) {
      this.companies = this.data.Company;
      this.designations = this.data.Designation;
      // this.division=this.data.Division;
      console.log(this.submitted);
    }
  }
  get f() { return this.personalDetailsForm.controls }

  getDivision() {

    let companyId = this.personalDetailsForm.controls.CompanyId.value
    this.division = this.data.Division.filter(x => x.CompanyId == companyId)

    console.log(this.division);

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
