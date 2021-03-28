//variable to receive the client click
let clientClick = []
//variable to receive all calc
let calcValue = []


//mostrar todo o calculo no visor superior
const allCalc = document.querySelector('#visorSuperior')
const lastInput = document.querySelector('#visorInferior')


//teste variables in console
const variablesTeste = () => {
    console.log('clientClick = ',clientClick)
    console.log('calcValue = ',calcValue)
    allCalc.innerText = calcValue.join('')
    lastInput.value = clientClick.join('')
}


//function to add the number clicked in variable clientClick
function numberClick (numberSelected) {
    clientClick.push(Number(numberSelected.value))
    variablesTeste()
}


//function to add the operator clicked and all number in variable calcValue
function operatorClick (operatorSelected) {
    calcValue.push(Number(clientClick.join('')))
    calcValue.push(operatorSelected.value)
    variablesTeste()
    clientClick = []
}

//function to add a dot when button pressed
function dotClick (dot) {
    if (clientClick[clientClick.length - 1] != '.') {
        clientClick.push(dot.value)
    }
    variablesTeste()
}

//function to options C and AC
function clearVariables (clearOption) {
    if (clearOption.value == 'C') {
        clientClick = []
        variablesTeste()
    } else {
        clientClick = []
        calcValue = []
        variablesTeste()
    }
}

//function to show the result
function equals () {
    calcValue.push(Number(clientClick.join('')))
    let result = calcValue.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(result)
    console.log(parseInt(result))
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