
let ulCategories = document.querySelector("#categories");
console.log('Number of Categories is: ', ulCategories.children.length);
console.log(" ");

const itemsOfCategories = ulCategories.querySelectorAll(".item");

itemsOfCategories.forEach((item) => {
  console.log(" ");
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.lastElementChild.children.length);
});