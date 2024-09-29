let vetores = [3, 5, 2, 6, 7, 1, 4]
//  vetores = [0, 1, 2, 3, 4, 5, 6] // chaves ou indices

/* 

console.log(votores[0]) == 3
console.log(votores[1]) == 5
console.log(votores[2]) == 2
console.log(votores[3]) == 6
console.log(votores[4]) == 7
console.log(votores[5]) == 1
console.log(votores[6]) == 4


for (positionVetor = 0; positionVetor < vetores.length; positionVetor++) {
    console.log(`A posição ${positionVetor} tem o valor ${vetores[positionVetor]}`)
}

*/

for (positionVetor in vetores) {
    console.log(`A posição ${positionVetor} tem o valor ${vetores[positionVetor]}`)
}