// Basic syntax object
const user = {
  name: "Ole Romeny",
  greet() {
    return `hello ${this.name}`;
  },
};
const profile = new Object();
console.log(user.greet(), profile);

// Add and Delete property dalam Object
const person: any = {
  name: "Marselino",
  age: 20,
};
// Add property
person.hobby = "Bola";
console.log(person);
// Delete property
delete person.age;
console.log(person);

// Akses value
const newPerson = {
  name: "Franky",
  age: 30,
};

// 1. Menggunakan dot(.)
console.log(newPerson.name); // -> "Franky"
// 2. Menggunakan NAMAVARIABLE[nama key]
console.log(newPerson["age"]); // -> 30

let newOptionalChaining: any = {};
// Ditandai dengan tanda tanya (?)
console.log(newOptionalChaining.data?.name);

console.log(Object.keys(newPerson));

// Immutable
let nama = "Jhonny";
let newName = nama; //salinan
nama = "Budi";
console.log(nama, newName); // Outputnya berbeda

// Mutable
let orang = {
  name: "Franky",
  age: 40,
};
let orangBaru = orang;
orang.name = "Budi";
console.log(orang, orangBaru); // Outputnya sama

for (const person in newPerson) {
  console.log(person); // Mendapatkan sebuah property

  //   console.log(newPerson[person]); // Mendapatkan sebuah value
}

// Destructuring
let a, b;
[a, b] = [2, 1];

console.log(a, b);

const { age } = newPerson;
console.log(age);
console.log(newPerson.age);

const { age: newAge } = newPerson;
console.log(newAge);

// Spread Operator -> Ditandai dengan (...) titik 3 kali
const dataOne = [1, 2, 3];
const dataTwo = [4, 5, 6, 1];
const mergeDataOneAndTwo = [...dataOne, ...dataTwo];
console.log(mergeDataOneAndTwo);

const objectOne = { name: "Andi" };
const objectTwo = { email: "andi@mail.com" };
const mergeObject = { ...objectOne, ...objectTwo };
console.log(mergeObject);

// Object Built-In Method
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// Assign
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);

interface ICar {
  brand: string;
  model: string;
  price: number;
}

type TCarModel = "Seri A" | "Seri B";
type TTransactionStatus = "Pending" | "Cancel" | "Failed";

// &&, ||, >=, <=

type TCar = {
  brand: string;
  model: TCarModel;
  price: number;
  transactionStatus: TTransactionStatus;
};

const car: ICar = {
  brand: "BYD",
  model: "BYD Denza D9",
  price: 95000000,
};

const newCar: TCar = {
  brand: "Mazda",
  model: "Seri B",
  price: 0,
  transactionStatus: "Pending",
};
