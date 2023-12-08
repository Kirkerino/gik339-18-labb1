// Skapa variabler [Uppgift 4]
const checkbox = document.getElementById('divStyle');
const textfields = document.getElementsByClassName('textfield');
const button = document.getElementById('myButton');
const divElement = document.getElementById('myDiv');
const content = document.getElementById('content');

// Skapa funktion [Uppgift 5]
function handleInputChange(e) {
    divElement.innerHTML = e.target.value;
}

function handleTextFieldChange(e) {
    console.log('Event triggered by text field:', e.target);
}

for (let i = 0; i < textfields.length; i++) {
    textfields[i].addEventListener('input', handleTextFieldChange);
}

// Koppla eventlyssnare [Uppgift 6]
content.addEventListener('input', handleInputChange);

checkbox.addEventListener('change', function() {
    const colorInput = document.getElementById('color');
    divElement.style.backgroundColor = colorInput.value;
});

button.addEventListener('click', function() {
    divElement.remove();
});
