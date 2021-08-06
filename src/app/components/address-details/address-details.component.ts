import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit, OnChanges {

  @Input() addressDetailsForm:FormGroup;
  @Input() submitted: boolean;
  @Input() data: any;
  selectedOption;

  countries = [];
  states = [];
  districts = [];
  policestation = [];

  constructor() { }

  ngOnInit(): void {
  }
  get f() { return this.addressDetailsForm.controls }

  ngOnChanges(){
    console.log(this.data);
    if (this.data! != undefined) {
      this.countries = this.data.Country;
      // this.division=this.data.Division;
      console.log(this.submitted);
    }

  }
  getState() {

    let countryId = this.addressDetailsForm.controls.Country.value
    this.states = this.data.State.filter(x => x.CountryId == countryId)

    console.log(this.states);

  }

  getDistrict() {

    let countryId = this.addressDetailsForm.controls.Country.value
    let stateId = this.addressDetailsForm.controls.State.value
    this.districts = this.data.District.filter(x => x.CountryId == countryId && x.StateId == stateId)

    console.log(this.districts);

  }

  getPolicestation(){
    let countryId = this.addressDetailsForm.controls.Country.value
    let stateId = this.addressDetailsForm.controls.State.value
    let districtId = this.addressDetailsForm.controls.District.value
    this.policestation = this.data.PoliceStation.filter(x => x.CountryId == countryId && x.StateId == stateId &&  x.DistrictId == districtId)

    console.log(this.policestation);
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
}
