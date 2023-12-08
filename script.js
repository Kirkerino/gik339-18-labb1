// Skapa variabler [Uppgift 4]
const checkbox = document.getElementById('divStyle');
const textfields = document.getElementsByClassName('textfield');
const button = document.getElementById('myButton');
const divElement = document.getElementById('myDiv');
const content = document.getElementById('content');

// Skapa funktion [Uppgift 5]
function handleInputChange(e) {
    console.log('Event triggered by:', e.target);
    const elementName = e.target.name;

    if (elementName === 'content') {
        const contentValue = e.target.value;
        divElement.innerHTML = contentValue;
    } 
}

// Koppla eventlyssnare [Uppgift 6]
content.addEventListener('input', handleInputChange);

checkbox.addEventListener('change', function() {
    const colorInput = document.getElementById('color');
    divElement.style.backgroundColor = colorInput.value;
});

button.addEventListener('click', function() {
    if (divElement.style.display === 'none') {
        divElement.style.display = '';
        myButton.innerHTML = 'Ta bort';
    }
    else {
        divElement.style.display = 'none';
        myButton.innerHTML = 'Visa';
    }
});
