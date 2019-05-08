import { Component,OnInit,Output,EventEmitter, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{Week,Day } from '../model/Week';
import { RevenueType } from '../model/RevenueType';
import {ListItem} from"src/app/Model/Structures"
import { element } from '@angular/core/src/render3/instructions';
import {NgbDate,NgbDateStruct, NgbCalendar, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EventModalComponent } from '../event-modal/event-modal.component';
import { Identifiers } from '@angular/compiler';




@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(private calendar: NgbCalendar,private customeDayModal: NgbModal) { }
  @ViewChild(EventModalComponent) customedayModal:EventModalComponent
  @Output() showCustomeDayModal: EventEmitter<any> = new EventEmitter();
  Selectable
  baseDay:NgbDateStruct
  grandTotal:number
  cashTotal:number
  weekSet:Week = new Week()
  currentWorkingDayOfWeek:number
  show:boolean[] = new Array(7).fill(true)
  showC:boolean[] = new Array(7).fill(true)
  showCustomDayModal:boolean
  showCustomRevenueModal:boolean

  weekList = new Array()

  calcTotal():{cashTotal:number, grandTotal:number}{
    
    return this.weekSet.getWeekTotal();
  }
                                
  addCustomDay(){
    this.showCustomDayModal = true;
    this.weekSet.Days.forEach((day)=> day) 
  }

  addCustomAmmount(){
    this.showCustomRevenueModal = true;
  }

  onCustomeDateSelected() {
    
  }
  showDay(index:number){
    this.show[index] = !this.show[index]
  }
  showCDay(index:number){
    this.showC[index] = !this.showC[index]

  }

  public loadWeek(date){
    var i = 0
    this.weekSet.Days = new Array() 
    
    console.log(date);
    while(i<7){
      let revenue: RevenueType[] = new Array(  
        new  RevenueType( '100s',100,null),
        new  RevenueType('50s',50,null),
        new  RevenueType('20s',20,null),
        new  RevenueType('10s',10,null),
        new  RevenueType('5s',5,null),
        new  RevenueType('2s',2 ,null),
        new  RevenueType('1s', 1,null)
        )
  
        var customRevenue = new Array(
          new  RevenueType( 'Epay',1,null),
          new  RevenueType('Check',1,null),
          new  RevenueType('Special',1,null),
        )
      var ndate = new Date(date.year, date.month-1, date.day);
      ndate.setDate(ndate.getDate()+i)
      let subset = new Array(
        new RevenueType("Tithe",1,null)
      )
      var daytoPush = new Day(0,0,"",
        ndate,
        revenue,
        customRevenue,subset);
        
      this.weekSet.Days.push(daytoPush)
      i++;
    }
    //console.log(this.baseDay)
  }
  addNewCustomeDay(values){
    console.log(values);
    let newDate= new Date(values.date.year, values.date.month-1, values.date.day);
    if(this.weekSet.customDays.findIndex( (day) => day.name == values.name) == -1){
      this.weekSet.customDays.push( this.GenerateDay(newDate,values.name))
    }

  }

  openVerticallyCentered() {
    this.customedayModal.show(this.baseDay);
    
  }

  ngOnInit() {

  this.loadWeek({year:2018, month: 6, day:1})
    //this.cashTypes.forEach((value )=> console.log(value.name))
    this.showCustomDayModal = false;
    this.showCustomRevenueModal=false;
    this.grandTotal = 0;
  }

  //make serive
  GenerateDay(date, name?):any{
    let revenue: RevenueType[] = new Array(  
      new  RevenueType( '100s',100,null),
      new  RevenueType('50s',50,null),
      new  RevenueType('20s',20,null),
      new  RevenueType('10s',10,null),
      new  RevenueType('5s',5,null),
      new  RevenueType('2s',2 ,null),
      new  RevenueType('1s', 1,null)
      )

      var customRevenue = new Array(
        new  RevenueType( 'Epay',1,null),
        new  RevenueType('Check',1,null),
        new  RevenueType('Special',1,null)
      )
      var subset = new Array(
        new RevenueType('Tithe',1,null)
      )
      console.log(name); 
      return new Day(0,0,name, date,revenue,customRevenue,subset);
      
        
  }
}



