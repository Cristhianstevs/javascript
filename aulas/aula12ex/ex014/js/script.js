function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 0
    
    if (hora >= 6 && hora < 12) {
        var acenar = 'Bom dia!'
        img.src = 'img/montanha_manha_pq.png'
            msg.innerHTML = `<p> ${acenar} Agora são ${hora} horas. </p>`
    }
    else if (hora >= 12 && hora < 19) {
        var acenar = 'Boa tarde!'
        img.src = 'img/montanha_tarde_pq.png'
        document.body.style.backgroundColor = '#a66943'
            msg.innerHTML = `<p> ${acenar} Agora são ${hora} horas. </p>`
    }
    else if (hora >= 24) {
        msg.innerHTML = `<p> ${hora} horas não existe </p>`
        img.src = 'img/gato_meme_err.png'
        document.body.style.backgroundColor = '#909090'
    }
    else {
        var acenar = 'Boa noite!'
        img.src = 'img/montanha_noite_pq.png'
        document.body.style.backgroundColor = '#252a2b'
            msg.innerHTML = `<p> ${acenar} Agora são ${hora} horas. </p>`
    }

}