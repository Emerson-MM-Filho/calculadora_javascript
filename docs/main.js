let htmlInput = document.querySelector('#visorInferior')
let htmlOutput = document.querySelector('#visorSuperior')
htmlInput.focus()

//is a variable to receive the number clicked on the html
let clientInput = ''
let fullCalc = []


//is a function to show all in html
const showAll = () => {
    htmlInput.value = clientInput
    htmlOutput.innerText = fullCalc.join('')
}


//is a function to add the number clicked
function numberClick (numberCliked) {
    if (numberCliked.value == 0 && clientInput == '') {} else {
        clientInput += numberCliked.value
    }
    showAll()    
}


//is a function to add the dot
function dotClick (dotClicked, findDot) {
    findDot = false
    for (let index = 0; index < htmlInput.value.length; index++) {
        if (htmlInput.value.charAt(index) === dotClicked.value) {
            findDot = true
        }
    }
    if (clientInput == '') {
        clientInput += '0' + dotClicked.value
    } else if (findDot == false) {
        clientInput += dotClicked.value
    }
    showAll()
}


//is a function to clear the last number clicked
function clearVariables (optionSelected) {
    if (optionSelected.value === 'C') {
        clientInput = clientInput.replace(clientInput[clientInput.length -1], '')
    } else if (optionSelected.value === 'AC') {
        clientInput = ''
    }
    showAll()
}


//is a function to take the operator and return the result
function operatorClick (operatorClicked) {
    if (clientInput != '') {
        if (clientInput[clientInput.length -1] == '.') { 
            fullCalc.push(clientInput, '0')
        } else {
            fullCalc.push(clientInput)
        }
    }
    if (!isNaN(fullCalc[fullCalc.length -1])) {
        fullCalc.push(operatorClicked.value)
    } else {
        fullCalc.pop()
        fullCalc.push(operatorClicked.value)
    }
    clientInput = ''
    

    // for (let index = 0; index < fullCalc.length; index++) {
    //     if (fullCalc[index] == isNaN){
    //         num1 = fullCalc[index]
    //         console.log('num1 = ', num1)
    //     }
    // }
    showAll()
}


let num1 = ''
let num2 = ''
let calcOperator = ''
let answer = ''

//is a function to do all calc
function equals () {
    fullCalc.push(clientInput)
    clientInput = ''
    for (let index = 0; index < fullCalc.length; index++) {
        // console.log(fullCalc[index])
        if (num1 === '') {
            num1 = Number(fullCalc[index])
        } else if (calcOperator === '') {
            calcOperator = fullCalc[index]
        } else {
            num2 = Number(fullCalc[index])
        }

        if (num1 != '' && num2 != '' && calcOperator != '') {
            if (calcOperator === "+") {
                answer = num1 + num2
                num1 = answer
                clientInput = answer
                num2 = ''
                calcOperator = ''
                fullCalc = []
            } else if (calcOperator === '-') {
                answer = num1 - num2
                num1 = answer
                clientInput = answer
                num2 = ''
                calcOperator = ''
                fullCalc = []
            } else if (calcOperator === '*') {
                answer = num1 * num2
                num1 = answer
                clientInput = answer
                num2 = ''
                calcOperator = ''
                fullCalc = []
            } else {
                answer = num1 / num2
                num1 = answer
                clientInput = answer
                num2 = ''
                calcOperator = ''
                fullCalc = []
            }
        }
    }

    
    console.log(answer)
    console.log(num1, calcOperator, num2)


    num1 = ''
    calcOperator = ''
    num2 = ''
    showAll()
}