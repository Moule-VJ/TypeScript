// Assertion
// Unknown
// Error

let somneValue: any = "this is a string";
let stringLength: number = (somneValue as string).length;

type Bird = {
  name: string;
};

// Json String Values

let birdString = '{"name" : "Eagle"}';
let dogString = '{"breed" : "poodle"}';

// By default the type is any, so we can assert it

let birdObject = JSON.parse(birdString) as Bird;
let dogObject = JSON.parse(dogString) as Bird;

console.log(birdObject.name);
console.log(dogObject.name);

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

// Retriveing some data from the DB

const statusValue = "pending";

const user: User = {
  name: "A",
  // status: statusValue,
  status: Status.Pending,
};
