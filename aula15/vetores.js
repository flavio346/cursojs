let num = [2,7,5,10,15]
num.push(0)
num.sort()
console.log(num.length)
// forma treadicional de pecorrer um vetor
/*for(let c = 0;c < num.length;c++){
    console.log('A posiçao '+c+' tem o valor '+num[c])
}*/

// forma mais facil
for(let c in num){
    
    console.log('A Posiçao '+c+' tem o valor '+num[c])
}
console.log('--------------------------------------------')
let pos = num.indexOf(2)
if (pos == -1){
    console.log('valor nao foi encontrado!!')

}else{
    console.log('o valor esta na posiçao '+pos)
}
