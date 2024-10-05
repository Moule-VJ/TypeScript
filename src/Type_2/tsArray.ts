// Arrays

let prices: number[] = [100, 78, 99, 80];
// prices.push("string");
prices.push(100);

let fruit: string[] = ["apple", "orange"];

let randomValues: [boolean, number] = [true, 99];
// let randomValues: [boolean, number] = [true, 99, "mouli"];

// let emptyValues: [] = ["helloe"];

// Union Array
let names: (string | number)[] = ["peter", "susan", 100];
let array: (string | boolean)[] = ["apple", true, "orange", false];

export default {
  names,
  array,
};

// Challenge

let tempreature: number[] = [20, 25, 30];
// tempreature.push("hot");

let colors: string[] = ["red", "green", "blue"];
// colors.push(true);

let mixedArray: (number | string)[] = [1, "two", "three"];
