import newStudent, { sayHellow, personn, type Student } from "./tupes&enum";

sayHellow("TypeScript is good and fun");
console.log(personn);
console.log(newStudent as Student);

const anotherStudent: Student = {
  name: "Mouli VJ",
  age: 24,
};

console.log(anotherStudent);
