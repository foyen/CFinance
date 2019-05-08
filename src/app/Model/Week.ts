import {RevenueType} from './RevenueType';
export class Week{
    id:number
    startDay:number
    startDate:Date
    name:string
    Days:Day[]
    customDays:Day[]
    
    constructor(){
        this.Days = new Array();
        this.customDays = new Array()
    }

    public getWeekTotal():{cashTotal:number, grandTotal:number}{
        let total:number = 0;
        let totalCash = 0;
        this.Days.forEach( day =>{
            day.cashRevenue.forEach(element => {
                totalCash += element.multiplier * element.numberOf;
            });
        
            day.customeRevenue.forEach(element => {
                total += element.numberOf;
            })
        })
        this.customDays.forEach( day =>{
            day.cashRevenue.forEach(element => {
                totalCash += element.multiplier * element.numberOf;
            });
        
            day.customeRevenue.forEach(element => {
                total += element.numberOf;
            })
        })


        return{cashTotal:totalCash, 
                grandTotal:total+totalCash}
    }
}
export enum WEEKDAYS{
    
}
export class Day {
    id:number
    dayNumber:number
    date:Date
    cashRevenue:RevenueType[]
    customeRevenue:RevenueType[]
    subset:RevenueType[]
    name:string
    
    constructor(id:number, dayNumber:number,name:string, date:Date, cashRevenue:RevenueType[],customeRevenue:RevenueType[],subset:RevenueType[]){
        this.id = id;
        this.date = date;
        this.cashRevenue = cashRevenue;
        this.customeRevenue = customeRevenue;
        this.subset = subset;
        if(name == "" || name == null){
        this.name = this.getDayString();
        }else{
            this.name = name;
        }
         
    }
    getTotal():{cashTotal:number, grandTotal:number}{
        let totalCash = 0
        let total = 0;
        this.cashRevenue.forEach(element => {
            totalCash += element.multiplier * element.numberOf;
        });
        console.log(totalCash)
        this.customeRevenue.forEach(element => {
            total += element.numberOf;
        })
        
        
        return{cashTotal:totalCash, grandTotal:total+totalCash}
    }
    getDayString(){
        switch(this.date.getDay()){
            case 0: return "Sunday"
            case 1: return "Monday"
            case 2: return "Tuesday"
            case 3: return "Wednesday"
            case 4: return "Thursday"
            case 5: return "Friday"
            case 6: return "Saturday"
        }
    }
}