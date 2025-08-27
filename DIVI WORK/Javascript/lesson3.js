
function add (x,y) {
    return x + y;
}
let result = add(5, 3);
console.log("The result of the addition is: " + result);

function greet(name){
    
    console.log("Hello, " + name + "!")
}

greet("Prince Divine");


function sayHello() {
    let name = prompt("What is your name?");
    let greeting = "Hello, " + name + " ! Welcome to the Javascript Class.";
    document.getElementById("greeting").innerText = greeting
}

function iLike() {
    let name = prompt("What is your favourite quote");
    let favquote = "Always, " + name + " Keep growing keep improving.";
    document.getElementById("favquote").innerText = favquote
}