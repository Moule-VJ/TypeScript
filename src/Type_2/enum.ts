// Enums in TS

// it helps us to create a constant where we can use anywhere in the file correctly
enum ServerResponseStatus {
  SUCCESS = 200,
  ERROR = 500,
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

// Function to get the server response
export const getServerResponse = (): ServerResponse => {
  return {
    result: ServerResponseStatus.SUCCESS,
    data: ["it worked"],
  };
};

const response: ServerResponse = getServerResponse();

console.log(response);

// Enum Reverse Mapping

Object.values(ServerResponseStatus).forEach((val) => {
  if (typeof val === "number") {
    console.log("its a number" + val);
  }
  console.log("its not a number");
});

// Main Gotach !

enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = "value",
}

// This Works

export let numericEnumValue: NumericEnum = 1;

// This dosent work
// We cant change the string constant calue to a string somewhere else in the file
// export let stringEnumValue: StringEnum = "value";

// Tuple and Enum Challenge

enum UserRole {
  ADMIN = "admin",
  MANAGER = "manager",
  EMPLOYEE = "employee",
}

export type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, number];
};

const createUser = (user: User): User => {
  return user;
};

export const user: User = createUser({
  id: 1,
  name: "Mouli VJ",
  role: UserRole.EMPLOYEE,
  contact: ["qw", 123456],
});

console.log(user);
