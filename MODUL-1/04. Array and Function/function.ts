/* Function */

// Function Declarations
function squareFormula(side: number) {
  return side * side;
}
const areaOfSquare = squareFormula(2);
console.log(areaOfSquare);
console.log(squareFormula(5));

// Function Expression
const calculateAge = function (age: number) {
  return `Umur kamu ${age} tahun`;
};

console.log(calculateAge(3));
console.log(calculateAge(19));

// Function hoisting
// Declaration -> bisa dipanggil sebelum function dibuat
// greeting(); Bisa dipanggil

function greeting(name: string = "Guest") {
  const text = "Hello " + name;
  return text;
}
console.log(greeting());

// Expression -> tidak bisa dipanggil sebelum function dibuat
// testFunction(); -> Akan menyebabkan error;
const testFunction = function () {
  console.log("Hello test function");
};

testFunction();

// 01 Januari 2025
function formatDate(date: string) {
  const now = new Date(date);

  const monthMapping = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dayMapping = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const _date = now.getDate();
  const day = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();

  return `${dayMapping[day]}, ${_date} ${monthMapping[month]} ${year}`;
}

console.log(formatDate("2025-11-23"));
console.log(formatDate("2025-12-25"));

function myFunc(...args: any) {
  return args;
}

console.log(myFunc(1, 2, 3, 1, "1", 1, false, true, [], undefined, null));

const numbers: number[] = [7, 8, 9, 1, 2, 3, 4, 5, 6];

// Sama dengan forEach. Perbedaannya adalah map menghasilkan Array baru sedangkan forEach tidak menghasilkan Array baru
numbers.map((item, index, array) => {
  console.log(item);
  console.log(index);
  console.log(array);
});

// Filter atau select data sesuai kondisi yang diinginkan
console.log(numbers.filter((item) => item % 2 === 0));

// Menjumlahkan seluruh data yang ada dalam array
console.log(numbers.reduce((acc, curr) => acc + curr));

// Sorting data dalam array
console.log(numbers.sort((a, b) => b - a));

// Nested Function
function getMessage(firstName: string) {
  function sayHello() {
    return "Hello " + firstName;
  }

  function welcomeMessage() {
    return "Welcome to purwadhika";
  }

  return sayHello() + "  " + welcomeMessage();
}

// Contoh lain nested function
function allFunc() {
  return {
    message: greeting("Andi"),
    date: formatDate("2025-06-20"),
  };
}

console.log(getMessage("Andi"));
console.log(allFunc());

// Closure -> function yang mengembalikan function
function func(name: string) {
  const defaultMessage = "Hello";

  return function () {
    return defaultMessage + " " + name;
  };
}
console.log(func("Andi")());

// Recursive -> memanggil dirinya sendiri
function countDown(fromNumber: number) {
  console.log(fromNumber);

  let nextNumber: number = fromNumber - 1;

  if (nextNumber > 3) {
    countDown(nextNumber);
  }
}
countDown(3);

function factorial(num: number): number {
  if (num == 0 || num == 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(5));

// Arrow function
// () =>
const sortingAsc = (numbers: number[]) => numbers.sort((a, b) => a - b);

// Jika menggunakan function Declarations
function sortingDesc(numbers: number[]) {
  return numbers.sort((a, b) => b - a);
}

// Jika menggunakan function Expression
const sortingExpression = function (numbers: number[]) {
  return numbers.sort((a, b) => b - a);
};

console.log(sortingAsc(numbers));
console.log(sortingDesc(numbers));
console.log(sortingExpression(numbers));
