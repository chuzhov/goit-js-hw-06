function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorizerBtn = document.querySelector("button.change-color")
const colorInformer = document.querySelector("span.color")
const body = document.querySelector("body")

colorizerBtn.addEventListener("click", colorizeWindow);

function colorizeWindow() {
  const newColor = getRandomHexColor();
  
  console.log(colorInformer.textContent);
  body.style.backgroundColor = newColor;
  colorInformer.textContent = newColor.toUpperCase();
}
