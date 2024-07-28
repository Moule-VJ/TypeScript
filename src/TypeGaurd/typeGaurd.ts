type ValueTupe = string | number | boolean;

let value: ValueTupe;

const random = Math.random();

value = random > 0.5 ? "Hello" : random > 0.2 ? 100 : false;

export const checkValue = (value: ValueTupe): void => {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
    return;
  }

  if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  }
};

checkValue(value);

// Type Gaurd
export type Dog = { type: "dog"; name: string; bark: () => void };
export type Cat = { type: "cat"; name: string; meow: () => void };

type Animal = Dog | Cat;

// Solution 1

export const makeSound = (animal: Animal) => {
  if (animal.type === "dog") {
    console.log("Dog barks");
    animal.bark();
    return;
  }
  animal.meow();
  return;
};

// Solution 2

export const makeNoise = (animal: Animal) => {
  if ("bark" in animal) {
    console.log("Dog barks");
    animal.bark();
    return;
  } else {
    console.log("Cat meows");
    animal.meow();
    return;
  }
};

// Challenge

export const printLength = (str: string | null | undefined) => {
  if (str) {
    console.log(str.length);
  } else {
    console.log("no string provided");
  }
};

printLength("Hello");
printLength("");
printLength(null);
printLength(undefined);

try {
  throw new Error("This is an error");
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log("unknown error");
  }
}

export const checkInput = (input: Date | string): string => {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }

  return input;
};

const year = checkInput(new Date());
const randomm = checkInput("2020-03-12");

console.log(year);
console.log(randomm);

// Challenge

type Studentt = {
  name: string;
  study: () => void;
};

type Userr = {
  name: string;
  login: () => void;
};

type Person = Studentt | Userr;

export const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "Mouli VJ", study: () => console.log("Studying") }
    : { name: "VJ", login: () => console.log("Logging in") };
};

const anotherPerson: Person = {
  name: "Mouli VJ",
  login: () => console.log("Studying"),
};

export const isStudent = (person: Person): person is Studentt => {
  return (person as Studentt).study !== undefined;
};

if (isStudent(anotherPerson)) {
  anotherPerson.study();
} else {
  anotherPerson.login();
}

// Descrimitating Union

type IncrementAction = {
  type: "increment";
  amount: number;
  timeStamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timeStamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

const reducer = (state: number, act: Action) => {
  switch (act.type) {
    case "increment":
      return state + act.amount;
    case "decrement":
      return state - act.amount;
    default:
      const unexpectedAction: never = act;
      throw new Error(`Unsupported action: ${unexpectedAction}`);
  }
};

export const newState = reducer(15, {
  type: "increment",
  amount: 5,
  timeStamp: 123456,
  user: "Mouli VJ",
});
