let vetores = [3, 5, 2, 6, 7, 1, 4]

/* 

console.log(votores[0])
console.log(votores[1])
console.log(votores[2])
console.log(votores[3])
console.log(votores[4])
console.log(votores[5])
console.log(votores[6])


for (positionVetor = 0; positionVetor < vetores.length; positionVetor++) {
    console.log(`A posição ${positionVetor} tem o valor ${vetores[positionVetor]}`)
}

*/

console.log(``)

for (positionVetor in vetores) {
    console.log(`A posição ${positionVetor} tem o valor ${vetores[positionVetor]}`)
}