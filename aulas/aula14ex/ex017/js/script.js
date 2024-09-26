function gerarTabuada() {
    
    var resultado = document.querySelector('p.resultado')
    resultado.innerHTML = ``
    
    function getNumber(selector) {
        return Number(document.querySelector(selector).value)
    }

    var numeroTabuada = getNumber('#numero_tabuada') // Selector recebe #numero_tabuada e converte para number.
    
    if (isNaN(numeroTabuada) || numeroTabuada === 0) {
        window.alert('Escreva um número para começar...')
    }
    else {
        var multiplicador = 1
        var resultadoMultiplicação = 0

        while (resultadoMultiplicação < numeroTabuada * 10) {
            resultadoMultiplicação = numeroTabuada * multiplicador
            resultado.innerHTML += `${numeroTabuada} x ${multiplicador} = ${resultadoMultiplicação} <br>`
            multiplicador ++
        }
    }
}