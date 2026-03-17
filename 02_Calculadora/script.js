const display = document.getElementById("display");
const botoes = document.querySelectorAll("#keys button");

let expressao = "";

function atualizarDisplay() {
    display.innerText = expressao || "0";
}

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        let valor = botao.innerText;

        if (valor === "C") {
            expressao = "";
        } 
        
        else if (valor === "⌫" || valor === "‹") {
            expressao = expressao.slice(0, -1);
        }
        
        else if (valor === "=") {
            try {
                if (expressao === "") return;
            let conta = expressao.replace(/x/g, "*");
            let resultado = eval(conta);
            expressao = resultado.toString();
            display.innerText = expressao;
        } catch (erro) {
            expressao = "";
            display.innerText = "Erro";
        }
}
        
        else {
            if (valor === "x") {
                expressao += "*";
            } else {
                expressao += valor;
            }
        }

        atualizarDisplay();
    });
});


document.addEventListener("keydown", (e) => {
    let tecla = e.key;

    if (!isNaN(tecla) || "+-*/.".includes(tecla)) {
        expressao += tecla;
    } 
    
    else if (tecla === "Enter") {
        try {
            expressao = eval(expressao).toString();
        } catch {
            expressao = "";
            display.innerText = "Erro";
            return;
        }
    } 
    
    else if (tecla === "Backspace") {
        expressao = expressao.slice(0, -1);
    } 
    
    else if (tecla.toLowerCase() === "c") {
        expressao = "";
    }

    atualizarDisplay();
});