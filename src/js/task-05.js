// Escriba un script que, cuando se escriba el texto en el input de input#nombre - input(evento input),
//     sustituya su valor actual en span#name - output.Si el input está vacío, el span debería mostrar la secuencia "Anónimo".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = document.getElementById("name-input");
const spanName = document.getElementById("name-output");

inputName.addEventListener("input", (e) => {
    let newValue = "Anonymous";
    if(e.target.value.trim()){
        newValue = e.target.value;
}
    spanName.textContent = newValue;
});