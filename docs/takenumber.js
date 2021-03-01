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