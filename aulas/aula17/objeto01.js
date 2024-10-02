let sobreMim = {
                nome: 'Cristhian',
                sexo: 'Masculino',
                altura: 1.83,
                peso: 89,
                engordar(calcPeso=0) {
                    let novoPeso = this.peso
                    if (calcPeso > 0) {
                        console.log('Engordou')
                        novoPeso += calcPeso
                    }
                    if (calcPeso < 0) {
                        console.log('Emagreceu')
                        novoPeso += calcPeso
                    }
                    return novoPeso
                }
}
let animais = []

let novoPeso = sobreMim.engordar(-20)
console.log(`${sobreMim.nome} é do sexo ${sobreMim.sexo}, tem ${sobreMim.altura} de altura, pesava ${sobreMim.peso}kg, agora pesa ${novoPeso}kg`)

console.log('')
console.log(`A variável sobreMim é um(a) ${typeof sobreMim}`)
console.log(`A variável animais é um(a) ${typeof animais}`) // Array também é um objeto