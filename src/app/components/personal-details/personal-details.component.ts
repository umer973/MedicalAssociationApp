import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @Input() personalDetailsForm:FormGroup;
  @Input() submitted;
  constructor() { }

  ngOnInit(): void {

  }
  get f() { return this.personalDetailsForm.controls }

}
