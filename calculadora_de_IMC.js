function calcularIMC() {
    // Entrada de dados
    let Peso = parseFloat(document.getElementById("Peso").value);
    let Altura = parseFloat(document.getElementById("Altura").value);

    // Validação de dados
    if (isNaN(Peso) || isNaN(Altura) || Altura <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira números válidos.";
        document.getElementById("Classificação").textContent = "";
        return;
    }

    // Cálculo do IMC
    let imc = Peso / (Altura * Altura);

    // Classificação
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    // Saída de dados
    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2);
    document.getElementById("Classificação").textContent = "Classificação: " + classificacao;
}
