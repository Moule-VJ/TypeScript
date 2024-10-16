//  Enums

enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

const getServerResponse = (): ServerResponse => {
  return {
    // result: "Succes" // not allowed
    result: ServerResponseStatus.Success,
    data: ["first Item", "Second item"],
  };
};

const response: ServerResponse = getServerResponse();

console.log(response);

//  Enum Reverse mapping

Object.values(ServerResponseStatus).forEach((values) => {
  if (typeof values === "number") {
    console.log(values);
  }
});

// Have to note of

enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = "Value",
}

let numericEnumValue: NumericEnum = 1; // This is allowed
console.log(numericEnumValue);

//   let stringEnumValue: StringEnum = "Value"; // this is not allowed

// Enum Challenge

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

const createUser = (user: User): User => {
  return user;
};

const userr: User = {
  id: Math.random(),
  name: "Mouli VJ",
  role: UserRole.Admin,
  contact: ["Mouli VJ", "123"],
};

console.log(userr);
