
//Array Methods
let fruits = [ "Mango" , "Orange" , "Strawberry"]


//fruits.pop()
//fruits.push("Mango"); //adds an item to the end
//fruits.unshift("Pinapple"); //adds an item to the begining
//fruits.shift(); //removes an item from the begining
//console.log(fruits) //["Pineapple" , "Mango" , "Orange" , "Strawberry" , "Apple"]
//fruits.splice(1, 2, "Pear"); //removes an item from a specific idex
//fruits.splice(start at index, remove count , item to add)
//console.log(fruits);

//String Methods

//let text = "Hello World";
//console.log(text, toUpperCase ()); //HELLO WORLD
//console.log(text,tolowercase()); //hello world

// text2 = "javascript is interesting"
// console.log(text2.includes(b="boy")); //false
// console.log(text2.startsWith("java")); //true
// console.log(text2.endsWith("est")); //false
// console.log(text2.indexOf("is" ));

// function addText() {
//     document.getElementById("list").innerHTML += "<li> Pear </li>";
// }


let year = new Date().getFullYear() - 1999;
console.log(year);
document.getElementById

let month = new Date().getMonth() + 1;
console.log(month);

let time = new Date().toLocaleTimeString();
console.log(time);
document.getElementById("Time").innerHTML = `The time is ${time}`

let randomNum = Math.floor(Math.random() * 100);

console.log(Math.PI)
console.log(Math.round(3.6))

console.log(Math.floor(3.9))

function addText() {
    document.getElementById("clubs").innerHTML += "<li> Barcelona </li>"
}

function pop() {
    document.getElementById("clubs").innerHTML = "<li> Barcelona </li>"
}
