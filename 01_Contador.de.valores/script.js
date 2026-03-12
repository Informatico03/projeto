const valor = document.getElementById('valor');
const adicionar = document.getElementById('adicionar');
const subtrair = document.getElementById('subtrair');

const updateValor = () => {
    valor.innerHTML = count;
};

let count = 0;
let intervalID = 0; 


adicionar.addEventListener('mousedown', () => {
    intervalID = setInterval ( () => {
        count += 1;
        updateValor();
    }, 100);

});

subtrair.addEventListener('mousedown', () => {
    intervalID = setInterval ( () => {
        count -= 1;
        updateValor();
    }, 100);

});


document.addEventListener('mouseup', () => clearInterval(intervalID));