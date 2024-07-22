// You can pass a function as an argument to a function
function sumArray(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; ++i) {
        result = result + arr[i];
    }

    return result;
}

function sumSquaresArray(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; ++i) {
        result = result + arr[i] * arr[i];
    }

    return result;
}

// prints the sum of squares
console.log(
    sumArray([1, 2, 3, 4])
);

console.log(
    sumSquaresArray([1, 2, 3, 4])
);

// You can return a function from a function