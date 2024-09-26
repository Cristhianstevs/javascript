function gerarTabuada() {
    
    var tabuada = document.querySelector('select#seltab')
    tabuada.innerHTML = ``
    
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
            let item = document.createElement('option')
            item.text = `${numeroTabuada} x ${multiplicador} = ${resultadoMultiplicação}`
            item.value = `tabuada${multiplicador}` // Essa linha não faz sentido no JavaScript mas faria em uma linguagem de programação Back-end
            tabuada.appendChild(item)
            resultadoMultiplicação = numeroTabuada * multiplicador
            multiplicador ++
        }
    }
}