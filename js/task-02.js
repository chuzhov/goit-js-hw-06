const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = [];
const ul = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  
  listItems.push(list);
}

ul.append(...listItems);


let htmlString ="<h2>Те саме, іншім методом:</h2><ul>";
for (const ingredient of ingredients) {
  htmlString+=`<li class=\"item\">${ingredient}</li>`
}
htmlString+="</ul>"
ul.insertAdjacentHTML("afterend",htmlString);