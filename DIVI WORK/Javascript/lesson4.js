// function greet() {
//     let message = "Hello";
//     var name = "Chizzy";
//     const age = 9;
//     console.log(message + " ")
// }

let favouriteFood = "beans"
console.log(favouriteFood.toUpperCase())
console.log(favouriteFood.length)



    
    let name = "Divine";
    let age = 15;
    let hobby = "watching football, coding, watching movies";
    let Skills = ["CSS", "HTML"];
    let isStudent = false;

    let nameInCaps = name.toUpperCase();
    hobbyLength = hobby.length;

    let birthYear = 2025 - age;
    let SkillScore = Skills.length * 5;
    
    console.log(isStudent);
    document.getElementById("message").innerHTML= `My name is ${nameInCaps}, My Birth year is ${birthYear}. I am ${age} years old. I love ${hobby}. My Skills include ${Skills}. This is my skill score ${SkillScore}. Am I a Student ${isStudent ? "Yes" : "No"}`;



    