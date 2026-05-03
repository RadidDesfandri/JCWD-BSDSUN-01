// With sort
const minMaxWithSort = (numbers: number[]) => {
  numbers.sort((a, b) => a - b);

  const lowest = numbers[0];
  const highest = numbers[numbers.length - 1];
  const average = numbers.reduce((acc, curr) => acc + curr) / numbers.length;

  return {
    lowest,
    highest,
    average,
  };
};

const minMaxNumbers = [12, 5, 23, 18, 4, 45, 32];
console.log(minMaxWithSort(minMaxNumbers));

// Without sort
function minMaxWithoutSort(numbers: number[]) {
  const lowest = Math.min(...numbers);
  const highest = Math.max(...numbers);
  const average = numbers.reduce((acc, curr) => acc + curr) / numbers.length;

  return {
    lowest,
    highest,
    average,
  };
}
console.log(minMaxWithoutSort(minMaxNumbers));

// Concat string dan tambahkan "dan" sebelum data terakhir
function concatString(array: string[]) {
  //   return array.slice(0, -1).join(", ") + ", dan " + array[array.length - 1];
  const withoutLastData = array.slice(0, -1).join(", ");
  const lastData = array[array.length - 1];

  return `${withoutLastData}, dan ${lastData}`;
}
const concatData = ["apple", "banana", "cherry", "date"];
console.log(concatString(concatData));

// Mendapatkan number terkecil kedua
const secondSmallNumber = (numbers: number[]) => {
  if (numbers.length < 2) {
    return "Minimal 2 data";
  }

  return numbers.sort((a, b) => a - b)[1];
};
const secondSmallNumberData = [5, 3, 1, 7, 2, 6];
console.log(secondSmallNumber(secondSmallNumberData));

// Menjumlahkan 2 array
/* 
    1. Menentukan parameter -> array1 dan array2
    2. Mapping salah satu array untuk menghasilkan array baru
    3. Dalam mapping jumlahkan array(value) yang di map dengan array lainnya sesuai dengan index sekarang
    4. Jangan lupa return
*/
const calculateEachElement = (array1: number[], array2: number[]) => {
  console.log(array2[0]);

  return array1.map((value, index) => value + array2[index]);
};
const arrayData1 = [1, 2, 3];
const arrayData2 = [3, 2, 1];
console.log(calculateEachElement(arrayData1, arrayData2));

// Add unique element
function addUniqueElement(array: number[], newElement: number) {
  if (!array.includes(newElement)) {
    return [...array, newElement];
  }

  return array;

  //   return array.includes(newElement) ? array : [...array, newElement];
}

const arrayData = [1, 2, 3, 4];
console.log(addUniqueElement(arrayData, 4));
