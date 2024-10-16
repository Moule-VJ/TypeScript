// Type Assertion

let someValue: any = "THis is a string";

export let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name":"Eagle"}';
let dogString = '{"breed":"poddle"}';

// ByDefault the value is any

let birdObject = JSON.parse(birdString);

let bird = birdObject as Bird;

// This will return undefined
let dog = birdObject as Bird;

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

const statusValue = "pending";

//  Another usecase of Type Assertion

const user: User = {
  name: "john",
  status: statusValue as Status,
};

// Type Unknown its an alternative to type any

let unknownValue: unknown;

unknownValue = "Hellow World";
unknownValue = [1, 2, 3, "Hellow", "World"];
unknownValue = 43;

// This is not possible since the value here is unknown

// unknownValue.toFixed(2)

// It can be done in this way
if (typeof unknownValue === "number") {
  unknownValue.toFixed();
}

const runSomecode = () => {
  const random = Math.random();

  if (random < 0.5) {
    throw new Error("there was an error");
  } else {
    throw "Some Error";
  }
};

try {
  runSomecode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

//  Type Never

// In TypeScript never is a type that represents the type of values that never occur. you cant assign any value to a variable of type never

// we cannot assign any value to type never

// let someValue: never = "Hellow World";

type Theme = "Light" | "dark";

const checkTheme = (theme: Theme): void => {
  if (theme === "Light") {
    console.log("Light THeme");
    return;
  }

  if (theme === "dark") {
    console.log("");
    return;
  }
};

enum Color {
  Red,
  Blue,
  Green,
}

export const getColorName = (color: Color) => {
  switch (color) {
    case Color.Red:
      return "Red";

    case Color.Blue:
      return "Blue";

    case Color.Green:
      return "Green";

    default:
      // at build time
      let unExpectedColor: never = color;
      // At run Time
      throw new Error(`Unexpected Color Value : ${color}`);
  }
};

console.log(getColorName(Color.Blue));

// Modules in TS

// "moduleDetection": "force",

// this declartion in tsconfig file will change the modules usage in typescript

export const sayHello = (name: string): void => {
  console.log(`Hello ${name}`);
};

export let person = "SUSAN";

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: "peter",
  age: 24,
};

export default newStudent;
