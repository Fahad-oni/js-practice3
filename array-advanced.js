let numbers = [1, 1, 2, 4, 4, 3, 5, 22, 33, 44, 33, 22, 1, 55, 6, 5, 34, 5];

let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers.sort((a, b) => a - b));

let mixedArray = [10, 34, 'apple', 54, 'banana', 85, 'pinapple'];

let num = [];
let fruits = [];

for (val of mixedArray) {
  if (typeof val === 'number') {
    num.push(val);
  } else if (typeof val === 'string') {
    fruits.push(val);
  }
}

console.log(num)
console.log(fruits);


let number1 = [13, 43, 56, 7, 435, 64, 75, 66, 44];

let largest = number1[0];
let smalest = number1[0];

for (let i = 0; i < number1.length; i++){
  if (number1[i] > largest) {
    largest = number1[i];
  } else if (number1[i] < smalest) {
    smalest = number1[i];
  }
}

console.log(largest);
console.log(smalest);

let arr = [1, [2, 3], [4, [5, 6]]];

console.log(arr.flat(Infinity));

let Arr = [1, 2, 3, 4, 5, 6];

let firstIndex = Arr.shift();

Arr.push(firstIndex);

console.log(Arr);
