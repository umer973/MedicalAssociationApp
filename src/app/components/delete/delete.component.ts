import { Component, OnInit, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Output() deleteitem: EventEmitter<any> =  new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ondataDelete(){
   this.deleteitem.emit(true);
   document.getElementById("delete_popup").style.display = "none";
   document.getElementById("freeze").style.display = "none";
  }
  
  onClose(){
    document.getElementById("delete_popup").style.display = "none";
    document.getElementById("freeze").style.display = "none";
  }
}
