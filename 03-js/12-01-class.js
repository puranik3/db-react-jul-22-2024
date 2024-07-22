class Person {
    name;
    age;
    nationality = 'Indian';

    constructor(name, age, nationality) {
        this.name = name;
        this.age = age;

        if (nationality !== undefined) {
            this.nationality = nationality;
        }
    }

    celebrateBirthday() {
        ++this.age;
    }
}

const john = new Person('John', 32);
const jane = new Person('Jane', 28);

john.celebrateBirthday();
jane.celebrateBirthday();

console.log(john);
console.log(jane);

// EXPLORE: How to inherit from a base class
// Reference: https://javascript.info/class-inheritance