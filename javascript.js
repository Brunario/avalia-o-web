function subtrairdivisao(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var resultadoDivisao = numero1 / numero2
    var teste = document.getElementById("resultadoDivisao")
    teste.innerHTML=resultadoDivisao
    if((numero2==0)){
        alert("seu numero não pode ser 0, digite outro")
    }
}

function notanumeros(){
    var nota1 = parseInt(document.getElementById("num3").value);
    var nota1alterado = parseInt(nota1)
    var nota2 = parseInt(document.getElementById("num4").value);
    var nota2alterado = parseInt(nota2)
    var nota3 = parseInt(document.getElementById("num5").value);
    var nota3alterado = parseInt(nota3)
    var nota4 = parseInt(document.getElementById("num6").value);
    var nota4alterado = parseInt(nota4)

    var resultado = (nota1alterado+nota2alterado+nota3alterado+nota4alterado)/4
    if(resultado>6){
        alert("o aluno foi aprovado com: "+resultado)
    }

    else{
        alert("o aluno foi reprovado com: "+resultado)
    }
}

function abcNumeros(){
    var numero3 = document.getElementById("num7").value
    var numero3alterado = parseInt(numero3)
    var numero4 = document.getElementById("num8").value
    var numero4alterado = parseInt(numero4)
    var numero5 = document.getElementById("num9").value
    var numero5alterado = parseInt(numero5)
    var resultado = numero3alterado+numero4alterado

    if(numero5alterado<resultado){
        alert(resultado+ "É maior que "+numero5alterado)
    }

    else{
        alert(resultado+ "É menor que "+numero5alterado)
    }
}

function retangulo(){
    var numero6 =parseInt(document.getElementById("num10").value)
    var numero7 =parseInt(document.getElementById("num11").value)
    var resultado = numero6 * numero7
    var teste = document.getElementById("resultadoRetangulo")
    teste.innerHTML=resultado

}

function salario(){
    var numero15 =parseInt(document.getElementById("num15").value)
    var numero16 =parseInt(document.getElementById("num16").value)
    var resultado = numero15*(numero16/100)+numero15
    var teste = document.getElementById("resultadosalario")
    teste.innerHTML=resultado
}

function programaNum(){
    var numero8 = parseInt(document.getElementById("num12").value)
    var numero8alterado = parseInt(numero8)
    var resultado = numero8alterado
    if(resultado>10){
        alert("É maior que 10: ")
    }

    else{
        alert("É menor que 10: ")
    }
}

