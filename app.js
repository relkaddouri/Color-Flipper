// Variables
const colors = [
    "green", 
    "red", 
    "rgba(133,122,200)",
    "#f15025"
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Event Listner
btn.addEventListener('click', changeColor);

function changeColor() {
    const randomNumber = Math.floor(Math.random()* colors.length);
    document.body.style.background = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
}

