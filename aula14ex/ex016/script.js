var res = document.querySelector('div#contagem')

function clicar() {
    var inum = document.getElementsById('inicio')
    var fnum =  document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var inum1 = Number(inum.value)
    var fnum1 = Number(fnum.value)
    var passo1 = Number(passo.value)
    
    if (inum1 == 0 || fnum1 == 0 || passo1 == 0)
        res.innerHTML = ('uiui')
}