// read only
class Abcd {
    constructor(public readonly name: string){
        this.name = name
    }

    getName(){
        console.log(this.name)
    }

    // setName(){
    //     this.name = "zyx"  cannot set any value because of readonly property
    // }
}

let abcd1 = new Abcd("Shoaib")
abcd1.getName()