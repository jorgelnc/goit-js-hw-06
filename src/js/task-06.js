const inputValidator = document.getElementById("validation-input");

inputValidator.addEventListener("blur", (e) => {
    let newValue = e.target.value;
        if (newValue.length === 6) {
        inputValidator.classList.add("valid");
        inputValidator.classList.remove("invalid");
    } else {
        inputValidator.classList.add("invalid");
        inputValidator.classList.remove("valid");
    }  
});