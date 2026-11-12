
//01
function fnMedia(nome, n1, n2, n3){

var media = ((n1 + n2 + n3) / 3)

    if(media >= 7){
        console.log("O aluno " + nome + " esta aprovado!!!")

    }else{
        console.log("O aluno " + nome + " esta reprovado!!!")
    }
}

//02
function fnDiferençaNumero(n1, n2){

    var resultado = 0
    if(n1 > n2){
        resultado = n1 - n2
        console.log("A diferença entre os numeros é: " + resultado)
    }else if(n2 > n1){
        resultado = n2 - n1
        console.log("A diferença entre os numeros é: " + resultado)
    }
}

//03
function fnTabuada(n1){

for(let contador = 0; contador <= 10; contador++)
    
console.log(n1 + " x " + contador + " = " + (n1 * contador))
}

//04
function fnFaixaEtaria(idd){

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

//05
function fnAreaRetangulo(alt, larg){

    console.log((alt * larg) + " cm²")
}

//06
function fnContagemRegressiva(n1){

    for(; n1 >= 0; n1--){
        console.log(n1)
    }
        
}

//07
function fnAumentoSalario(salario){

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

//08
function fnImparPar(num){
   if(num % 2 === 0){
    console.log("O numero " + num + " é PAR");
   }else{
    console.log("O numero " + num + " é IMPAR");
   }
}

//09
function fnConversorTemperatura(temp,type){
    
    if(type == "f"){
        temp = (temp * 1.8) + 32
        console.log("A converção para Fahrenheit é: " + temp)
    }
    if(type == "c"){
        temp = (temp - 32) * (5 / 9)
        console.log("A converção para Celsius é: " + temp)
    }
}

//10
function fnTipoTriangulo(lado1,lado2,lado3){

    if(lado1 == lado2 && lado1 == lado3){
        console.log("O triangulo é EQUILATERO")
    }
    if((lado1 == lado2 || lado1 == lado3 || lado2 == lado3) && (lado1 != lado2 || lado1 != lado3 || lado2 != lado3)){
        console.log("O triangulo é ISOCELES")
    }
    if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        console.log("O triangulo é ESCALENO")
    }
}

//11
function fnContador(numero){
    let valorSomado = 0, contador = 0

    if(numero <= 0){
        console.log("digite um valor maior que zero")
        return false
    }

    while (contador <= numero){
        valorSomado = contador + valorSomado
        contador++
    }
    console.log(valorSomado)
}