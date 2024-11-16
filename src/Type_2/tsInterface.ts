// Interface
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: "Deep Work",
  author: "Cal newport",
  genre: "Self-Help",
  // printAuthor() {
  //   console.log(this.author);
  // },
  printTitle(message) {
    return `${this.title} and ${message}`;
  },

  // FIRST OPTION

  printSomething: function (someValue) {
    return someValue;
  },

  // SECOND OTPION

  // printSomething: (someValue) => {
  //   console.log(deepWork.author);
  //   return someValue;
  // },

  // Third Option

  // printSomething: (someValue) => {
  //   return someValue;
  // },

  // Another way of implementing it
  printAuthor: () => {
    console.log(deepWork.author);
  },
};

// Interface Methods

deepWork.printAuthor();
const result = deepWork.printTitle("is awesome book");
console.log(result);

console.log(deepWork.printSomething(34));

// Interface Challenge

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam: (increase: number) => number;
  storage?: number;
}

const lapTop: Computer = {
  id: 1,
  brand: "random brand",
  ram: 8,
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};

lapTop.storage = 256;
console.log(lapTop.upgradeRam(4));

// Interface Merge and Extend

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Extending Person interface
interface Person {
  age: number;
}

const person: Person = {
  name: "John",
  age: 26,
  getDetails() {
    return `Name is ${this.name} and age is ${this.age}`;
  },
};

console.log(person.getDetails());

interface Employee extends Person {
  employeeID: number;
}

// Extending the interface

export const employee: Employee = {
  name: "jane",
  age: 28,
  employeeID: 123,
  getDetails() {
    return `hi i am ${this.name} and this is my ${this.employeeID}`;
  },
};

// Example 2

interface Manager extends Person, DogOwner {
  managePeople: () => void;
}

export const manager: Manager = {
  name: "bob",
  age: 35,
  dogName: "Bubbu",

  getDetails() {
    return `Name : ${this.name}, age : ${this.age}`;
  },

  // Couldnt use arrow funciton
  getDogDetails() {
    return `Name : is ${this.dogName} `;
  },

  managePeople() {
    console.log("Managing people");
  },
};

// Interface Challenge Part One (with Type Gaurd)

interface Personn {
  name: string;
}

interface DogOwnerr extends Personn {
  dogName: string;
}

interface Managerr extends Personn {
  managePeople(): void;
  delegateTask(): void;
}

const getEmployees = (): Personn | DogOwnerr | Managerr => {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: "JOhn",
    };
  } else if (random < 0.66) {
    return {
      name: "Sarah",
      dogName: "rex",
    };
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("Managing People...");
      },
      delegateTask() {
        console.log("delegating the task...");
      },
    };
  }
};

const employees: Personn | DogOwnerr | Managerr = getEmployees();

console.log(employees);

// Interface Type Predicate
// by checking the interface type and its property

const isManager = (obj: Personn | DogOwnerr | Managerr): obj is Managerr => {
  return "managePeople" in obj;
};

console.log(isManager(employees));

if (isManager(employees)) {
  employees.delegateTask();
} else {
  console.log("he is not a manager");
}

// Tuple
// Defining the type of an array

let personTuple: [string, number] = ["john", 25];

let date: [number, number, number] = [12, 17, 2001];

date.push(90);

const getPerson = (): [string, number] => {
  return ["john", 25];
};

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let susan: [string, number?] = ["Susan", 34];
