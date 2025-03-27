// Basic Types
// Number, String, Boolean
// Arrays, Tuples
// Any, Unknown, Never, Void
// Enums

let a: number;
let b: string;
let c: boolean;
let arr: [];

// A tuple is a fixed-size collection of elements where each element can have a different type. 
// Unlike arrays, the types and order of elements in a tuple are strictly defined at declaration.
let arr2: [string, number, boolean] = ["shoaib", 23, true];

// any and unknown are very very similar
let variable: any;
variable = "shoaib"
variable = true

function abcd(): void{
    console.log("A function doesn't return anything")
}
abcd()

enum Direction {
    up = "UP",
    down = "DOWN",
    left = "LEFT",
    right = "RIGHT"
}
Direction.left