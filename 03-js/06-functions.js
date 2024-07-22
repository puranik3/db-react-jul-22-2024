console.log(sum1(12, 13)); // this will work

// these functions are craeted before execution begins
function sum1(x, y) {
    const result = x + y;
    return result;
};

// console.log(sum2(12, 13)); // this will NOT work

// RHS is a "function expression"
// these functions are created and executed when this statement is executed
const sum2 = function (x, y) {
    return x + y;
};

console.log(sum2(12, 13));

// arrow function (ES2015)
const sum3 = (x, y) => {
    return x + y;
};

console.log(sum3(12, 13));

// single line functions
const sum4 = (x, y) => x + y;

console.log(sum4(12, 13));

// single argument - parenthesis around it is optional
const square = x => x * x;
console.log(square(12));