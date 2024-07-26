// Rest paramaters

export const sum = (message: string, ...num: number[]): string => {
  const doubled = num.map((num) => num * 2);
  console.log(doubled + message);
  return "Sum: " + num.reduce((acc, val) => acc + val, 0);
};

export const sayHi = (name: string) => {
  console.log("Hellow There");
};

export const finalPrice = (price: number): number => {
  const discount = true;

  return price - (discount ? 10 : 0);
};

export const addThree = (number: any): number => {
  let anotherNumber: number = 3;
  return anotherNumber + number;
};

export const res = addThree(2);

export const names: string[] = ["John", "Jane", "Jim", "Jill"];

const isNameInList = (name: string): boolean => {
  return name.includes(name);
};

let nametocheck = "Jane";

if (isNameInList(nametocheck)) {
  console.log(`${nametocheck} is in the list`);
} else {
  console.log(`${nametocheck} is not in the list`);
}

const calculatePrice = (price: number, discount: number): number => {
  return price - discount;
};

export let priceAfterDiscount = calculatePrice(100, 20);

//
export const createEmp = () => {};

// Alternative

interface STUDENT {
  id: number;
  name: string;
  age: number;
}
export const createStudent = (student: STUDENT): STUDENT => {
  return {
    id: 123,
    name: "Mouli VJ",
    age: 23,
  };
};
