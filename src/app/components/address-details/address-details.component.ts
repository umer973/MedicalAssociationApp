import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  @Input() addressDetailsForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  get f() { return this.addressDetailsForm.controls }

}
