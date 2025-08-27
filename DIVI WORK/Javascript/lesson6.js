
let fruits = document.getElementsByClassName("fruits");
console.log("fruits");

//getElementsByTagName
let paras = document.getElementsByTagName("p")
console.log(paras);

//QuerySelector
let firstItem = document.querySelector("my-text")
console.log(firstItem)

//QuerySelectAll
let allItems = document.querySelectorAll("my-text")
console.log(allItems)


document.querySelector(".my-text").style.color = "red"
document.querySelectorAll(".my-text").forEach(el => el.style.color = "blue") 
document.querySelectorAll(".my-text")[1].style.color = "green"

const change = () => {
    document.getElementById("demo").textContent = "Python";
}


const change2 = () => {
    document.getElementById("img")
    .setAttribute("src", "../softypinko/left-image.png"
     )
}