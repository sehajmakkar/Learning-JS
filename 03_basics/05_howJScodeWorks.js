// global execution context
// function execution context
// eval execution context

// How JS executes code 
// 1. Memory creation phase : jo bhi code likha hai uske liye memory allocate kardi jayegi
// 2. Execution phase

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2);
let result2 = addNum(10,2)


// The working of the JavaScript works on three phases:
// 1. Global Execution Context
// 2. Memory phase / Creation phase
// 3. Execution phase

// Phase 1: Global Execution Context
// The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

// Phase 2: Memory phase
// During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

// Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
// 1. Memory phase 
// 2. Execution phase 
// The return value of the 'Function Execution' context is passed to the Global Execution Context
// After returning the desired value the New Variable environment and execution thread gets deleted.

// step1 only happens one time and the rest are repetitive

// How call stack works: LIFO
// Understand call stack with the help of live demo :
// browser > inspect > Sources
// 1.then create a snippet by clicking on the arrow(>>) next to workspace
// 2.then write down some functions in the created snippet ,do save them by ctrl+S 
// 3.Create breakpoints and run the code and keep eye on call stack to visualize how it works.
