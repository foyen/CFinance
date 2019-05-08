
export class RevenueType {
    id:number
    name:string
    multiplier:number
    numberOf:number
    color:string="#eaeaea"

    constructor(name:string,multiplier:number,numberOf:number,color:string="#eaeaea"){
        this.name = name;
        this.multiplier = multiplier;
        this.numberOf = null;
    }


}
