"use strict"
function calcularMedia() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));

    // Calcula a média das três notas
    let media = (nota1 + nota2 + nota3) / 3;

    // Verifica se a média é maior ou igual a 60
    if (media >= 60) {
        window.alert(`Parabéns! Você foi aprovado(a) com média ${media.toFixed(2)}`);
    } else {
        window.alert(`Infelizmente você foi reprovado(a) com média ${media.toFixed(2)}`);
    }
}

// Chamada da função para iniciar o programa
calcularMedia();
