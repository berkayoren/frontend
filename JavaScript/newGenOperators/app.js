//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};

//* 1. YONTEM (classic)
const name1 = car.name;
const model1 = car["model"];

//* 2. Yontem: Destructuring

const { name, colors, model, engine } = car;
console.log(name, model, engine, colors);

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const { car1, car2 } = cars;
console.log(car1);

const { name: c1Name, model: c1Model } = car1;
const { name: c2Name, model: c2Model } = car2;
console.log(c1Name, c2Name);

//* EXAMPLE

const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];
//* CLASSICAL
team.forEach((p) => {
  console.log("******1*****");
  console.log("Name:", p.name);
  console.log("Surame:", p.surname);
  console.log("Job:", p["job"]);
  console.log("Age:", p.age);
});

//* DESTRUCTURING

team.forEach((p) => {
  const { name, surname, job, age } = p;
  console.log("******2*****");
  console.log("Name:", name);
  console.log("Surame:", surname);
  console.log("Job:", job);
  console.log("Age:", age);
});

//* function
const getInfo = () => {
  return {
    id: 1,
    productName: "Iphone",
    price: 30000,
  };
};
console.log(getInfo());
const { productName, price } = getInfo();
console.log("Product Name", productName);
console.log("Product Price", price);

//? Fonksiyonlarin obje parametreleri dogrudan dest. yapilabilir.
const calculate = ({ id, price }) => {
  console.log(price * 1.1);
};

calculate({ id: 1, price: 3000 });

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================
const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

//*Classical
const mehmet = names[1]; //*indexing

const [p1, p2, , p4] = names;
console.log(p1, p2, p4);

//*======================================================
//*  REST (...)
//* ======================================================

//*======================================================
//*  SPREAD (...)
//* ======================================================
