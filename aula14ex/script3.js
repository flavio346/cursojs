function tabuada(){
    var n1 = document.getElementById('txt1')
    var tab = document.getElementById('seltab')
    
    if(n1.value.length == 0){
        window.alert('por favor , digite um numero!')
    }else{
        var n = Number(n1.value)
        var c= 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = n +' x '+c+' = '+n * c
            item.value = tab+c
            tab.appendChild(item)
            c++
        }
    }
    

    
}