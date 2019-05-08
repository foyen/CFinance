export class ListItem<T> {
    name:string
    value:string
    storeage:T

    constructor(name?:string){
        this.name = name;
    }
}

