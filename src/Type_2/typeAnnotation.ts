// Type Annothation

// string
let awesomeName: String = "Shake and Bake";
awesomeName = "something";
awesomeName = awesomeName.toUpperCase();

// number
let amount = 20;
amount = 12 - 1;

// boolean
let isAwesome: boolean = true;
isAwesome = false;

// Basic Challenge

let greeting: string = "Hellow, TypeScript";
greeting = greeting.toUpperCase();

let age: number = 25;
age = age + 5;

let isAdult: boolean = age >= 18;
isAdult = !isAdult;
console.log(isAdult);

// Union Type
// Variable to hold the Value of Multiple Things

let tax: number | string | boolean = 10;
tax = 100;
tax = "tax";
tax = true;
console.log(tax);

let requestStatus: "pending" | "success" | "error" = "pending";

requestStatus = "pending";
requestStatus = "error";
requestStatus = "success";

// Any
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

const books = ["1984", "Mouli", "VJ"];
let foundBook: string | undefined;
// let foundBook: string;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    break;
  }
}

// It can be undefined0
console.log(foundBook?.length);

// Unions
//  Types and words
let discount: number | string = 20;
discount = "20%";

let orderStatus: "processing" | "shipping" | "delivery" = "processing";
orderStatus = "shipping";
// orderStatus = "cancelled";
