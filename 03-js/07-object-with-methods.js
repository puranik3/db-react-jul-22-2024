const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Pune',
        pinCode: 460100
    },
    // celebrateBirthday: function() {

    // }
    celebrateBirthday(numYears = 1) {
        this.age += numYears;
    }
};

// john.celebrateBirthday(10);
john.celebrateBirthday();
console.log(john);