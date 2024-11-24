// ES6 Modules in TypeScript

type Student = {
  name: string;
  age: number;
};

export const sayHellow = (name: string): void => {
  console.log("Hellow");
};

export let person = "susan";

export const newStudent: Student = {
  name: "peter",
  age: 24,
};

export default newStudent;

// We can import someWhere else by using

// import {type Student} from sameFile
// import newStudent, { person,sayHellow} from sameFile

const anotherStudent: Student = {
  name: "Bob",
  age: 23,
};
