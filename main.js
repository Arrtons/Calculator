function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, ope, num2) {
    const operations = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide,
    }
    const operation = operations[ope];
    return operation(num1, num2); 
}
    
let firstNum;
let operator;
let secondNum;



const calculator = document.querySelector('.calculator-case');
calculator.addEventListener('click', clickedButton);

function clickedButton(e) {
    let value = e.target.textContent;
    if (/^[0-9]$/.test(value)) {
        clickedNumber(value);
    }
    else if (value === '.') {

    }
    else if (value === 'A/C'){
        firstNum = undefined;
        operator = undefined;
        secondNum = undefined;
        console.log(firstNum);
        console.log(operator);
        console.log(secondNum);
        
    }
    else if (value === '=') {
        
        console.log(operate(Number(firstNum), operator, Number(secondNum)));
        firstNum = operate(Number(firstNum), operator, Number(secondNum));
        secondNum = undefined;
        operator = undefined;
        
    }
    else if (secondNum === undefined) {
        operator =  value === '+' ? '+':
                    value === "-" ? '-':
                    value === "X" ? '*':
                    '/';
        console.log(operator);
    }
    
    
    
}

function clickedNumber(value) {
    if (operator === undefined) {
        firstNum === undefined ? firstNum = value : firstNum += value;
        
        console.log("first num:" + firstNum);
    }
    else {
        secondNum === undefined ? secondNum = value : secondNum += value;
        console.log("second num:" + secondNum);
    }

};