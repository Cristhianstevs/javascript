var lista = document.querySelector('#valorNaTela')
var resposta = document.querySelector('#resultado')
var valores = []

function getNumber(selector) {
    return Number(document.querySelector(selector).value)
}



function isNumero(verificarNumero) {
    if (verificarNumero >= 1 && verificarNumero <= 100) {
        return true
    }
    else {
        return false
    }
    
}

function inLista(n, lista) {
    if (lista.indexOf(n) != -1) {
        return true
    }
    else {
        return false
    }
}



function adicionar() {

    var numero = getNumber('#numero1-100') // var numero recebe um valor, não uma string.
    var numeroInput = document.querySelector('#numero1-100')

    if (isNumero(numero) && !inLista(numero, valores)) {
            // Se var numero for realmente um numero e se o numero não está na lista...
            // Vamos adicionar um elemento no vetor 'valores' usando '.push'.
        valores.push(numero)
            // Agora vamos fazer aparecer na tela de 'select' criando o elemento 'option'
            // Primeiro adicionamos a tag 'option' na var 'itens'
        let itens = document.createElement('option')
            // A var 'itens' recebe uma string, tipo texto, mostrando o resultado
        itens.text = `Valor ${numero} adicionado.`
            // Vamos adicionar a tag com o resultado na tela usando '.appendChild'
        lista.appendChild(itens)

    }
    else {
        window.alert('Valor inválido ou já escontrado na lista.')
    }
    numeroInput.value = '' 
    resultado.innerHTML = ''
    
}



function finalizar() {

    if (valores.length === 0) {
        window.alert('Adicione valores antes de iniciar!')
    }
    else {
        let totalElementos = valores.length
        let maiorValor = valores[0]
        let menorValor = valores[0]
        let soma = 0
        let media = 0
        for (let posicao in valores) {
            soma += valores[posicao]
            if (valores[posicao] > maiorValor) {
                maiorValor = valores[posicao]
            }
            if (valores[posicao] < menorValor) {
                menorValor = valores[posicao]
            }
        }
        media = soma / totalElementos

        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo temos, itens ${totalElementos} numeros cadastrados. </p>`
        resultado.innerHTML += `<p> O maior valor informado foi ${maiorValor}. </p>`
        resultado.innerHTML += `<p> O menor valor informado foi ${menorValor}. </p>`
        resultado.innerHTML += `<p> A soma entre os valores é de ${soma}. </p>`
        resultado.innerHTML += `<p> A média entre os valores é de ${media}. </p>`
    }

}




/*

function getNumber(selector) {
    return Number(document.querySelector(selector).value)
}

var numero = getNumber('#numero1-100')

if (isNaN(numero) || numero === 0 && inlista(numero, valores)) {  // !inLista - não(!) estiver em(in) lista
    window.alert('Valor inválido ou já encontrado na lista.')
}
else {
}

*/