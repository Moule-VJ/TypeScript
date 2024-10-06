type User = {
  id: number;
  name: string;
  isActive: boolean;
};

export const John: User = {
  id: Math.random(),
  name: "Mouli VJ",
  isActive: true,
};

const createuser = (user: User): User => {
  console.log(user);
  return user;
};

createuser({
  id: 1,
  name: "Mouli VJ",
  isActive: true,
});

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "Mouli";
value = 123;

type Theme = "light" | "dark";

type STATUS = "pending" | "Completed";
let statusResponse: STATUS = "pending";
statusResponse = "Completed";

// Function Example
let theme: Theme;
theme = "dark";

const setTheme = (t: Theme) => {
  theme = t;
};

setTheme("dark");

// Type Challenge

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  emp: Employee[];
};

type Staff = Employee | Manager;

const printStaffDetails = (staff: Staff): void => {
  //    Checking a specif property in an object

  if ("emp" in staff) {
    console.log(
      `${staff.name} is the manager for these many${staff.emp.length}`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
};

const alice: Employee = { id: 1, name: "Alice", department: "Sales" };
const steve: Employee = { id: 1, name: "Alice", department: "HR" };
const bob: Manager = { id: 1, name: "Bobo", emp: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);

// type Intersection

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: "How to cook a dragon",
  price: 15,
};

const book2: Book = {
  id: 1,
  name: "How to eat the frog",
  price: 18,
};

// Intersecting
const discountedBook: DiscountedBook = {
  id: 3,
  name: "Unicorns books",
  price: 25,
  discount: 0.15,
};

const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = {
  [propName]: 5,
};
