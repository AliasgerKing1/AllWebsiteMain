import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-delmodal',
  templateUrl: './delmodal.component.html',
  styleUrls: ['./delmodal.component.scss']
})
export class DelmodalComponent implements OnInit {

  constructor() { }
@Input()  type:any;

@Output() delEvent = new EventEmitter();
delete()
 {
this.delEvent.emit("Rohit");
 } 
  ngOnInit(): void {
  }

}
