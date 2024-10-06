// Function

export const sayHi = (name: string) => {
  console.log(`hellow there ${name.toUpperCase()}`);
};

sayHi("Mouli VJ");
// sayHi(3);

// Function Returns

const calcualteNumber = (price: number): number => {
  const hasDiscount = true;

  if (hasDiscount) {
    // return "Discount applied";
    return 10 * 0.1;
  }
  return price * 0.9;
};

export const finalPrice = calcualteNumber(200);

// Any

const addThree = (number: any) => {
  let anothernumber: number = 3;
  return number + anothernumber;
};

const result = addThree(19);
const someValue = result;

// function Challenge

const names: string[] = ["John", "Jane", "Jim", "Jill"];

export const isNameInList = (name: string): boolean => {
  return names.includes(name);
};

let nameToCheck = "Jane";

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not in the List`);
}

// function optional Parameter

const calculatePrice = (price: number, discount?: number) => {
  return price - (discount || 10);
};

let priceAfterDiscount = calculatePrice(100, 20);

// Default Parameters

const calCulateScore = (initialScore: number, penaltyPoints: number = 0) => {
  return initialScore - penaltyPoints;
};

let scoreAfterPenalty = calCulateScore(100 - 250);
let scoreWithoutPenalty = calCulateScore(300);

// Rest Parameters !!

const sum = (message: string, ...num: number[]): string => {
  const doubledVariable = num.map((n) => n * 2);
  console.log(doubledVariable);

  let total = num.reduce((acc, tot) => {
    return acc + tot;
  }, 0);
  return `${message}${total}`;
};

let resultt = sum("The Total is : ", 1, 2, 3, 4, 5, 6, 7);
console.log(resultt);

// Function VOID

const logMessage = (message: string): void => {
  console.log(message);

  //   return message;
};

logMessage("Typescript");

// TypeGaurds

const processInput = (input: string | number) => {
  //   console.log((input as number) * 2);

  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLocaleLowerCase());
  }
};

processInput(10);
processInput("hellow");

// Objects as paramters in funciton !

const createEmp = ({
  id,
}: {
  id: number;
}): { id: number; isActive: boolean } => {
  return {
    id: Math.random() - id++,
    isActive: id % 2 === 0,
  };
};

const firstEmp = createEmp({ id: 1 });
const secondEmp = createEmp({ id: 2 });

console.log(firstEmp);
console.log(secondEmp);

// Alternative
const createStudent = (
  student: {
    id: number;
    name: string;
  } = { id: 1, name: "ko" }
): void => {
  console.log(
    `Welcome to the course ${student.name.toUpperCase()} and his id is ${
      student.id
    }`
  );
};

createStudent({
  id: Math.random() + 10,
  name: "VJ",
});

// Function property check !

// createStudent({ id: 2, name: "bob", email: "mo@g" });

// Function Challenge

const processData = (
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

console.log(processData(10));
console.log(processData("Hellow"));
console.log(processData("hellow", { reverse: true }));
