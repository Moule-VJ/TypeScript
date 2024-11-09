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

const result = addThree(30 - 10);
const someValue = result;
console.log(someValue);

// Function Challenge
