// Generics Web dev simplified

const getFirstElement = <T>(array: T[]) => {
  return array[0];
};

const numbers = [1, 2, 3, 4];

const firstnum = getFirstElement<number>(numbers);
console.log(firstnum);
const strings = ["SDF", "FDS"];
const firstString = getFirstElement<string>(strings);
console.log(firstString);

// Setting a map

const map = new Map<string, number>();
map.set("Mouli", 2);

// Generics in API Response

interface DataType {
  name: string;
  age: number;
}

type ApiResponse<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

export const response: ApiResponse<DataType> = {
  data: {
    name: "Mouli ",
    age: 12,
  },
  isError: false,
};

// Blog Response

type BlogResponse = ApiResponse<{ title: string; author: string; age: number }>;

export const blogRes: BlogResponse = {
  data: {
    title: "Eat The Frog",
    author: "Mouli VJ",
    age: 12,
  },
  isError: true,
};

// Status Code Example

type statusResponse = ApiResponse<{ status: number }>;

export const statusRes: statusResponse = {
  data: {
    status: 202,
  },
  isError: false,
};
