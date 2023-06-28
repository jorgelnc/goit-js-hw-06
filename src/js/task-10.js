// Escriba un script para crear y borrar una colección de elementos.El usuario introduce el número de elementos en input y pulsa el botón Create,
//   tras lo cual la colección se ha renderizado.Cuando el usuario hace clic en el botón Borrar, la colección de artículos ya se ha despejado.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Cree una función createBoxes(amount) que tome un parámetro, un número. 
// La función crea tantos < div > como se especifique en amount y los añade a div#boxes.

// El tamaño del primer <div> es de 30px por 30px.
// Cada elemento después del primero, debe ser 10px más ancho y alto que el anterior.
// Todos los elementos deben tener un color de fondo aleatorio en formato HEX. Use la función getRandomHexColor lista para obtener el color.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Cree una función destroyBoxes() que borre el contenido de div#boxes, eliminando así todos los elementos creados.

const controls = document.querySelector("#controls");
const inputNumber = controls.querySelector("input");
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let numberOfDivs = 0;

function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
  const createDIV = document.createElement("div");
    createDIV.style.width = `${i * 10 + 30}px`;
    createDIV.style.height = `${i * 10 + 30}px`;
    createDIV.style.backgroundColor = getRandomHexColor();
    boxes.append(createDIV);
  }
};

const onInputChange = event => {
  numberOfDivs = event.currentTarget.value;
};

function destroyBoxes() {
  boxes.innerHTML = '';
}

createButton.addEventListener('click', () => {
  createBoxes(numberOfDivs);
});

inputNumber.addEventListener('input', onInputChange);

destroyButton.addEventListener('click', destroyBoxes);