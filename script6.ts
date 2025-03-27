 //A constructor is a special method in a class that is automatically called when a new object (instance) 
 // of the class is created. It is used to initialize object properties.

 class Pendrive {
    public company: string;

    constructor(name: string) {
        this.company = name;
    }
}

class Pendrive2 {
    constructor(public name: string){
        this.name = name
    }
}

let p1 = new Pendrive("Sandisk");
let p2 = new Pendrive2("Sandisk");