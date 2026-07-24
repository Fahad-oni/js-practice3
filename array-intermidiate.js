let fruits = ['apple', 'mango', 'banana'];
let vagetables = ['potato', 'tomato', 'onion'];

let combinedArray = fruits.concat(vagetables);

console.log(combinedArray);

let slicedArray = fruits.slice(0, 2);

console.log(slicedArray);

let joinedArray = fruits.join(' ');

console.log(joinedArray);

console.log(Array.isArray(fruits));
console.log(Array.isArray(joinedArray));

let numbers = [1, 9, 5, 3, 8, 2, 6, 4, 7];

console.log(numbers.reverse());

console.log(fruits.sort());

// ascending sorting
console.log(numbers.sort((a, b) => a - b));
// descending sorting
console.log(numbers.sort((a, b) => b - a));

let NUMBER = [1, 2, 5, 70, 87, 96, 78, 57, 446, 35, 663, 23];

for (NUM of NUMBER) {
  if (NUM > 10) {
    // console.log(NUM);
    let newNUM = NUM;
    console.log(newNUM);
  }
}

let sum = 0;
for (NUM of NUMBER) {
  sum += NUM;
}

console.log(sum);

