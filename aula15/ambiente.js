var num = [3,1,7,9]

console.log(num)
num[4] = 5
console.log(num)
num.push(6)
console.log(num)
num.sort()
num.length
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
let pos = num.indexOf(0)
if (pos == -1) {
    console.log('valor não encontrado')
} else {
    console.log(`o valor se encontra na ${pos} posição`)
}
