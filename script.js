function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if(ini.value.length == 0){
    alert('[ERRO] - FALTA INICIO!')
    }else if(fim.value.length == 0){
    alert('[ERRO] - FALTA FIM!')
    }else if(passo.value.length == 0){
    alert('[ERRO] - FALTA PASSO!')    
    }else{
        alert('Todos campos preenchidos!')
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
            // Contagem crescente
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `O numero é ${c} \u{1F449}<br>`
            }
            
        }else{
            // Contagem decrescente
            for(let c = i; c>= f; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }
}