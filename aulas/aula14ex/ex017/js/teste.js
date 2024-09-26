var numeroTabuada = 10
var multiplicador = 1
var resultadoMultiplicação = 0

while (resultadoMultiplicação < numeroTabuada * 10) {
    resultadoMultiplicação = numeroTabuada * multiplicador
    console.log(`${numeroTabuada} * ${multiplicador} = ${resultadoMultiplicação}`)
    multiplicador ++
}