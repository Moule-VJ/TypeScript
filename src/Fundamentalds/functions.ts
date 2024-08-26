// Functions

const sayHi = (name: string) => {
  console.log(name.toLowerCase());
};

sayHi("mouli");

// Function Returns
const calculateDiscounts = (price: number): number | string => {
  const hasDiscount = true;

  if (hasDiscount) {
    return "Discount applied";
  }
  return price * 0.9;
};

export const fincalPrice = calculateDiscounts(200);

// any example
const addThree = (number: any) => {
  let anotherNumber: number = 3;
  return number + anotherNumber;
};

const result = addThree(20);
export const someValuer: number = result;

const names: string[] = ["John", "Jane", "Jim", "Jill"];

// Challenge
const isNameInList = (name: string): boolean => {
  return names.includes(name);
};

isNameInList("John");

let nameToCheck = "Jane";

if (isNameInList(nameToCheck)) {
  console.log("Yes its there");
} else {
  console.log("Not in the list");
}

// Function Optional Parameter

const calculatePrice = (price: number, discount?: number) => {
  return price - (discount || 0);
};
export let priceAfterDiscount = calculatePrice(100, 20);

// Function Default Parameter
const calcualteScore = (initialScore: number, penaltyPoints: number = 0) => {
  return initialScore - penaltyPoints;
};

let ScoreAfterPenalty = calcualteScore(100, 20);
let scoreWithoutPenalty = calcualteScore(300);

// Funciton Rest Parameter

const sum = (message: string, ...num: number[]): string => {
  const doubledVariable = num.map((items) => {
    return items * 2;
  });

  let total = num.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  return `${message}${total}`;
};

let resultt = sum("The Total is :", 1, 2, 3, 4);

// Funciton Void

const logMessage = (message: string) => {
  console.log(message);
};

logMessage("Hellow, Typescript");

// Function
// Type Gaurds

const processInput = (input: string | number) => {
  if (typeof input === "number") {
    console.log(input * 2);
  }
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  }
};

processInput(10);
processInput("Hellow");

// Function Objects as Paramater
type EMP = {
  id: number;
};

type EMPReturn = {
  id: number;
  isActive: boolean;
};

export const createEmp = (id: EMP): EMPReturn => {
  return {
    id: Date.now(),
    isActive: id.id % 2 === 0,
  };
};
