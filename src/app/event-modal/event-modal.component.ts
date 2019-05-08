import { Component, OnInit,ViewChild,TemplateRef,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbActiveModal,NgbModal,NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {

  @Output() saveCustomeDay:EventEmitter<{date:NgbDateStruct, name:string}> = new EventEmitter();
  @ViewChild('content')
  defaultTabButtonsTpl: TemplateRef<any>;
  constructor(private modalservice:NgbModal) {}
  date:NgbDateStruct;
  name:string;

  save(){
    this.saveCustomeDay.emit({date:this.date, name:this.name})
    NgbActiveModal
  }
  show(startdate:NgbDateStruct){
    this.date = startdate;
    this.modalservice.open(this.defaultTabButtonsTpl);
    
  }

  ngOnInit() {
  }

}
