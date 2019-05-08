import { Component, OnInit } from '@angular/core';
import {NgbDate,NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fundrasier',
  templateUrl: './fundrasier.component.html',
  styleUrls: ['./fundrasier.component.css']
})
export class FundrasierComponent implements OnInit {

  constructor() { }
  newDate:NgbDate
  newName:string
  newAmmount:number
  DateContributionsList:{name:string , ammount:number, date:NgbDate}[]
  personalContributionList:{name:string , ammount:number, date:NgbDate}[]
  

  saveNewPersonalCon(){
    //this.personalContributionList.push({"francis", ammount:number, date:NgbDate})
  }

  saveNewDailyCon(){

  }

  ngOnInit() {
  }

}
