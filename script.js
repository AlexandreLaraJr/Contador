function contar(){
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')

    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('ERRO: Entre com valores em todos os campos.')
    }else{
        res.innerHTML = `A sequencia é: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    
    if(i < f){
        for(let cont = i; cont <= f; cont += p){
            res.style.textAlign = 'center'
            res.innerHTML += `${cont} -> `
        }
        res.innerHTML += `Fim!`
    }else if(i > f){
        for(let cont = i; cont >= f; cont -= p){
            res.innerHTML += `${cont} -> `
        }
        res.innerHTML += `Fim!`
    }else{
        alert('ERRO: O "inicio" é o mesmo valor do "fim".')
    }
    }
}