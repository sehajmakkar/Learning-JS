// map
const num = [1,2,3,4,5,6,7,8,9,10]
const newnums = num.map( (n) => {
    return n+10
} )
console.log(newnums);

// chaining -> using multiple methods
const num1 = num.map( (num) => num*10).map( (num) => num+1).filter((num) => num>=40)
console.log(num1)
