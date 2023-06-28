// Escriba un script que para cada elemento del array ingredients:

// Cree un elemento separado <li>. Asegúrese de usar el método document.createElement().
// Añada el nombre de un ingrediente como contenido de texto.
// Añada una clase item al elemento.
// Después, inserte todos los <li> en una sola operación en la lista ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector("#ingredients");


const ingredientsList = ingredients.map(ingredient => {
 let ingredientLi = document.createElement("li");
  ingredientLi.textContent = ingredient;
  ingredientLi.classList.add("item");
  return ingredientLi;
  });

  mainList.append(...ingredientsList);