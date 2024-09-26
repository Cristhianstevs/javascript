function contar() {
    
    var resultado = document.querySelector('div.resultado')
    resultado.innerHTML = ``
    
    function getNumber(selector) { 
        return Number(document.querySelector(selector).value)
        // selector recebeu '#numero_inicio', '#numero_fim', '#numero_passo' e converteu para número.
    }
    
    var numeroInicio = getNumber('#numero_inicio')   // Aqui, selector recebe '#numero_inicio'.
    var numeroFinal = getNumber('#numero_fim')       // Aqui, selector recebe '#numero_fim'.
    var numeroPulo = getNumber('#numero_passo')      // Aqui, selector recebe '#numero_passo'.
    
    if (isNaN(numeroInicio) || numeroInicio === 0){
        window.alert('Digite um número de início.')
    }
    else if (numeroPulo <= 0) {
        window.alert('O passo deve ser maior que zero.');
    }
    else {
        
        resultado.innerHTML += `Vamos contar de ${numeroInicio} até ${numeroFinal} pulando de ${numeroPulo} em ${numeroPulo}<br>`
        var contagem = 0

        if (numeroInicio > numeroFinal) {
            
            for (var contagem = numeroInicio; contagem >= numeroFinal; contagem -= numeroPulo) {
                resultado.innerHTML += `${contagem}, `
            }

        }
        else { 

            for (var contagem = numeroInicio; contagem <= numeroFinal; contagem += numeroPulo) {
                resultado.innerHTML += `${contagem}, `
            }

            /*
            while (numeroInicio <= numeroFinal) {
                resultado.innerHTML += `${numeroInicio}, `
                numeroInicio += numeroPulo
            }
            */                                                   
        }
    }
}