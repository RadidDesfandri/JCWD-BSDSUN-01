// If Statemants

// Contoh syntax
if (true) {
  console.log("Syntax if statement");
}

// If-Else
let age: number = 16;
if (age >= 17) {
  console.log("Now you can create an identity card!");
} else {
  console.log("You are not old enough to create identity card! ");
}

// If-Else if
let grade: string = "D";
if (grade === "A") {
  console.log(`Kamu pintar, karena dapat nilai ${grade}`);
} else if (grade === "B") {
  console.log(`Kamu lumayan pintar, dapat ${grade}`);
} else if (grade === "C") {
  console.log(`Cukup, nilai kamu ${grade}`);
} else {
  console.log(`Belajar lagi, kamu dapat ${grade}`);
}

// Switch case conditional
switch (grade) {
  case "A":
    console.log(`Kamu pintar, karena dapat nilai ${grade}`);
    break;

  case "B":
    console.log(`Kamu lumayan pintar, dapat ${grade}`);
    break;

  case "C":
    console.log(`Cukup, nilai kamu ${grade}`);
    break;

  default:
    console.log(`Belajar lagi${grade ? ", kamu dapat nilai " + grade : ""}`);
    break;
}

// Contoh data dari backend
const data = [
  {
    title: "Judul 1",
  },
  {
    title: "Judul 2",
  },
  {
    title: "Judul 3",
  },
  {
    title: "Judul 4",
  },
];

if (true) {
  console.log("Loading..");
}

if (data.length >= 1) {
  console.log("Data tersedia, siap di render");
} else {
  console.log("Data tidak ada");
}

// Logical operator
let hasId = true;
// Seluruh kondisi dalam if() harus bernilai true.
if (age >= 18 && hasId) {
  console.log("You can enter!");
}

let isWeekend = false;
let isHoliday = true;
// Salah satu kondisi bisa harus true.
if (isWeekend || isHoliday) {
  console.log("Kamu bisa istirahat");
}

// Membalikkan kondisi. Jika true akan menjadi false dan begitu juga sebaliknya
if (!true) {
  console.log("Render true");
} else {
  console.log("render false");
}

// Basic syntax ternary
console.log(true ? "Render true" : "render false");
// Contoh penggunaan ternary
console.log(grade === "D" ? "Nilai kamu D" : "Nilai tidak diketahui");

// For loop
for (let i = 1; i <= data.length; i++) {
  if (i === 1) continue;

  console.log(data[i - 1].title);
}

let i = 0;
// Periksa kondisi terlebih dahulu baru menjalankan loop
while (i < 3) {
  console.log("Render");

  i++;
}

// Menjalankan sekali baru melakukan loop
do {
  console.log("Do while");
} while (i < 3);

let sum = 1;
// Break
while (true) {
  let value = 1;

  console.log(sum);

  if (sum === 5) break;

  console.log(sum);

  sum += value;
}

const number = 5;
console.log(number % 2 == 0 ? "Genap" : "Ganjil");

if (number % 2 == 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}

let N = 3;
let result = 0;

for (let i = 1; i <= N; i++) {
  result += i;
}

console.log(result);
