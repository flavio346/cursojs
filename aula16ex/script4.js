
let num = document.getElementById('txt1')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = 'valor '+num.value+' adicionado'
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('valor invalido ou ja esta na lista')
    }
    //limpar o campo de entrada do input para cursor voltar a piscar
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else{
        let tot = valores.length
        let maior = Math.max.apply(Math,valores)
        let menor = Math.min.apply(Math,valores)
        let soma = 0
        let media = 0
        for( let pos in valores){
            soma += valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += 'Ao todo temos '+ tot+ ' numeros cadastrados.<br>'
        res.innerHTML += 'Maior Numero da lista   '+maior+'<br>'
        res.innerHTML += 'Menor numero da lista '+menor+'<br>'
        res.innerHTML += 'A soma de todos numeros sao '+ soma+'<br>'
        res.innerHTML += 'A media dos numeros da lista é '+media
        
    }
}

