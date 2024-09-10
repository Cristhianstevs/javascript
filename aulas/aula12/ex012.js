var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)

if (hora >= 5 && hora < 12) {
    console.log('Bom dia!')
}
else if (hora >= 12 && hora < 19) {
    console.log('Boa tarde!')
}
else if (hora >= 19 && hora < 22) {
    console.log('Boa noite!')
}
else if (hora > 24) {
    console.log('Esse horário não existe...')
}
else {
    console.log('Você deveria ir dormir...')
}