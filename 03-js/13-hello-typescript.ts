// primitive type and union
// number, boolean, string, null, undefined
let price: number | string; // union type
let weight: any; // do not use this in general - any value can be assigned
let height /*: number*/ = 165; // type if inferred to be number

price = 100;
price = "Two hundred";
// price = false; // error
// price = [1, 2, 3]; // error

weight = 100;
weight = "Two hundred";

// array
const arr: number[] = [1, 2, 3];
arr.push(4);
// arr.push("Five"); // error

function sum(x: number, y: number) /*: number*/ {
    return x + y;
}

// object

// type alias
// type Person = {
//     name: string;
//     age: number;
//     spouse?: string; // optional property
// };

// interfaces
interface IPerson {
    name: string;
    age: number;
    spouse?: string; // optional property
    celebrateBirthday?: (increaseBy: number) => number;
}

const john: IPerson = {
    name: "John",
    age: 32,
    spouse: "Jane",
};

const mark: IPerson = {
    name: "Mark",
    age: 40,
};

// sum(12, "hello"); // error
sum(12, 13);

// class
class Person implements IPerson {
    name: string;
    age: number;
    spouse?: string; // optional property

    // optional arguments should be at the end
    constructor(name: string, age: number, spouse?: string, x?: number) {
        this.name = name;
        this.age = age;

        if (spouse !== undefined) {
            this.spouse = spouse;
        }
    }

    celebrateBirthday(increaseBy: number) {
        this.age += increaseBy;
        return this.age;
    }
}

const mary = new Person("Mary", 32, "Mark");
const eric = new Person("Eric", 32, undefined, 100); // do not pass spouse, but pass x
