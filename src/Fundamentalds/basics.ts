// Normal things

let awesomeName: string = "Mouli VJ";
awesomeName = "VJ";

let amount: number = 12 - 13;
amount = 10;

export let greetings: string = "lorem 10";

// Unions
export const mulitpleValues: string | number = "Its a union type";

let tax: string | number = 10;
tax = 1000;
tax = "$1000";

// Another Example
let requestStatus: "Prending" | "Success" | "Error";
requestStatus = "Error";
requestStatus = "Success";

// Any

let notSure: unknown = 45;
notSure = "maybe a string";
notSure = false;

// Type Anootation Example
const books = ["1984", "brave new World", "Fahrenhit 451"];

// Catch 1
// run time error
let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book.toUpperCase();
    break;
  }
}

console.log(foundBook);

// Challenge

let discount: number | string = 20;
discount = "20%";

let orderStatus: "processing" | "Shipped" | "Delivery" = "processing";
orderStatus = "Shipped";
