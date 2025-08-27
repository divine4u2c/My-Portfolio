let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
document.getElementById("result").textContent = "You have clicked this button"
});

let email = document.getElementById("email");

let errorEmail = document.getElementById("errorEmail");



email.addEventListener("input", () => {
if (!email.value.includes("@")) {
errorEmail.innerHTML = "please enter a valid email";

}
else {
    document.getElementById("emailSuccess").innerHTML = "email valid"
}
if (email.value === "") {errorEmail.innerHTML = ""; }
});

