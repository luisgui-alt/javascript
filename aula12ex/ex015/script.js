var botao = document.getElementById('botao')
botao.addEventListener('click', presumir)

function presumir() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value >= ano) {
        window.alert('Uou uouo')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 15) {
                //Criança
                img.setAttribute('src','imagens/bebemas.png')
            }   else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemmas.png')
            }   else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adultomas.png')
            }   else if (idade > 50) {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 15) {
                //Criança
                img.setAttribute('src', 'imagens/bebefem.png')
            }   else if (idade > 15 && idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemfem.png')
            }   else if (idade > 21 && idade <= 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adultofem.png')
            }   else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}