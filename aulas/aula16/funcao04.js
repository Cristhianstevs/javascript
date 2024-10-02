function fatorial(n) {
    let fat = 1
    while (n > 1) {
        fat *= n
        n--
    }
    return fat
}

var recebeu = fatorial(5)
console.log(recebeu)


// 5! = 5 x 4 x 3 x 2 x 1