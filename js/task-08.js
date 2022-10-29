const loginForm = document.querySelector('form.login-form');
loginForm.addEventListener("submit", loginFormProcessor);

function loginFormProcessor(event) {
    event.preventDefault();
    console.dir(event);

    if (event.target.elements.email.value ==="" || event.target.elements.password.value === "") {
        alert("Всі поля повинні бути заповнені!");
        return;
    }

    const loginData = {
        a: event.target.elements.email.value,
        b: event.target.elements.password.value,
    }

    loginForm.reset();
    console.log(event);
}
