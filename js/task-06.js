const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", validateForm);

function validateForm (event) {
    console.dir(event);
    
    if (event.target.value.length !== parseInt(myInput.dataset.length)) {  
        if (myInput.classList.contains("valid")) {
            myInput.classList.remove("valid")
        }
        if (!myInput.classList.contains("invalid")) {
            myInput.classList.add("invalid")
        }
    } else {
        if (myInput.classList.contains("invalid")) {
            myInput.classList.remove("invalid")
        }
        if (!myInput.classList.contains("valid")) {
            myInput.classList.add("valid")
        }
    }
}