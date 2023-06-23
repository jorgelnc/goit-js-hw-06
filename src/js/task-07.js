// Escriba un script que reaccione a un cambio en el valor de input#font-size-control. (evento input) y 
// cambie el estilo inline de span#text actualizando el font - size.Por lo tanto, al arrastrar el deslizador cambiará el tamaño del texto.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputControlSize = document.querySelector("#font-size-control");
const refText = document.querySelector("#text");

inputControlSize.addEventListener("input", (e) => {
    let valueDefault = e.target.value;
    refText.style.fontSize = `${valueDefault}px`;
});