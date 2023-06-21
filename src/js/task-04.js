

const mainID = document.getElementById("counter");

const buttons = document.querySelectorAll("button");


const valueSpan = document.querySelector("#value");
valueSpan.textContent = "0";

let counterValue = 0;
for (let button of buttons) {
    button.addEventListener("click", (e) => {
        if (e.target.dataset.action === "increment") {
        counterValue += 1;
        } else if (e.target.dataset.action === "decrement") {
        counterValue -= 1;
        }
        valueSpan.textContent = counterValue;
    })
}


