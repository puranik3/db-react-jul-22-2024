const primes = [2, 3, 5, 7, 11, 13, 17];

console.log('primes[0] = ', primes[0]);
console.log('primes[4] = ', primes[6]);

console.log('primes.length = ', primes.length);

console.log('primes[primes.length - 1] = ', primes[primes.length - 1]);

// primes = ['Two', 'Three']; // error (reassignment not allowed for const)

primes[0] = primes[0] + 1;
console.log(primes);

primes[100] = 203;
console.log(primes[100]);

primes.push(205);
console.log(primes);

// starting from index 2, remove 3 elements
const returnedArr = primes.splice(2, 3);
console.log(primes);
console.log(returnedArr);

// pop() removes the last item in the array
const poppedItem = returnedArr.pop();
console.log(returnedArr);
console.log(poppedItem);