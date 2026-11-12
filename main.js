

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

function fn5(alt, larg){

    console.log((alt * larg) + " cm²")
}

function fn6(n1){

    for(; n1 >= 0; n1--){
        console.log(n1)
    }
        
}

function fn7(salario){

    if(salario < 1000){
        salario = salario + (salario * 0.20)
        console.log("Seu novo salario é: " + salario)
    }
    if(salario >= 1000 && salario <= 2000 ){
        salario = salario + (salario * 0.15)
        console.log("Seu novo salario é: " + salario)
    }
     if(salario > 2000){
        salario = salario + (salario * 0.10)
        console.log("Seu novo salario é: " + salario)
     }
}

function fn8(n1){
   if(n1 % 2 === 0){
    console.log("O numero " + n1 + " é PAR");
   }else{
    console.log("O numero " + n1 + " é IMPAR");
   }
}

function fn9(temp,type){
    
    if(type == "f"){
        temp = (temp * 1.8) + 32
        console.log("A converção para Fahrenheit é: " + temp)
    }
    if(type == "c"){
        temp = (temp - 32) * (5 / 9)
        console.log("A converção para Celsius é: " + temp)
    }
}