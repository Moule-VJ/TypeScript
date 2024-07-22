let amount: number = 20;
amount = 30 - 10;

let isAwesome: boolean = true;
isAwesome = false;

let greeting: string = "Hello, World!";
greeting = greeting.toLowerCase();
console.log(greeting);

let age: number = 30;

let isAdult: boolean = age >= 18;
console.log(isAdult);

isAdult = !isAdult;
console.log(isAdult);

let tax: number | string = 10;
tax = 200;
tax = "100";

let reqStatus: "pending" | "success" | "error" = "success";
console.log(reqStatus);

const books = ["1984", "Brave New World", "Fahrenheit 451"];
let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    break;
  }
}

console.log(foundBook?.length);

let discount: number | string = 20;
discount = "20%";
