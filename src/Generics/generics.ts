export let array1: string[] = ["Apple", "Bannana", "Mango"];
export let array2: number[] = [1, 2, 3, 4, 5];
export let array3: boolean[] = [true, false, true, false];

interface Personnn<T> {
  anotherFun?: T;
}
interface props {
  name: string;
  age: number;
  occ: string;
}
export const returnExample: Personnn<props> = {
  anotherFun: {
    name: "Mouli VJ",
    age: 24,
    occ: "Software Developer",
  },
};

// Generics Example One

interface mouli<T> {
  people: T[];
  name: string;
  age: number;
  facts?: string[];
  fun?: [
    {
      a: string;
      b: string;
      c: string;
      d?: boolean;
    }
  ];
  familiar?: () => mouli<number | string | boolean>["people"];
  familiarFun?: () => mouli<string>["fun"];
  returnPeople?: () => T;
}

export let people1: mouli<
  string | number | mouli<string>["fun"] | mouli<string>["age"]
> = {
  people: ["Mouli", "VJ"],
  name: "Mouli VJ",
  age: 24,
  returnPeople: () => {
    return [
      {
        a: "Mouli",
        b: "VJ",
        c: "12",
      },
    ];
  },
};

export const returnPeople = (): mouli<string | number> => {
  return {
    people: ["Mouli", "VJ"],
    name: "Mouli VJ",
    age: 24,
    facts: ["Used to it", "Nailed it"],
    familiar: () => {
      return ["Mouli", "VJ", 12];
    },
    familiarFun: () => {
      return [
        {
          a: "Mouli",
          b: "VJ",
          c: "12",
        },
      ];
    },
  };
};

// Generics Example Two

const genericFuction = <T>(inputs: T): T[] => {
  return [inputs];
};

export const valueOne = genericFuction<string>("Mouli VJ");
export const valueTwo = genericFuction<number[]>([10, 20]);

interface GenericInterface<T> {
  value: T;
  getValue: () => T[];
}

export const genericfunc: GenericInterface<string> = {
  value: "Mouli VJ",
  getValue: () => {
    return ["Mouli", "VJ"];
  },
};

export const someFunc = async (): Promise<string> => {
  return "hellow";
};

interface ApiResponseObject {
  statusCode: number;
  message: string;
}
export const someFuncTwo = async (): Promise<ApiResponseObject> => {
  return {
    statusCode: 200,
    message: "Hellow",
  };
};

const genericStringArray = <T>(length: number, value: T): T[] => {
  let res: T[] = [];

  res = Array(length).fill(value);
  return res;
};

console.log(genericStringArray(5, 3));

export const createArrayNumbers = genericStringArray<number>(2, 10);

//  Using Multiple Generics

interface anotherType {
  name: string;
  age: number;
  occ: string;
}

const pair = <T, U, anotherType>(
  params1: T[],
  param2: U[],
  params3: anotherType[]
): (T | U | anotherType)[] => {
  return [...params1, ...param2, ...params3];
};

export const pairValue = pair<string | number, number, anotherType>(
  ["Mouli", "VJ", 10],
  [12, 10],
  [
    {
      name: "Mouli VJ",
      age: 24,
      occ: "Software Developer",
    },
  ]
);

export const processValue = <T extends string>(value: T): T => {
  return ["Mouli", "VJ"].includes(value) ? value : ("Not Found" as T);
};

export const processValueTwo = <T extends string | anotherType>(
  value: T[],
  value2: anotherType
): T[] => {
  return [
    "Mouli VJ",
    "Typescript",
    "Javascript",
    "React",
    "Next-js",
    ...value,
    12,
    value2,
  ] as T[];
};

export const processResult = processValue("Mouli VJ");
export const processResultTwo = processValueTwo(["Mouli", "VJ", "true"], {
  name: "Mouli VJ",
  age: 24,
  occ: "Software Developer",
});

// Generics property check

type Product = {
  name: string;
  price: number;
};

export const print = <T extends Product>(input: T): T[] => {
  if ("name" in input) {
    return [input];
  } else {
    return [];
  }
};

// Default Generics

interface StoreData<T = any> {
  data: T[];
}

export const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4, 5],
};

export const randomStiff: StoreData = {
  data: ["Mouli", "VJ", 12, 24, 36],
};
