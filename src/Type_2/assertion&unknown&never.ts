// Assertion
// Unknown
// Error

let somneValue: any = "this is a string";
export let stringLength: number = (somneValue as string).length;

type Bird = {
  name: string;
};

// Json String Values

let birdString = '{"name" : "Eagle"}';
let dogString = '{"breed" : "poodle"}';

// By default the type is any, so we can assert it

let birdObject = JSON.parse(birdString) as Bird;
let dogObject = JSON.parse(dogString) as Bird;

console.log(birdObject.name);
console.log(dogObject.name);

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

// Retriveing some data from the DB

export const statusValue = "pending";

export const user: User = {
  name: "A",
  // status: statusValue,
  status: Status.Pending,
};

// Unknown

// The Unknown type is type-safe counterpart of type any,
// its saying like a variable could be anything, but we need to perform some kind of type checking before we use it

// "error instanceof Error" checks if the error object is an instance of the error class

let unknownValue: unknown;

unknownValue = "Hellow World";
unknownValue = [1, 2, 3, 4, 5];
unknownValue = 42.34567;

if (typeof unknownValue === "number") {
  unknownValue.toFixed(10);
}

const runSomeCode = () => {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("There was an error");
  } else {
    throw "some Error";
  }
};

try {
  runSomeCode();
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  }
  console.log(err);
}

// Type Never

// the below line of code throws an error
// let someValue: never = 0;

type Theme = "Light" | "Dark";

const checkTheme = (theme: Theme): void => {
  if (theme === "Light") {
    console.log("Light them" + theme);
    return;
  }

  if (theme === "Dark") {
    console.log("Dark them" + theme);
    return;
  }

  // The theme condition points never
  if (theme) {
    console.log("This is theme Never" + theme);
  }
};

enum Color {
  RED = "red",
  BLUE = "blue",
  GREEN = "green",
  PINK = "pink",
}

const getColor = (color: Color) => {
  switch (color) {
    case Color.RED:
      return "red";

    case Color.BLUE:
      return "blue";

    case Color.GREEN:
      return "green";

    case Color.PINK:
      return Color.PINK;

    default:
      // at build time error
      let unExpectedColor: never = color;

      // at run time error
      throw new Error(`UnExpected Color Value:${color}`);
  }
};

// Here we cannot pass the red string coz that will throw us an error

console.log(getColor(Color.RED));
console.log(getColor(Color.BLUE));

// Cause an Build Time error if we dont hanlde it in the switch case
console.log(getColor(Color.PINK));

// This will throw undefined
// console.log(getColor(Color.GREEN));
