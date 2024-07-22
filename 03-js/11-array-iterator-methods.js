const mobiles = [
    {
        name: 'One Plus Nord',
        price: 35000,
        colors: ['red', 'blue', 'silver']
    },
    {
        name: 'Samsung Galaxy',
        price: 25000,
        colors: ['red', 'green', 'gold', 'silver', 'yellow']
    },
    {
        name: 'iPhone 15',
        price: 60000,
        colors: ['silver', 'gold', 'rose', 'blue']
    },
    {
        name: 'Oppo',
        price: 20000,
        colors: ['red', 'blue', 'silver']
    }
];

// forEach() - simpler looping mechanism
mobiles.forEach(
    (item) => {
        item.price = item.price * 1.18
    }
);

// [ 'One Plus Nord', 'Samsung Galaxy', ...]
// The map iterator function expects you to return a value
const namesOfMobiles = mobiles.map(item => item.name)

console.log(mobiles);
console.log(namesOfMobiles);

// find(), filter()