let htmlInput = document.querySelector('#visorInferior')
let htmlOutput = document.querySelector('#visorSuperior')
htmlInput.focus()

//is a variable to receive the number clicked on the html
let clientInput = ''
let fullCalc = []
let answer = ''


//is a function to show all in html
const showAll = () => {
    htmlInput.value = clientInput
    htmlOutput.innerText = fullCalc.join('')
}


//is a function to add the number clicked
function numberClick (numberCliked) {
    if (numberCliked.value == 0 && clientInput == '') {} else {
        clientInput += Number(numberCliked.value)
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
        clientInput += 0 + dotClicked.value
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
            fullCalc.push(Number(clientInput), 0)
        } else {
            fullCalc.push(Number(clientInput))
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


//is a function to do all calc
function equals () {
    let result = 0
    fullCalc.push(Number(clientInput))
    //reset the variables
    htmlOutput.innerText = ''
    clientInput = ''
    let priorityOperatorPosition = []
    let genericOperatorPosition = []

    
    console.log(fullCalc)
    //taking the multiplication and division operator position and performing calculations
    for (let index = 0; index < fullCalc.length; index++) {
        if (fullCalc[index] === '*' || fullCalc[index] === '/') {
            priorityOperatorPosition.push(Number(index))
        }  
        console.log(priorityOperatorPosition)
        //performing the priority calculations
        for (let i = 0; i < priorityOperatorPosition.length; i++) {

            //condition for the multiplication operator
            if (fullCalc[priorityOperatorPosition[i]] === '*') {

                result = fullCalc[priorityOperatorPosition[i]-1] * fullCalc[priorityOperatorPosition[i]+1]

                fullCalc.splice(priorityOperatorPosition[i]-1, 3)
                fullCalc.splice(priorityOperatorPosition[i]-1, 0, result)
            }
            //condition for the division operator
            if (fullCalc[priorityOperatorPosition[i]] === '/') {

                result = fullCalc[priorityOperatorPosition[i]-1] / fullCalc[priorityOperatorPosition[i]+1]

                fullCalc.splice(priorityOperatorPosition[i]-1, 3)
                fullCalc.splice(priorityOperatorPosition[i]-1, 0, result)
            }
        }
    }
    console.log(fullCalc)
    console.log(priorityOperatorPosition)
    for (let index = 0; index < fullCalc.length; index++) {
        if (fullCalc[index] === '+' || fullCalc[index] === '-') {
            genericOperatorPosition.push(Number(index))
        }  
        console.log(genericOperatorPosition)
        //performing the generic calculations
        for (let i = 0; i < genericOperatorPosition.length; i++) {
            //condition to do all calculations
            while (fullCalc.length > 1) {
                //condition for the multiplication operator
                if (fullCalc[genericOperatorPosition[i]] === '+') {

                    result = fullCalc[genericOperatorPosition[i]-1] + fullCalc[genericOperatorPosition[i]+1]

                    fullCalc.splice(genericOperatorPosition[i]-1, 3)
                    fullCalc.splice(genericOperatorPosition[i]-1, 0, result)
                }
                //condition for the division operator
                if (fullCalc[genericOperatorPosition[i]] === '-') {

                    result = fullCalc[genericOperatorPosition[i]-1] - fullCalc[genericOperatorPosition[i]+1]

                    fullCalc.splice(genericOperatorPosition[i]-1, 3)
                    fullCalc.splice(genericOperatorPosition[i]-1, 0, result)
                }
            }
        }
    }
    console.log(fullCalc)
    console.log(genericOperatorPosition)
    
    htmlInput.value = result
}