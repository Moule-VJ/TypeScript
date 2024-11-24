// Type Alias in TS
export type User = {
  id: number;
  name: string;
  isActive: boolean;
};

// Type Alias Challenge

type Employee = {
  id: number;
  name: string;
  department: string;
};

export type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

const alice: Employee = {
  id: 1,
  name: "Alice",
  department: "Sales",
};

const steve: Employee = {
  id: 2,
  name: "steve",
  department: "Sales",
};

export const bob: Manager = {
  id: 1,
  name: "Bobo",
  employees: [alice, steve],
};

type Staff = Employee | Manager;

const printStaffDetails = (staff: Staff): void => {
  // conditional Type Check
  if ("employees" in staff) {
    console.log(`${staff.name} is an manager for ${staff.employees.length}`);
  } else {
    console.log(`${staff.name} is an employee in a ${staff.department}`);
  }
};

printStaffDetails(alice);
printStaffDetails(bob);

// Intersection Type

type Book = {
  id: number;
  name: string;
  price: number;
};

const book1: Book = {
  id: 1,
  name: "How to cook a dragon",
  price: 15,
};

const book2: Book = {
  id: 1,
  name: "secret life of unicorn",
  price: 18,
};

// making an intersection type
const discountedBook: Book & { discount: number } = {
  id: 3,
  name: "The Real Discounted book",
  price: 189,
  discount: 0.15,
};

// Computed Properties

const propName = "age";

type Animal = {
  [propName]: number;
};

export let tiger: Animal = {
  [propName]: 5,
};

const susan = "susan";
