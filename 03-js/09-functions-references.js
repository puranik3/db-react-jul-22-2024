const sum = (x, y) => x + y;

// add and sum refre to the SAME function in memory
// const add = sum(12, 13); // assigns the returned value to add

const add = sum; // assigns the sum function itself to add

console.log(add);
console.log(typeof add); // "function"

console.log('add(12, 13) = ', add(12, 13));