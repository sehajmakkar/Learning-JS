const coding = ["js", 'cpp', 'java', 'php', 'py']

const languages = coding.forEach( (item) => {
    // console.log(item);
    return item
} )
// foreach value return nahi karta
// console.log(languages); // undefined


// filter
const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNum.filter( (num) => num>4) // aise direct return hojayega without opening scope
const newNums = myNum.filter( (num) => {
    return num > 4 // return keyword use krna padega if you apply curly braces {}
})
console.log(newNums);

// same with using foreach
const num1 = []
myNum.forEach( (num) => {
    if(num>4){
        num1.push(num)
    }
} )
console.log(num1);



