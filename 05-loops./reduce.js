const nums = [1,2,3]

const total = nums.reduce( function (acc, curr) {
    console.log(`acc: ${acc} and curr: ${curr}`);
    
    return acc + curr
}, 0) // initial value for accumulator

console.log(total);

const shoppingCart = [
    {
        item: "js course",
        price: 1999
    },
    {
        item: "python course",
        price: 4500
    },
    {
        item: "ai course",
        price: 10000
    },
]

const totalcost = shoppingCart.reduce((acc, item) => {
    return acc + item.price
},0)
console.log(totalcost);

