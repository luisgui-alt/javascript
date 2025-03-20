function contar() {
    var res = document.querySelector('div#contagem')
    var inum = document.getElementById('inicio')
    var fnum =  document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var fnum1 = Number(fnum.value)
    var passo1 = Number(passo.value)
    
    if (inum.value.length == 0 || fnum1 == 0 || passo1 == 0) {
        res.innerHTML = ('Impossível contar!')
        alert('uou uou uou verifique se faltam dados')
    }   else {
        res.innerHTML = (`Contando... `)
        var inum1 = Number(inum.value)
        if (passo1 <= 0) {
            alert('Passo inválido, considerando passo = 1')
            passo1 = 1
        }
        if (inum1 < fnum1) {
            // contagem crescente
            for (var c = inum1; c <= fnum1 ; c += passo1) {
                res.innerHTML += (`${c}\u{1F620} `)
            }  
        } else {
            // contagem regressiva
            for(var c = inum1; c >= fnum1; c-= passo1) {
                res.innerHTML += (`${c}\u{1F620} `)
            }
        }
        res.innerHTML += (` \u{1F92C}`)
    }
}