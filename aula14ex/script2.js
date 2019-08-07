function contar(){

    var ini = document.getElementById('inicio')
    var fi = document.getElementById('fim')
    var pa = document.getElementById('passo')
    var res = document.getElementById('res')
    var i = Number(ini.value)
    var f = Number(fi.value)
    var p = Number(pa.value)
    
    if(ini.value.length == 0 || fi.value.length == 0 || pa.value.length == 0 ){
        window.alert('[ERROR]impossivel contar')
        res.innerHTML = 'Impossivel contar'
    }
    if(p <= 0){
        window.alert('passo invalido! considerando passo 1')
        p = 1
    }
    res.innerHTML = 'contando.. <br/>'
    if(i < f){
        

        for(c = i; c <= f ;c+=p){
        
                res.innerText +=  c + ` \u{1F449}`
        }
    }else{
        for(c = i; c >= f ; c-=p){
            res.innerHTML += c + `\u{1F449}`
        }
    }
       
    res.innerHTML += `\u{1F3C1}`
    
    

    

       

}