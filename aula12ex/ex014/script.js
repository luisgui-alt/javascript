var data = new Date()
var hora = data.getHours()

function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
msg.innerHTML = `São exatamente ${hora} horas`
    if (hora <= 11) {
        //Bom dia
        img.src = 'imagens/dia.png'
        document.body.style.background = 'rgb(196, 196, 15)'
    } else if (hora <= 17) {
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'rgb(211, 135, 21)'
    } else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = 'black'
    }
}