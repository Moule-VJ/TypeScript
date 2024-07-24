export const calculate = (price: number): number | string | undefined => {
  const hasDiscount = true;

  if (hasDiscount) {
    return "Disacounted price: ";
  }
};

let addThree = (number: number) => {
  let anotherNumber = 3;
  return number + anotherNumber;
};

const result: number = addThree(2);
const someValue = result;
console.log(someValue);

// Rest paramaters

export const sum = (message: string, ...num: number[]): string => {
  const doubled = num.map((num) => num * 2);
  console.log(doubled + message);
  return "Sum: " + num.reduce((acc, val) => acc + val, 0);
};
