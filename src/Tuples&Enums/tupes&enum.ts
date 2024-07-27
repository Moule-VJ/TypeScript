export let person: [string, number, boolean] = ["Mouli VJ", 12, true];

export let date: [number, number, number] = [12, 12, 2021];

export const getPErson = (): readonly [string, number?] => {
  return ["john", 25];
};

// Enums
// Help us to define set of name constants

enum ServerResponseStatus {
  SUCCESS = 200,
  NOT_FOUND = 404,
  ERROR = 500,
}

Object.values(ServerResponseStatus).forEach((value) => {
  console.log(value);

  if (value === "number") {
    console.log(value);
  }
});

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

const getServerResponse = (): ServerResponse => {
  return {
    result: ServerResponseStatus.SUCCESS,
    data: ["Data1", "Data2", "Data3"],
  };
};

const response: ServerResponse = getServerResponse();
console.log(response.result);

// Reverse Mapping

enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = "value",
}

export const num: NumericEnum = 1;
export const str: StringEnum = StringEnum.Member;

// Enum Challenge

enum UserRole {
  ADMIN = "Admin",
  MANAGER = "Manager",
  EMPLOYEE = "Employee",
}

interface user {
  id: number;
  name: string;
  role: UserRole.MANAGER;
  contact: [string, string];
}

const createUser = (profile: user): user => {
  return profile;
};

createUser({
  id: 1,
  name: "Mouli VJ",
  role: UserRole.MANAGER,
  contact: ["Mouli ", "VJ"],
});

let someValue: any = "This is a string";

export let strLength: number = (someValue as string).length;

interface BIRD {
  name: string;
}

interface DOG {
  breed: string;
}
let birdString = '{"name":"Parrot"}';
let dogString = '{"breed":"Poodle"}';

export let birdObj = JSON.parse(birdString) as BIRD;
export let dogObj = JSON.parse(dogString) as DOG;

enum Status {
  Pending = "pending",
  Declined = "declined",
}

export let apiStatus = Status.Pending;

type UserStats = {
  name: string;
  status: Status.Declined;
};

export const apiResponse = (res: UserStats): UserStats => {
  console.log(res);

  return {
    name: "Mouli VJ",
    status: "declined" as Status.Declined,
  };
};

// Type Unknown

const runSomeCode = () => {
  const random = Math.random();

  if (random > 0.5) {
    throw new Error("An error occurred");
  } else {
    throw "some error";
  }
};
try {
  runSomeCode();
} catch (err) {
  if (err instanceof Error) {
    console.log(err?.message);
  } else {
    console.log(err);
  }
}

// Type Never

type Theme = "light" | "dark";

export const checkTheme = (theme: Theme): void => {
  if (theme === "light") {
    console.log("Light theme selected");
    return;
  }

  if (theme === "dark") {
    console.log("Dark Theme Selected");
    return;
  }
};

//  NEVER Example
enum Color {
  Red,
  Blue,
  Green,
}

const getColorName = (color: Color) => {
  switch (color) {
    case Color.Red:
      return "Red";

    case Color.Blue:
      return "Blue";

    case Color.Green:
      return "Green";

    default:
      //   at build time
      let unexpectedColor: never = color;

      //   at run time
      throw new Error(unexpectedColor);
  }
};

console.log(getColorName(Color.Red));

export const sayHellow = (msg: string): void => {
  console.log(msg);
};

export let personn = "Susan";

export type Student = {
  name: string;
  age: number;
};

const newStudent = {
  name: "peter",
  age: 24,
};

export default newStudent;
