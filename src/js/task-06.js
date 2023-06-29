const inputValidator = document.getElementById("validation-input");

inputValidator.addEventListener("blur", (e) => {
    let newValue = e.target.value;
        if (String(newValue.length) === inputValidator.dataset.length) {
        inputValidator.classList.add("valid");
        inputValidator.classList.remove("invalid");
    } else {
        inputValidator.classList.add("invalid");
        inputValidator.classList.remove("valid");
    }  
});