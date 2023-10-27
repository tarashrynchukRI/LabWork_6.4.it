// lab_6.4
// Гринчук Тарас
// Лабораторна робота № 6.4
// Опрацювання одновимірних масивів ітераційним способом
// Варіант №4

function generateArray(size, min, max) {
   const array = [];
   for (let i = 0; i < size; i++) {
      array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
   }
   return array;
}

function calcSumOfOdd(array) {
   let sum = 0;
   for (let i = 0; i < array.length; i++) {
      if (i % 2 != 0) {
         sum += array[i];
      }
   }
   return sum;
}
function calcFirstNegative(array) {
   let idxOfFirstNeg;
   for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
         idxOfFirstNeg = i;
         return idxOfFirstNeg;
      }
   }
}
function calcLastNegative(array) {
   let idxOfLastNeg;
   for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
         idxOfLastNeg = i;
      }
   }
   return idxOfLastNeg;
}
function calcSumBetweenNeg(firstNegativeIdx, lastNegativeIdx) {
   let sum = 0;
   for (let i = firstNegativeIdx; i <= lastNegativeIdx; i++) {
      sum += array[i];
   }
   return sum;
}
function compressArray(array) {
   let index = 0;
   for (let i = 0; i < array.length; i++) {
     if ((Math.abs(array[i]) > 1)) {
       array[index] = array[i];
       index++;
     }
   }
   
   for (let i = index; i < array.length; i++) {
     array[i] = 0;
   }
   return array;
}

const n = Number(prompt("n = "));
const array = generateArray(n, -5, 5);
console.log(`Початковий масив: ${array}`);
console.log(`Сума елементів з непарними індексами: ${calcSumOfOdd(array)}`);
console.log(
   `Сума елементів між від'ємними елементами: ${calcSumBetweenNeg(
      calcFirstNegative(array),
      calcLastNegative(array)
   )}`
);
console.log(`Стиснутий масив ${compressArray(array)}`);
