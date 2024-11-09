// Practise 2
export let amountt: number = 20;
amountt = 12 - 1;

// Union type Practise 2
export let taxx: number | string = 10;

taxx = 100;
taxx = "$10";

let requestStatuss: "Pending" | "Success" | "Error" = "Pending";
requestStatuss = "Error";

// Type Any
let notSure: any = 4;
notSure = "mabybe a string instead";
notSure = false;

// Practical Example of any
const books = ["1984", "Brave New World", "Fahrenheit 451"];
let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    break;
  }
}

// if undefined occurs we wont be having a run time error

console.log(foundBook);
let ar: number | undefined;
ar = foundBook?.length;

// Arrays

let prices: number[] = [100, 75, 42];
prices.push(20);

// This will cause an error

// prices.push("Hello")

let fruit: string[] = ["Apple", "Orange"];

let randomValues: [] = [];
let emptyValues = [];

let names = ["Peter", "Susan"];
let array: (string | boolean)[] = ["Mouli VJ", true, "Orange"];

// Objects

export let car: { brand: string; year: number } = {
  brand: "Toyota",
  year: 2020,
};

car.brand = "Ford";
// car.color = "Red";

let book = { title: "book", cost: 20 };
let pen = { title: "Pen", cost: 10 };
let noteBook = { title: "noteBook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, noteBook];
