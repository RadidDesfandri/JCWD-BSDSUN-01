// Synchronous -> Menjalankan task dari A - Z (berurutan)
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// // Asynchronous
// console.log("Task Async 01");
// setTimeout(() => console.log("Task Async 02"), 3000);
// console.log("Task Async 03");

// Callback -> Memanggil kembali
// prettier-ignore
/* 
    func calculator ->  induknya. Dimana didalamnya ada 3 parameter
    Parameter -> a: number, b: number, callback: () => void
    Didalam function calculator memanggil parameternya sendiri yaitu callback
    callback itu juga memanggil parameter yang ada dalam fucntion calculator 
*/
function calculator(a, b, callback) { 
   callback(a + b);
}

// Parameter -> something: number
// Mengembalikan parameter tersebut
function displayer(something) {
  return something;
}

// const dataPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = false;

//     if (success) {
//       resolve("Data loaded");
//     } else {
//       reject("Something went wrong!");
//     }
//   }, 1000);
// });

// Promise
// dataPromise
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error))
//   .finally(() => console.info("Finnaly running"));

// Try-Catch + Async await
// const tryCatch = async () => {
//   try {
//     const result = await dataPromise;
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("Finnaly running trycatch");
//   }
// };

// tryCatch();

// https://jsonplaceholder.typicode.com/users

// async function fetchAllData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "GET", // -> GET, POST, PATCH, PUT, DELETE
//       //   body: "", // Tempat mengirim data yang diperlukan backend
//     });

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchAllData();

// const tryThrow = () => {
//   try {
//     let isFalse = true;

//     if (isFalse) {
//       // throw "There is an error";
//       throw new Error("There is an error");
//     }

//     // let alreadyEmail = true;

//     // if (alreadyEmail) {
//     //   throw new Error("");
//     // }

//     console.log("success");
//   } catch (error) {
//     console.log(error);
//   }
// };

// tryThrow();

const userData =
  '{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}}';
const userParse = JSON.parse(userData);

console.log(typeof userData);
console.log(typeof userParse);

const jsonData = '{"username": "Andi", "age": 35}'; // Contoh data yang dijadikan string
const obj = JSON.parse(jsonData); // Menjadikan string ke JSON
// JSON.stringify() -> Menjadikan JSON ke string

console.log(jsonData);
console.log(obj);
