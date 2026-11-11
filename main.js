

function fn1(nome, n1, n2, n3){

var media = ((n1 + n2 + n3) / 3)

    if(media >= 7){
        console.log("O aluno " + nome + " esta aprovado!!!")

    }else{
        console.log("O aluno " + nome + " esta reprovado!!!")
    }
}


function fn2(n1, n2){

    var resultado = 0
    if(n1 > n2){
        resultado = n1 - n2
        console.log("A diferença entre os numeros é: " + resultado)
    }else if(n2 > n1){
        resultado = n2 - n1
        console.log("A diferença entre os numeros é: " + resultado)
    }
}

function fn3(n1){

for(let contador = 0; contador <= 10; contador++)
    
console.log(n1 + " x " + contador + " = " + (n1 * contador))
}

function fn4(idd){

    if(idd < 12){
        console.log("É uma criança")

    }else if(idd >= 12 && idd <= 17 ){
        console.log("É um adolecente")

    }else if(idd >= 18 && idd <= 59){
        console.log("É um adulto")
        
    }else if(idd >= 60){
        console.log("É um idoso")
    }
}

function fn5(){}