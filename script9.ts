// getter and setter

class Person2 {
  private _age: number; // Private property

  constructor(age: number) {
    this._age = age;
  }

  // Getter method
  public get age(): number {
    return this._age;
  }

  // Setter method with validation
  public set age(newAge: number) {
    if (newAge < 0) {
      console.log("Age cannot be negative!");
      return;
    }
    this._age = newAge;
  }
}

const person = new Person2(25);
console.log(person.age); // ✅ Calls getter -> 25

person.age = 30; // ✅ Calls setter
console.log(person.age); // 30

person.age = -5; // ❌ Invalid, setter prevents negative values
