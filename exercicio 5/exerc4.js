function calcularPotencia() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    // Calcula a potência usando o operador **
    let resultado = numero1 ** numero2;

    // Exibe o resultado usando window.alert
    window.alert(`${numero1} elevado a ${numero2} é igual a ${resultado}`);
}

// Chamada da função para iniciar o programa
calcularPotencia();
