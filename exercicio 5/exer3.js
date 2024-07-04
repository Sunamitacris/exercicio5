function calcularEstatisticasGado() {
    let pesos = []; // Array para armazenar os pesos dos gados
    let peso; // Variável para armazenar o peso de cada gado informado

    // Solicita os pesos dos gados até que seja informado um peso 0
    while (true) {
        peso = parseFloat(prompt("Digite o peso do gado (digite 0 para encerrar):"));
        if (peso === 0) {
            break; // Encerra a leitura se o peso informado for 0
        }
        pesos.push(peso); // Adiciona o peso ao array
    }

    // Verifica se há pesos para calcular estatísticas
    if (pesos.length === 0) {
        console.log("Nenhum peso foi informado.");
        return;
    }

    // Calcula o peso do maior gado
    let pesoMaior = Math.max(...pesos);

    // Calcula o peso do menor gado
    let pesoMenor = Math.min(...pesos);

    // Calcula a média dos pesos dos gados
    let somaPesos = pesos.reduce((acumulador, peso) => acumulador + peso, 0);
    let mediaPeso = somaPesos / pesos.length;

    // Exibe os resultados
    console.log(`Peso do maior gado: ${pesoMaior}`);
    console.log(`Peso do menor gado: ${pesoMenor}`);
    console.log(`Média dos pesos dos gados: ${mediaPeso.toFixed(2)}`);
}

// Chamada da função para iniciar o programa
calcularEstatisticasGado();
