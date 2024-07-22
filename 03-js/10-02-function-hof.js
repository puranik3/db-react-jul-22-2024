// You can pass a function as an argument to a function
function sumArray(arr, operation) {
    let result = 0;

    for (let i = 0; i < arr.length; ++i) {
        result = result + operation(arr[i]);
    }

    return result;
}

const square = x => x * x;

// prints the sum of squares
// arr = [1, 2, 3, 4]
// operation = square
console.log(
    sumArray([1, 2, 3, 4], x => x)
);

console.log(
    sumArray([1, 2, 3, 4], square)
);

console.log(
    sumArray([1, 2, 3, 4], x => x ** 3)
);

// You can return a function from a function