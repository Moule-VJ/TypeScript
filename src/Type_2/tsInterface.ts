// Interface Methods
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printMethod: () => void;
  printTitle: (message: string) => string;
  printSomeThing: (someValue: number) => number;
}

export const deepWork: Book = {
  isbn: 123,
  title: "Dep Work",
  author: "Cal newPort",
  genre: "self-help",
  printMethod() {
    console.log(this.author);
  },
  printTitle(message) {
    return message;
  },
  //   First option
  //   printSomeThing: (someValue) => {
  //     return someValue;
  //   },

  //   Second option
  //   printSomeThing: function (someValue) {
  //     return someValue;
  //   },

  //   Third option
  printSomeThing(someValue) {
    return someValue;
  },
};

deepWork.printMethod();
deepWork.printTitle("an Awesome Book");

deepWork.printSomeThing(34);

// Interface Challenge

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam: (increase: number) => number;
  storage?: number;
}

const laptop: Computer = {
  id: Math.random(),
  brand: "Random brand",
  ram: 8,
  upgradeRam(increase) {
    this.ram += increase;
    return this.ram;
  },
};

laptop.storage = 256;
console.log(laptop.upgradeRam(10));
console.log(laptop);

// Interface Merging

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// We can add a property by again re writting the interface

interface Person {
  age: number;
}

export const person: Person = {
  name: "VJ",
  age: 25,
  getDetails() {
    return `The name is ${this.name} and the age is ${this.age}`;
  },
};

console.log(person.getDetails());

// Extending one interface to another
interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "Jane",
  age: 28,
  employeeId: 10446862,
  getDetails() {
    return `${this.name} ${this.age} ${this.employeeId}`;
  },
};

console.log(employee.getDetails());

// Extending Example 2

interface ManagePeople extends Person, DogOwner {
  managePeople(): void;
}

const manager: ManagePeople = {
  name: "Bob",
  age: 35,
  dogName: "Pit Butll",
  managePeople() {
    console.log(this.dogName);
  },
  getDetails() {
    return this.dogName;
  },
  getDogDetails() {
    return this.dogName;
  },
};

manager.managePeople();
console.log(manager.getDetails());
console.log(manager.getDogDetails());

// Interface Challenge 2

const getEmployee = (): Person_n | DogOwner_n | Manager_n => {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: "John",
    };
  } else if (random < 0.66) {
    return {
      name: "Sarah",
      dogName: "rex",
    };
  } else {
    return {
      name: "Bob",
      managePeople() {
        console.log(this.name);
      },
      delegateTask() {
        console.log("TASK");
      },
    };
  }
};

interface Person_n {
  name: string;
}

interface DogOwner_n extends Person_n {
  dogName: string;
}

interface Manager_n extends Person_n {
  managePeople(): void;
  delegateTask(): void;
}

const emplyee: Person_n | DogOwner_n | Manager_n = getEmployee();

console.log(emplyee);

// Type Predicate

const isManage_2 = (
  obj: Person_n | DogOwner_n | Manager_n
): obj is Manager_n => {
  return "managePeople" in obj;
};

console.log(isManage_2(emplyee));

if (isManage_2(emplyee)) {
  emplyee.delegateTask();
}

// Interface vs type Alias

//  Type aliases can represent primitive types, uniion types, intersection types, tuples, etc while interface are primarily used to represent the shape of an object.,

// things can do in type alias

type Score = number;
type NumberOfString = number | string;
type Direction = "up" | "down" | "left" | "right";

//  Using type aliases

export let gameScore: Score = 100;
export let move: Direction = "down";
export let random: NumberOfString = "2";

// Tuple

export let pperson: [string, number] = ["john", 25];

let date: [number, number, number] = [12, 17, 2001];
date.push(100);
date.push(56);

const getPerson = (): [string, number] => {
  return ["VJ", 245];
};

const randomPerson_2 = getPerson();
console.log(randomPerson_2);

export let susan: [string, number?] = ["VJ"];
