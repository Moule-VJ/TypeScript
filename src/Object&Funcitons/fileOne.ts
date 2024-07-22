interface objPROPS {
  brand: string;
  model: string;
  year: number;
  color: string;
}

export let car: objPROPS = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "Blue",
};

interface PRoduct {
  title: string;
  price?: number;
}
export let product1: PRoduct = {
  title: "shirt",
  price: 20,
};

export let product2 = {
  title: "pant",
  price: 33,
};
