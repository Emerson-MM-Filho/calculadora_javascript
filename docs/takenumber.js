let clientInput = []

const variablesTeste = () => {
    console.log(clientInput)
}

function numberClick (numberSelected) {
    clientInput.push(Number(numberSelected.value))
    variablesTeste()
}