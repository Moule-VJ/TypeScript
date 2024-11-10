// TS Funcitons

const sayHi = (name: string) => {
  console.log(`Hello there ${name.toUpperCase()}`);
};

sayHi("mouli");

export const calculateDiscount = (price: number): number => {
  const hasDiscount = true;
  if (hasDiscount) {
    return price * 0.9;
  }
  return price;
};

export const finalPrice = calculateDiscount(10);

// Function with any
export const addThree = (number: number): number => {
  let anotherNumber: number = 3;
  return number + anotherNumber;
};

const resultt = addThree(30 - 10);
const someValue = resultt;
console.log(someValue);

// Function Challenge

export const names: string[] = ["John", "Jane", "Jim"];

export const isNameInList = (name: string): boolean => {
  return name.includes(name);
};

let nametoCheck = "Jane";

if (isNameInList(nametoCheck)) {
  console.log(`${nametoCheck} is in the list`);
} else {
  console.log(`${nametoCheck} is not in the list`);
}

// Optional parameters
export const calculatePrice = (price: number, discount?: number) => {
  return price - (discount || 0);
};

export let priceAfterDiscount = calculatePrice(100, 20);

// Default Parameters

const calculateScore = (initialScore: number, penalty: number = 10) => {
  return initialScore - penalty;
};

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

// Rest Parameters

const sum = (message: string, ...num: number[]): string => {
  const doubled = num.map((num) => num * 2);
  console.log(doubled);

  let total = num.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return `${message}:${total}`;
};

export let result = sum("The total is : ", 1, 2, 3, 4, 5);

// Funciton Void keyword

const logMessagee = (message: string) => {
  console.log(message);
};

logMessagee("TS is the Best");

// Function TypeGaurds nad union type

export const processInput = (
  input: string | number,
  p0: { reverse: boolean }
) => {
  // Adding a Type Gaurd

  // check
  if (typeof input === "number") {
    console.log(input * 12);
  } else {
    console.log(input.toUpperCase());
  }
};

// Function with Object as Parameters

export const createEMP = ({
  id,
}: {
  id: number;
}): { id: number; isActive: boolean } => {
  return {
    id: id,
    isActive: id % 2 === 0,
  };
};

// Function Property check

export const createStudent = (student: { id: number; name: string }) => {
  return student;
};

createStudent({
  id: Math.random(),
  name: "VJ",
});

// Funciton Challenge

const processInputData = (
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number => {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
};

console.log(processInputData(10));
console.log(processInputData("Hellow"));
console.log(processInputData("Hellow", { reverse: true }));
