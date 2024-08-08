// Example one

const converTwoArray = <T>(input: T): T[] => {
  return [input];
};

converTwoArray([1, 2, 3, 4]);
converTwoArray("<Mouli");
converTwoArray({
  name: "Mouli VJ",
  age: 25,
});

// Example Two
// It Should give me an index of an array

const arr = [33, 44, 55, 65];

const getIndexofAnArray = <T>(array: T[], arrayItem: T) => {
  return array.findIndex((item) => item === arrayItem);
};

getIndexofAnArray(arr, 77);

// Example Three
// Funciton with Mulitple Parameters

const createArrayPair = <T, K>(input: T, input2: K): [T, K] => {
  return [input, input2];
};

createArrayPair("hellow", 10);

// Simple Type Props passing for a react component
// Scenario if the type have the same value

type ThemeOptionProps<T> = {
  themeOption: T[];
  selectTheme: T;
  onClickTheme: (theme: T) => void;
};

export const ThemeOption = <T>({
  themeOption,
  selectTheme,
  onClickTheme,
}: ThemeOptionProps<T>) => {
  console.log(themeOption);
  console.log(selectTheme);
  console.log(onClickTheme);
};

// Example Four

const extendedGeneric = <T extends number | string>(input: T): T[] => {
  return [input];
};

extendedGeneric("Mouli VJ");
extendedGeneric(99);
