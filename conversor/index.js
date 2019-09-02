



function paradolar(){
    
        let real = document.getElementById('txtbr')
        let res1 = document.getElementById('resdolar')
        let brl = Number(real.value)

        if(real.value.length == 0){
        window.alert('[ERRO]insira um valor para converter')
        }
        else{
        let cal = parseFloat(0)
        let dd = 4.19
        cal = parseFloat(real.value / dd)
        res1.style.color='blue'
        res1.innerHTML =  +cal.toFixed(2)+ ' Dolares &#128181'
        
        }
        
    
    

}

function parareal(){
    let dola = document.getElementById('txtdr')
    let res2 = document.getElementById('resreal')
    let usd = Number(dola.value)

    if( dola.value.length == 0){
        window.alert('[ERRO]insira um valor para converter')
    }
    else{
        let cal2 = parseFloat(0)
        let rr = 4.19
        cal2 = parseFloat(dola.value * rr)
        res2.style.color = 'blue'
        res2.innerHTML = 'BRL&#128178 : ' +cal2.toFixed(2)+ ' Reais &#128181'
    }
}

function relogio(){
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()
    let dia = data.getDate() 
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()

    if(mes < 10){
        mes = "0"+mes
    }
    if (dia < 10){
        dia = "0"+dia
    }

    if( hora < 10){
        hora = "0"+hora
    }
    if(minuto < 10){
        minuto = "0"+minuto
    }
    if(segundo < 10){
        segundo = "0"+segundo
    }
    document.getElementById('relo').innerHTML= 'Data &#128197 '+dia+'/'+mes+'/'+ano+'<br>'
    document.getElementById('relo').innerHTML += 'Horario de brasilia&#9200 '+hora+':'+minuto+':'+segundo
}
window.setInterval("relogio()",1000)
fetch('https://economia.awesomeapi.com.br/all')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let d = document.getElementById('dolar')
        let r = document.getElementById('real')
        
        let drl = parseFloat(0)
        
        let rl = Number(r.value)
        
        d.innerHTML ='Dolar : '+data.USD.high
        r.innerHTML = 'Euro : '+data.EUR.high
        console.log(data)
    })
   