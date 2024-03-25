const marvel = ["thor", "Ironman"]
const dc = ["superman", "flash"]

// marvel.push(dc) // array ke andar array (not concatenate)

const allheros = marvel.concat(dc); // concatenated -> returns new array
console.log(allheros);

const allNewHeros = [...marvel, ...dc]
console.log(allNewHeros); // same output as concatenate

const arr = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const anotherArray = arr.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. INfinity means includes all elements
console.log(anotherArray);

console.log(Array.isArray("sehaj")) // asks -> yeh array hai kya ?
console.log(Array.from("sehaj")) // converts the input into an array
console.log(Array.from({name: "sehaj"})) // returns empty array if you dont specify what to print: key or values -> interesting case for interviews -> object input -> need to specify

let score1 = 100
let score2 = 500
let score3 = 894
console.log(Array.of(score1,score2,score3)); //Returns a new array from a set of elements.




