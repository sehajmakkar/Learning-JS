// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("arrived half way");
    }
    console.log(i);
}

for(let i = 0; i <= 10; i++){
    console.log(`outer loop value: ${i}`);
    for(let j = 0; j <= 10; j++){
        // console.log(`inner loop value: ${j} and outer loop value: ${i}`);
        console.log(i + '*'+ j+ '='+ i*j);
    }
}

let myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// keywords : break, continue
for (let i = 1; i <= 20; i++) {
    if(i == 5) break; // break the loop
    console.log(i);
}
for (let i = 1; i <= 20; i++) {
    if(i == 5) continue; // skip an iteration
    console.log(i);
}