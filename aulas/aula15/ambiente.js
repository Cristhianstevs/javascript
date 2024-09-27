let num = [3, 5, 5, 2, 6, 3, 8]
//  num = [0, 1, 2, 3, 4, 5, 6] // Indices ou chaves

num[3] = 4 // Chave 3 recebe 4
num[7] = 9 // Chave 7 é criada e recebe 9 
num.sort()
num.push(10) // push cria um indice no final e recebe 10

// num.length // Diz a quantidade de chaves

let positionVetor = num.indexOf(3)
console.log(`O valor 3 está na posição ${positionVetor}`)
console.log(`Nosso vetor é ${num}`)