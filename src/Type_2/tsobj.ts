// Objects

let car: { brand: string; year: number } = {
  brand: "Skoda!",
  year: 2020,
  //   color: "blue",
};

car.brand = "ford";

let book = { title: "book", cost: 20 };
let book1 = { title: "pen", cost: 20 };
let note = { title: "note" };

let items: { readonly title: string; cost?: number }[] = [book, book1, note];
