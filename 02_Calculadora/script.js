const display = document.getElementById("display");
const buttons = document.querySelectorAll("keys button");

let current = "";

const updatedisplay = () => {
    display.innerHTML = count;
};

let count = 0;
let intervalID = 0; 

display.addEventListener('click', () => {
    intervalID = setInterval ( () => {
        count += 1;
        updatedisplay();
    }, 100);

});