let counter = 0;
const spanCounter = document.querySelector("#value")

function counterHandler(event) {
    const eventType = event.target.dataset.action;
    if (eventType !=="increment" && eventType !=="decrement") {return}
    if (eventType === "increment") {counter++} 
    else {counter--}
    
    spanCounter.textContent = counter;
}

// встановлюємо обробчік на батькивській елемент
// 
const buttons = document.querySelector('#counter');
buttons.addEventListener('click',counterHandler);

