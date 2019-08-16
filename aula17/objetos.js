

let amigos = {nome:'manuel',
sexo:'M',
peso:80.5,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigos.engordar(2)

console.log(amigos.nome+' pesa '+amigos.peso+' kg')