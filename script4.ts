interface User {
  name: string;
  username: string;
  age: number;
  email: string;
}

function getUser(user: User) {
  (user.name = "shoaib"),
    (user.email = "zyx@"),
    (user.age = 19),
    (user.username = "ss");
}

interface Human2 {
  name: string;
}
interface Human2 {
  age: number;
}

function abcd(human: Human2) {
  (human.age = 19), (human.name = "ahsh");
}

// Extending Interface
interface Person {
  name: string;
}

interface Employee extends Person {
  job: string;
}

function getEmpDetails(emp: Employee){
    emp.name = "s",
    emp.job = "xyz"
}
