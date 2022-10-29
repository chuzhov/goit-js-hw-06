const inputFontSize = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

// відразу змінюємо розмір параграфу, щоб відповідав поточному значенню input:
spanText.style.fontSize = `${inputFontSize.value}px`
// встановлюємо обробник подій
inputFontSize.addEventListener("input", fontSizeCorrector);

function fontSizeCorrector(event) {
    spanText.style.fontSize = `${event.target.value}px`
}