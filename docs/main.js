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
    console.log('clientInput = ', clientInput)
    console.log('fullCalc = ', fullCalc)
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
        }
    }
    if (!isNaN(fullCalc[fullCalc.length -1])) {//ultimo elemento ser numero
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