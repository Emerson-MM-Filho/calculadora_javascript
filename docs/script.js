document.querySelector('#visorInferior').focus()

let inputResultado = document.querySelector('#visorInferior')
let outputResultado = document.querySelector('#visorSuperior')

let calculo = {
    valorSalvo :  null,
    funcaoParaCalcular : null,
    valorTotal : null
}

//Adcionar evento para iniciar quando a janela carregar
window.addEventListener('load', function() {
    atribuirEventos()
})
//Atribuir eventos para os botões da calculadora
function atribuirEventos () {
    //Eventos de numeros
    document.querySelector('#bt-0').addEventListener('click', clicarNumero)
    document.querySelector('#bt-1').addEventListener('click', clicarNumero)
    document.querySelector('#bt-2').addEventListener('click', clicarNumero)
    document.querySelector('#bt-3').addEventListener('click', clicarNumero)
    document.querySelector('#bt-4').addEventListener('click', clicarNumero)
    document.querySelector('#bt-5').addEventListener('click', clicarNumero)
    document.querySelector('#bt-6').addEventListener('click', clicarNumero)
    document.querySelector('#bt-7').addEventListener('click', clicarNumero)
    document.querySelector('#bt-8').addEventListener('click', clicarNumero)
    document.querySelector('#bt-9').addEventListener('click', clicarNumero)
    //Eventos de Operadores
    document.querySelector('#bt-adcao').addEventListener('click', clicarOperador)
    document.querySelector('#bt-subtracao').addEventListener('click', clicarOperador)
    document.querySelector('#bt-divisao').addEventListener('click', clicarOperador)
    document.querySelector('#bt-multiplicacao').addEventListener('click', clicarOperador)
    //Eventos de ações
    document.querySelector('#bt-AC').addEventListener('click', limparDados)
    document.querySelector('#bt-C').addEventListener('click', limparUltimoDado)
    document.querySelector('#bt-igual').addEventListener('click', clicarResultado)
    //Eventos de modificadores
    document.querySelector('#bt-ponto').addEventListener('click', inserirPonto)
}
//Inserir numero no display da calculadora
function clicarNumero(evt) {
    console.log('inputResultado = ' + inputResultado.value)
    console.log('calculo.valorTotal = ' + calculo.valorTotal) 
    if (isNaN(inputResultado.value)) {
       inputResultado.value = evt.target.textContent
       calculo.valorTotal = evt.target.textContent
    } else {
        if (inputResultado.value == '0') {
            inputResultado.value = evt.target.textContent
            calculo.valorTotal = evt.target.textContent 
        } else {
            inputResultado.value += evt.target.textContent
            calculo.valorTotal += evt.target.textContent
        }
    }   
}
//função que atualiza o objeto ao clicar nos operadores
 function clicarOperador () {
    if (!isNaN(inputResultado.value)) {
        if (calculo.valorSalvo == null) {
            calculo.valorSalvo = Number(inputResultado.value)
        } else if (calculo.funcaoParaCalcular != null) {
            calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value))
        }
    }

    let operador = event.target.textContent
    atribuirOperacao(operador)

    outputResultado.value += inputResultado.value + operador

    inputResultado.value = '0'
}
//função que adiciona a operação correta ao objeto calculo
function atribuirOperacao (operador) {
    if (operador=='+') {
        calculo.funcaoParaCalcular = somarValores
    } else if (operador=='-') {
        calculo.funcaoParaCalcular = subtrairValores
    } else if (operador=='*') {
        calculo.funcaoParaCalcular = multiplicarValores
    } else if (operador=='/') {
        calculo.funcaoParaCalcular = dividirValores
    }
}
//função que soma dois valores
function somarValores (valor1, valor2) {
    return valor1 + valor2
}
//função que subtrai o segundo valor do primeiro
function subtrairValores (valor1, valor2) {
    return valor1 - valor2
}
//função que multiplica os valores
function multiplicarValores (valor1, valor2) {
    return valor1 * valor2
}
//função que dividi o primeiro valor pelo o segundo
function dividirValores (valor1, valor2) {
    if (valor2 == 0) {
        return 'Erro, não é possível dividir por zero!'
    } else {
        return valor1 / valor2
    }
}
//limpa todos os dados do input e objeto de calculo
function limparDados () {
    inputResultado.value = ''
    outputResultado.value = ''

    calculo.valorSalvo = null
    calculo.funcaoParaCalcular = null
}
//limpa o ultimo dado do input
function limparUltimoDado() {

}
//insere o ponto
function inserirPonto () {
    //verifica se ja existe algum valor inserido ou se não é um numero que foi inserido (operador)
    if (inputResultado.value ==='' || isNaN(inputResultado.value)) {
        inputResultado.value = '0.'
        //isNaN(valor)
        //se não é numero : true
        //se é numero : false
    } else if (!inputResultado.value.includes('.')){
        inputResultado.value += '.'
    }
}
//calcula o resultado
function clicarResultado() {
    if (!isNaN(inputResultado.value && calculo.funcaoParaCalcular != null)) {
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value))

        inputResultado.value = resultado

        calculo.funcaoParaCalcular = null
        calculo.valorSalvo = resultado
        calculo.valorTotal = null
    }
    outputResultado.value = ''
}