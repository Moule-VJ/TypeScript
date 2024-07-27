type User = {
  id: number;
  name: string;
  isActive: boolean;
};

type USERPRef = {
  language: "JavaScript" | "TypeScript" | "Python" | "Java";
  frameWork: "React" | "SOLID" | "Next_JS";
};

export type Profile = User & USERPRef;

const funcPref = (user: Profile) => {
  return user;
};

export const details = {
  id: 1,
  name: "Mouli VJ",
  isActive: true,
};

console.log(
  funcPref({ ...details, language: "TypeScript", frameWork: "React" })
);

export const createUSer = (user: User) => {
  console.log(user);
  return user;
};

createUSer(details);

export type theme = "Light" | "Dark";

let theme: theme;

theme = "Light";
theme = "Dark";

const setTheme = (t: theme) => {
  theme = t;
};

setTheme("Dark");

// TypeAlias Challenge

type Emp = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Emp[];
};

const alice: Emp = {
  id: 1,
  name: "Alice",
  department: "Engineering",
};

type Staff = Emp | Manager;

const printStaffDetails = (staffDetails: Staff): Emp | Emp[] => {
  console.log(staffDetails);

  if ("employees" in staffDetails) {
    console.log(staffDetails.employees);
    return staffDetails.employees;
  } else {
    return staffDetails;
  }
};

printStaffDetails(alice);

const manager = {
  id: 12,
  name: "Mouli VJ",
  emp: ["a", "b", "c", "d"],
};

if ("emp" in manager) {
  console.log(manager.emp.map((e) => console.log(e)));
}

type Book = {
  id: number;
  name: string;
  price: number;
};

export const book1: Book & { discount: number } = {
  id: 1,
  name: "TypeScript",
  price: 100,
  discount: 10,
};

const propsName = "age";
export const tiger: { age: number } = { [propsName]: 5 };

interface BookInterface {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;

  // method
  printAuthor(): BookInterface["author"];
  n: () => void;
}

export const deepWork: BookInterface = {
  isbn: 123,
  title: "Deep Work",
  author: "Moul VJ",
  genre: "Self Help",

  printAuthor() {
    return this.author;
  },

  n: () => {
    console.log("Hello");
  },
};

// Task Interface

export interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;

  increaseRam(r: number): number;
  increaseStorage(s: number): number;
}

export interface Computer {
  tags: "MAde in india";
}

// Extending an interface from one interface

export interface Laptop extends Computer {
  weight: number;
  battery: number;
}

interface dogOwner {
  name: string;
}

interface Managerrr extends dogOwner {
  empId: string;
}

interface details extends Managerrr {
  salary: 100000;

  doubleSalary(salary: number): Managerrr["name"];
}

export const returnDetails = (det: details): details => {
  console.log(det);

  return {
    name: "Mouli VJ",
    empId: "123",
    salary: 100000,

    doubleSalary(salary) {
      console.log(salary * 2);
      return this.name;
    },
  };
};
