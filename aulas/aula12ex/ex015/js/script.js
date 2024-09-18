function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoDigitado = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (anoDigitado.value.length == 0) {
        window.alert('[Erro] Verifique os dados e tente novamente.')
    }
    else if (Number(anoDigitado.value) > anoAtual) {
        window.alert('Espere até nascer.')
    }
    else {
        var escolhaSexo = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoDigitado.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (escolhaSexo[0].checked) {

            if (idade >= 0 && idade < 6 ) {
                // bebe
                genero = 'Bebe'
                img.setAttribute('src', 'img/m_bebe.png')
            }
            else if (idade < 12) {
                // Criança
                genero = 'Criança'
                img.setAttribute('src', 'img/m_crianca.png')
            }
            else if (idade < 18) {
                // Adolescente
                genero = 'Adolescente'
                img.setAttribute('src', 'img/m_adoles.png')
            }
            else if (idade < 60) {
                // Adulto
                genero = 'Adulto'
                img.setAttribute('src', 'img/m_adulto.png')
            }
            else if (idade < 120) {
                // Velho
                genero = 'Idoso'
                img.setAttribute('src', 'img/m_idoso.png')
            }
            else {
                genero = 'pessoa'
                img.setAttribute('src', 'img/gato_meme_err.png')
            }
        }
        else if (escolhaSexo[1].checked) {
            genero = 'Mulher'
            
            if (idade >= 0 && idade < 6 ) {
                // bebe
                genero = 'Bebe'
                img.setAttribute('src', 'img/f_bebe.png')
            }
            else if (idade < 12) {
                // Criança
                genero = 'Criança'
                img.setAttribute('src', 'img/f_crianca.png')
            }
            else if (idade < 18) {
                // Adolescente
                genero = 'Adolescente'
                img.setAttribute('src', 'img/f_adoles.png')
            }
            else if (idade < 60) {
                // Adulto
                genero = 'Adulto'
                img.setAttribute('src', 'img/f_adulto.png')
            }
            else if (idade < 120) {
                // Velho
                genero = 'Idosa'
                img.setAttribute('src', 'img/f_idoso.png')
            }
            else {
                genero = 'pessoa'
                img.setAttribute('src', 'img/gato_meme_err.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p> Detectamos um(a) ${genero} de ${idade} anos </p>`
        res.appendChild(img)
    }
}

/* SINTAXE */

/* 
 
--- setAttribue --- 

element.setAttribute('atributo', 'valor');

--- appendChild ---

parentNode.appendChild(childNode);


*/ 