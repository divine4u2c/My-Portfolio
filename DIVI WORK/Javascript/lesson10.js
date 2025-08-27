// while (condition) {
//     // do this
// }
// let i = 1;
// while (1 <= 10) {
// console.log(i)
// i++;
// }
// do{ 
//    do this first
// } while(condtion);



// FOR LOOP

// for (i=1; i <= 5; i++) {
// console.log( "count", 1)
// }
   
// for (i = 1; i <= 20; i++) {
//     if (i % 2 ===0) {
//         console.log(i)
//     }
// }

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i)
// }

// let i = 2;
// while (i <= 20) {
//     console.log(i)
//     i += 2;
// }

// for of - looping through arrays
const fruits = ["apple", "banana", "orange", "mango"]
for (const fruit of fruits) {
    console.log("I like", fruit)
}

// for in - looping through objects
let person = {name: "Fred", age: 30, job:"software engineer"} ;
for (const key in person) {
    console.log(key + "" , person[key])
}

// for loop - nested loops //multiplication table
for (let row = 1; row <= 5; row++) { 
    let line = "";
    for (let col = 1; col <= 5; col++){
        line += (row * col) + "/";
    }
    console.log(line)

    }

    for (i = 1; i <= 10; i++){
        if (i === 5) {
            console.log("we found 5. Please Stop the loop!");
            break;
        }
        if (i % 2 === 0) {
            console.log("it's even,skip the rest of this round!");
            continue
        }
        console.log("it is odd and processed")
    };
