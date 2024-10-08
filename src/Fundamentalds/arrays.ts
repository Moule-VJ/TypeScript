// Basics Declarations

let prices: number[] = [100, 55, 75, 42];

let fruits: string[] = ["Apple", "Orange"];

let randomValues: [] = [];

let empty: number[] = [];

let names = ["Peter", "Susan"];
let array: (string | boolean)[] = [true, "apple"];

let temperature: number[] = [20, 24, 34];
// temperature.push("hot");

let colors: string[] = ["red", "green", "blue"];
// colors.push(true)

let mixedArray: (number | string)[] = [1, 2, "three"];

// Object Fundamentals

type Props = {
  brand: string;
  year: number;
};

const car: Props = {
  brand: "Toyota",
  year: 2020,
};

car.brand = "ford";

type BookType = {
  readonly title: string;
  cost?: number;
};

let book = { title: "book", cost: 20 };
let pen = { title: "Pen", cost: 220 };
let noteBook = { title: "noteBook" };

let items: BookType[] = [book, pen, noteBook];

// items[1].title = "new";

// challenge

type TYPE = {
  brand: string;
  year: number;
};

let bike: TYPE = { brand: "Yamaha", year: 2021 };
let laptop: TYPE = { brand: "DELL", year: 2025 };
let laptop2: TYPE = { brand: "MSI", year: 2024 };
let product: TYPE = { brand: "Shirt", year: 20 };

const productArr: TYPE[] = [bike, laptop, laptop2];
productArr.push({
  brand: "ASUS",
  year: 2000,
});
