import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input() contactDetailsForm:FormGroup;
  @Input() submitted;
  constructor() { }

  ngOnInit(): void {
  }
  get f() { return this.contactDetailsForm.controls }

}
