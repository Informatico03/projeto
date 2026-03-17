const form = document.getElementById("imcForm");
const resultado = document.getElementById("resultado");

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function formatarIMC(imc) {
  return imc.toFixed(1).replace(".0", "");
}

function categoriaIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  if (imc < 35) return "Obesidade (Grau I)";
  if (imc < 40) return "Obesidade (Grau II)";
  return "Obesidade (Grau III)";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
  const altura = parseFloat(document.getElementById("altura").value.replace(",", "."));

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    resultado.textContent = "Por favor preencha peso e altura válidos.";
    return;
  }

  const imc = calcularIMC(peso, altura);
  const imcFormatado = formatarIMC(imc);
  const categoria = categoriaIMC(imc);

  resultado.textContent = `Seu IMC é ${imcFormatado} — ${categoria}.`;
});
