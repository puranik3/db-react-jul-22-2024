const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Pune',
        pinCode: 460100
    }
};

console.log(john.name);
console.log(john.address.city);

// john.age = john.age + 1;
++john.age;
console.log(john);

// add new properties
john.spouse = 'Jane';

console.log(john);

// reassignment is NOT allowed for const variables
// john = {
//     name: 'Jonathan',
//     age: 40
// };

john.name = 'Jonathan';
++john.age;

console.log(john);