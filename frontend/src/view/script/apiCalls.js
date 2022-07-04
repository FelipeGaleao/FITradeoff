const HOST = 'localhost'
const PORT = 3000
const URI = `${HOST}:${PORT}`

let firstNumber = 0
let secondNumber = 0

function getNumberInputs(){
    firstNumber = Number(document.querySelector('input#primeiraEntrada').value)
    secondNumber = Number(document.querySelector('input#segundaEntrada').value)
}

function setOperationResult(numResult){
    let result = !Number(numResult) ? 'Ocorreu um erro!' : Number(numResult)
    document.querySelector('span#resultado').innerHTML = result
}

function callSomarOnAPI(){
    getNumberInputs()

    let headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            firstNumber: firstNumber,
            secondNumber: secondNumber
        })
    }

    fetch(`${URI}/somar`, headers)
    .then(response => response.json())
    .then(json => {
        setOperationResult(json.result)
    })
    .catch(error => console.log(`Houve um erro ao tentar acessar ${URI}/somar, verifique se o endereço está correto. Mensagem de erro: ${error.message}`))
}

function callSubtrairOnAPI(){
    getNumberInputs()

    let headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            firstNumber: firstNumber,
            secondNumber: secondNumber
        })
    }

    fetch(`${URI}/subtrair`, headers)
    .then(response => response.json())
    .then(json => {
        setOperationResult(json.result)
    })
    .catch(error => console.log(`Houve um erro ao tentar acessar ${URI}/subtrair, verifique se o endereço está correto. Mensagem de erro: ${error.message}`))
}

function callMultiplicarOnAPI(){
    getNumberInputs()

    let headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            firstNumber: firstNumber,
            secondNumber: secondNumber
        })
    }

    fetch(`${URI}/multiplicar`, headers)
    .then(response => response.json())
    .then(json => {
        setOperationResult(json.result)
    })
    .catch(error => console.log(`Houve um erro ao tentar acessar ${URI}/multiplicar, verifique se o endereço está correto. Mensagem de erro: ${error.message}`))
}

function callDividirOnAPI(){
    getNumberInputs()

    let headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            firstNumber: firstNumber,
            secondNumber: secondNumber
        })
    }

    fetch(`${URI}/dividir`, headers)
    .then(response => response.json())
    .then(json => {
        setOperationResult(json.result)
    })
    .catch(error => console.log(`Houve um erro ao tentar acessar ${URI}/dividir, verifique se o endereço está correto. Mensagem de erro: ${error.message}`))
}