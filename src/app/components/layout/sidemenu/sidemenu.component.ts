import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit ,OnChanges {


  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }

}
