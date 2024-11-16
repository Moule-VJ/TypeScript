// INTERFACE VS Type Alias

// A type alias is a way to give a name to a type, it can represet primitive types, union types, intersection types, tuples, and any other types, Once defined, the alias can be used anywhere in plcae of the actual type

// Key differences

// type alias => it can represet primitive types, union types, intersection types,
// interface => represet shape of an object, and we can implement in classes

interface Person {
  name: string;
}

interface Person {
  age: number;
}

interface Manage {
  manage: () => void;
}

// We cant do this above code in type alias

export type RES = Person | Manage;

// Compoted properties only in type alias

const propNAme = "age";

type Animal = {
  [propNAme]: number;
};

const tiger: Animal = {
  [propNAme]: 5,
};
