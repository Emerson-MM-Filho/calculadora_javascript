//variable to receive the client click
let clientClick = []
//variable to receive all calc
let calcValue = []




//teste variables in console
const variablesTeste = () => {
    console.log(clientClick)
    console.log(calcValue)
}

//function to add the number clicked in variable clientClick
function numberClick (numberSelected) {
    clientClick.push(numberSelected.value)
    variablesTeste()    
}

function equals () {
    calcValue.push(Number(clientClick.join('')))
    clientClick = []
    variablesTeste()
}




document.addEventListener('keydown', function (click) {
    if (click != isNaN) {
        console.log(click.key)
    } else {
        console.log('letra')
    }
})