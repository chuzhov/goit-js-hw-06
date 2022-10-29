const myInput = document.querySelector("input#name-input");
const myLabel = document.querySelector("span#name-output");

function modifyLabel(event) {
    myLabel.textContent = myInput.value ==="" ? "Anonimous" : myInput.value;
}

myInput.addEventListener("input", modifyLabel)