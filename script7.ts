// Types of Access Modifiers
// public (Default) → Accessible everywhere.
// private → Accessible only within the class.
// protected → Accessible within the class and subclasses (child classes).


// public
class Car {
  public brand: string; // Can be accessed anywhere

  constructor(brand: string) {
    this.brand = brand;
  }

  public showBrand() {
    console.log(`Brand: ${this.brand}`);
  }
}

const car1 = new Car("Toyota");
console.log(car1.brand); // ✅ Allowed
car1.showBrand(); // ✅ Allowed


// private
class BankAccount {
  private balance: number; // Can't be accessed outside the class

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public getBalance() {
    return this.balance;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // ✅ Allowed
// console.log(account.balance); ❌ Error: Property 'balance' is private


// protected
class Person {
  protected fullName: string; 

  constructor(fullName: string) {
    this.fullName = fullName;
  }
}

class Employee extends Person {
  private jobTitle: string;

  constructor(fullName: string, jobTitle: string) {
    super(fullName);
    this.jobTitle = jobTitle;
  }

  public getDetails() {
    console.log(`Employee Name: ${this.fullName}, Job: ${this.jobTitle}`);
  }
}

const emp = new Employee("Alice", "Developer");
emp.getDetails(); // ✅ Allowed
//console.log(emp.fullName); ❌ Error: Property 'fullName' is protected
