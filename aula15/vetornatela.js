var num = [5,87,4,3,46,89,323,6323,87,12,33,4,56,8,9998,75,4,1,35,29]
num.sort()
/*
for (var pos = 0; pos < num.length; pos++) {
    console.log(`${num[pos]} e ${pos}`)
}
*/

for (let pos in num) {
    console.log(`${num[pos]} e ${pos}`)
}