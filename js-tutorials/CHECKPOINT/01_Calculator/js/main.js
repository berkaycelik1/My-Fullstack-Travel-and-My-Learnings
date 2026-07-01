const display  = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");

numbers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        display.value += e.target.innerText;
    });
});

operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        display.value += e.target.innerText;
    });
});

clearBtn.addEventListener("click", (e)  => {
    display.value = "";
});

equalsBtn.addEventListener("click", (e) => {
    display.value = eval(display.value);
});