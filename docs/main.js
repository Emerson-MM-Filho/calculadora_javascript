//variable to receive the client click
let clientClick = []
//variable to receive all calc
let calcPreview = []



let index = 0
let num1 = 0
let firstNumber = ''
let secondNumber = ''
let operator = ''
let lastResult = ''



//mostrar todo o calculo no visor superior
const allCalc = document.querySelector('#visorSuperior')
const lastInput = document.querySelector('#visorInferior')


//teste variables in console
const variablesTeste = () => {
    console.log('clientClick = ',clientClick)
    console.log('calcPreview = ',calcPreview)
    console.log('firstNumber = ',firstNumber)
    console.log('secondNumber = ',secondNumber)
    console.log('operator = ',operator)
    allCalc.innerText = calcPreview.join('')
    lastInput.value = clientClick.join('')
    console.log('-------------------')
}

//functions of operator
const answer = () => {
    if (operator === '+') {
        return firstNumber + secondNumber

    } else if (operator === '-') {
        return firstNumber - secondNumber

    } else if (operator === '*') {
        return firstNumber * secondNumber

    } else if (operator === '/') {
        return firstNumber / secondNumber
    }   
}

//function to add the number clicked in variable clientClick
function numberClick (numberSelected) {
    clientClick.push(Number(numberSelected.value))
    variablesTeste()
}

//function to add a dot when button pressed
function dotClick (dot) {
    if (clientClick[clientClick.length - 1] != '.') {
        clientClick.push(dot.value)
    }
    variablesTeste()
}

//function to add the operator clicked and all number in variable calcPreview
function operatorClick (operatorSelected) {
    operator = operatorSelected.value 
    calcPreview.push(...clientClick, operator)
    if (lastResult != '') {
        firstNumber = lastResult
        secondNumber = Number(clientClick.join(''))
        let result = answer()
        lastResult = result
    } else if (firstNumber === '') {
        firstNumber = Number(clientClick.join(''))
    } else {
        secondNumber = Number(clientClick.join(''))
        let result = answer()
        lastResult = result
    }
    clientClick = []
    console.log('lastResult = ', lastResult)
    console.log('firstNumber = ',firstNumber)
    console.log('secondNumber = ',secondNumber)
    console.log('operator = ',operator)
}

//function to options C and AC
function clearVariables (clearOption) {
    if (clearOption.value == 'C') {
        clientClick = []
        variablesTeste()
    } else {
        clientClick = []
        calcPreview = []
        variablesTeste()
    }
}

//function to show the result
function equals () {
    if (lastResult != '') {
        firstNumber = lastResult
        secondNumber = Number(clientClick.join(''))
        let result = answer()
        lastResult = result
    } else if (firstNumber === '') {
        firstNumber = Number(clientClick.join(''))
    } else {
        secondNumber = Number(clientClick.join(''))
        let result = answer()
        lastResult = result
    }





    console.log('resultado final = ', lastResult)
}

//taking the key press on keyboard and add function
document.addEventListener('keypress', function (click) {

    // if (click.key >= 0) {
    //     numberClick(click.key)
    // } else if (click.key == '.' || click.key == ',') {
    //     dotClick(click.key)
    // } else if (click.key == '+' || click.key == '-' || click.key == '*' || click.key == '/') {
    //     operatorClick(click.key)
    // }
})