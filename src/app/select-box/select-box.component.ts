import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {ListItem} from"src/app/Model/Structures"
import { Day } from '../model/Week';
@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  @Output() OnDayClicked: EventEmitter<Number> = new EventEmitter();
  @Input("ObjectList") objectList:ListItem<null>[]
  @Input("DisplayName") displayName:boolean
  selectedIndex:number
  selected:boolean[] = new Array(7);
  multiSelect:boolean
  constructor() { }

  ngOnInit() {
    this.selected.fill(false)
    this.multiSelect = true;
  }

  itemClicked(param){
    
    if(!this.multiSelect){
      this.OnDayClicked.emit(param)
    return;
    }
    this.OnDayClicked.emit(param)
    this.selected[param] = !this.selected[param]

   


   
  }
}
