// type Gaurd

// TypeOf functionality

type ValueType = string | number | boolean;

let value: ValueType;

const random = Math.random();

value = random < 0.33 ? "Hellow" : random < 0.66 ? 123.321 : true;

export const checkValue = (value: ValueType): void => {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
    return;
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  }
  console.log(`Boolean : ${value}`);
};

checkValue(value);

// TypeGaurd equality in

type Dog = {
  type: "Dog";
  name: string;
  bark: () => void;
};
type Cat = {
  type: "cat";
  name: string;
  meow: () => void;
};

type Animal = Dog | Cat;

// Option 1 checking the property
const makeSound = (animal: Animal) => {
  if (animal.type === "Dog") {
    animal.bark();
  } else {
    animal.meow();
  }
};

// Option 2 checking the method
const makeSound_2 = (animal: Animal) => {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
};

// Truthy / Falsy TypeGaurd
