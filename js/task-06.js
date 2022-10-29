const inputForm = document.querySelector("#validation-input");
inputForm.addEventListener("blur", validateForm);

function validateForm (event) {
    console.dir(inputForm);
}