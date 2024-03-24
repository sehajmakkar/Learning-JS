// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// console.log(arr[1]); // indexing an array (index starts from 0)
// JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// shallow copies -> reference change (change in OG value)
// deep copies -> value change (change in copy)


// how to declare an Array:
const arr = [0,1,2,3,4,5]
const heros = ["shaktiman", "naagraj", "thor"]
const brr = new Array(1,2,3,4)

// accessing the array
// console.log(arr[2]);

// Array Methods
arr.push(100) // adding an element at last
arr.push(69)
arr.pop() // removing last element
arr.pop() // removing last element

// arr.unshift(9); // placed 9 at start of the array
// arr.shift() // removes the first element fromm the start
// console.log(arr.includes(5)); // returns false (bools)
// console.log(arr.indexOf(1000000)); // returns index

const newArr = arr.join() // concatenating all of the elements in this array, converts type into string

// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr); // string

// IMPT for interviews:
// slice, splice 

// og array:
console.log("Original Array:", arr);
// slice:
const myn1 = arr.slice(1,3) // starting index included & ending index excluded 
console.log("Sliced Array:",myn1);
console.log("Original array after slice:", arr);
// splice:
const myn2 = arr.splice(1,3)
console.log("Spliced Array:",myn2); // start end both index included
console.log("Original array after splice:", arr);
// spliced part original array mmein se nikaal deta hai
// original array ko manipulate krdiya!!!!! -> main difference!!!




