// 1. Create an array with 3 items of your choice. Log it.
// Expected: array with your 3 items printed

const drinks = ['coffee', 'chaye', 'mojo'];

console.log(drinks);

console.log(drinks.length);

console.log(drinks[0], drinks[2]);

drinks[1] = 'speed';

console.log(drinks);

drinks.push('speed');

console.log(drinks);

let removedValue = drinks.pop(drinks[3]);

console.log(drinks);
console.log(removedValue);

let addedItemToStart = drinks.unshift('cold coffee');

console.log(drinks);

let removedItemFromStart = drinks.shift();

console.log(drinks);
console.log(removedItemFromStart);

let hasMojo = drinks.includes('mojo');

console.log(hasMojo);

let position = drinks.indexOf('mojo');

console.log(position);

for (drink of drinks) {
  console.log(drink);
}

// for ( i = 0; i < drinks.length; i++){
//   console.log(drinks[i]);
// }

let i = 0;
while (i < drinks.length) {
  console.log(drinks[i]);
  i++;
}