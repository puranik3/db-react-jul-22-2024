function adder(x) {
    return function (y) {
        return x + y;
    };
}

const add10 = adder(10); // x argument will be alive even after adder function is called
console.log(add10);
console.log(typeof add10); // "function"

console.log(add10(20)); // 30