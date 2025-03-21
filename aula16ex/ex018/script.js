var num = document.getElementById('inum')
var lista = document.getElementById('selnum')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if (Number(n) > 0 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function inserir() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item =  document.createElement('option')
        item.text = `número ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já presente na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar () {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>` 
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma total de todos os valores é de ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é de ${media}.</p>`
    }
}