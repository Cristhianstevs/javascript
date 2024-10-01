// Vamos aprender funções com parâmetros e retornos



// ---- Funções ----
// Todas as funções em JavaScript precisam de uma iniciativa
// Por exemplo, você só tem uma função se fizer algo, se você não fizer algo, não tem nenhuma função
// E com JavaScript é a mesma coisa.
// Ou seja, uma função só existe quando ela executa uma ação.

// Para entender o que são parâmetros primeiro precisamos entender o que são 'chamadas'



// ---- Chamadas ----
// Para você fazer algo precisa de uma ordem ou de uma automação.
// Vamos imaginar a situação de que você precise ir comprar pão na Padoka.

// Com uma ordem seria: "Vá comprar pão na Padoka!"
// Com uma automação seria: "Ir comprar pão na Padoka todo dia as 8h"

// Essas são as chamadas de ordem ou de automação. Simple né!
// Agora que você entendeu o que são chamadas vamos para ação



// ---- Ações ----
// Quando as chamada é feita, seja por uma ordem ou por uma automação
// Você precisa executar a acão que foi lhe dada (comprar um pão na padoka)
// A ação seria:

/*
- Sair de Casa
- chegar até a padaria
- comprar o pão
- voltar para casa
*/

// Agora que você entendeu o simples da função, que são as chamadas e as ações,
// vamos entender o que realmente importa: (que é a dificuldade que eu estava tendo)
// Parâmetro e Retorno
// Vou tentar usar o mesmo exemplo acima.



// ---- Parâmetro ----
// Parâmetro é um valor que a função recebe para executar a ação

// Ou seja, antes de comprar pão você precisa de dinheiro.
// Vamos imaginar que o valor que você recebeu foi de 1 real

// Nosso parâmetro agora é 1 real.



// ---- Retorno ----
// Quando você for comprar pão é de se esperar que você retorne com alguma coisa
// Exatamente, com o pão

// Nosso retorno agora é voltar com o pão.


// Temos uma função completa agora com a:

/*
- Chamada (Ir comprar pão, seja por uma ordem ou automação)
- Parâmetro (1 real)
- Ação (ir até a padaria "com 1 real")
- Retorno (Voltar com o pão)
*/



// IMPORTANTE!!!
// Quando usamos um parâmetro, a função é ignorada até que o valor do parâmetro seja dado.
// Lembra que nosso parâmetro era 1 real?
// Ou seja, se você não tiver dinheiro você não vai na Padoka
// Não faz sentido ir comprar pão sem dinheiro
// Em JavaScript, primeiro fazemos a função, depois determinamos o parâmetro
// Ou seja, escrevemos a função e fazemos a chamada com o parâmetro depois



// Mas como ficaria a isso tudo em JavaScript em linhas de código
// Ficaria mais ou menos assim:

function comprarPaoNaPadoka(dinheiro) {             
    var valorDoPao = 0.5 // 50 centavos

    console.log("Vou comprar pão na Padoka!")

    if (dinheiro > valorDoPao) {
        return "Voltei com o pão!"
    }
    else {
        return "Não voltei com o pão."
    }

}

var resultadoDaMinhaIda = comprarPaoNaPadoka(1)
console.log(resultadoDaMinhaIda)



// ---- Traduzindo o código ----
/*

função compararPaoNaPadoka(dinheiro) {
    O valor do pão é de 50 centavos

    Vou comprar pão na Padoka

    se dinheiro for maior que o valor do pão (50 centavos) {
        retorne "Voltei com o pão!"
    }
    senão {
        retorne "Não voltei com o pão."
    }

}

O resultado da minha ida vai receber o que estiver em comprarPaoNaPadoka(1 real)
escreva na tela o resultado da minha ida.

*/



// perceba que na função está escrito "comprarPaoNaPadoka(dinheiro)"
// Como assim dinheiro? Não era 1 real?
// Lambra da mensagem inportante, onde disse que a função era ignorada até receber o parâmetro?
// Determinamos o valor de 1 real logo depois da função com:

// var resultadoDaMinhaIda = comprarPaoNaPadoka(1) 
// Ao invés de comprarPaoNaPadoka(dinheiro), dinheiro recebeu 1

// ou traduzido

//O resultado da minha ida vai receber o que estiver em comprarPaoNaPadoka(1 real)
// Ao invés de comprarPaoNaPadoka(dinheiro), dinheiro recebeu 1 real

// e por fim executou trocando dinheiro por 1 real 
// assim!

/*

function comprarPaoNaPadoka(1 real) {             
    var valorDoPao = 0.5

    console.log("Vou comprar pão na Padoka!")

    if (1 real > 50 centavos) {
        return "Voltei com o pão!"
    }
    else {
        return "Não voltei com o pão."
    }

}

*/

