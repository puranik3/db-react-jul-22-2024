const primes = [2, 3, 5, 7, 11];

console.log('primes[0] = ', primes[0]);
console.log('primes[4] = ', primes[4]);

console.log('primes.length = ', primes.length);

console.log('primes[primes.length - 1] = ', primes[primes.length - 1]);

// primes = ['Two', 'Three']; // error (reassignment not allowed for const)

primes[0] = primes[0] + 1;
console.log(primes);

primes[100] = 203;
console.log(primes[100]);

console.log(primes);