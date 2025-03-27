// Functions

// Named functions
function abcd(): void {
    console.log("Doesn't return anything")
}

// Anonymous functions 
(function(){})

// Arrow functions
const abcd2 = (): void => {}

// Explicit return type  -- hum bta rhe h function kya return krra h
function abcd3(): string {
    return "hey"
}

// Implicit return type  -- function kya return krra h vo khudh pta krra h
function abcd4() {
    return "hey"
}

// Optional parameters
function user(name: string, age: number, gender?: string){}
user("shoaib", 19)

// Default parameters
function abcd5(name: string = "khan shoaib"){
    console.log(name)
}
abcd5("shoaib")

// Rest parameters
function names(...names: string[]){}

names("shoaib", "faisal", "anas", "huzaifa")