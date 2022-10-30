function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const parentDiv = document.querySelector("div#boxes");
const inputCount = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const eraseBtn = document.querySelector('button[data-destroy]');

let state = false;  // боксі ще не створені
eraseBtn.disabled = !state;
createBtn.disabled = !state;

let boxNumber = 0;

inputCount.addEventListener("input", (event) => 
  {boxNumber = parseInt(event.target.value); 
   boxNumber > 0 ? state = true : alert("Quantity must be greater than 0");
   createBtn.disabled = !state; 
  });

createBtn.addEventListener("click", () => createBoxes(boxNumber));
eraseBtn.addEventListener("click", () => {
  parentDiv.innerHTML="";
  state = false;
  eraseBtn.disabled = !state;
  createBtn.disabled = !state;
  inputCount.value = "";
})

function createBoxes(amount) {
  const boxArray = [];
  for (let i=0; i<amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${30 + i*10}px`;
    box.style.width = `${30 + i*10}px`;
    boxArray.push(box);
  }
  parentDiv.prepend(...boxArray);
  createBtn.disabled = state;
  eraseBtn.disabled = !state;
}
