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
    return (num1 / num2).toFixed(8);
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


const screen = document.querySelector('.screen');




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
        firstNum = operator = secondNum = undefined; 
        screen.textContent = '0'; 
    }
    else if (value === '=') {
        clickedEqual(value);
    }
    else if ((secondNum === undefined) && ['+', '-', 'X', '÷'].includes(value)) {
        clickedOperator(value);
    }
}



function clickedNumber(value) {
    if (operator === undefined) {
        if (firstNum === undefined) {
            firstNum = value;
        }
        else {
            firstNum += value;
        }
        screen.textContent = firstNum; 
        
    }
    else {
        if (secondNum === undefined) {
            secondNum = value;
        }
        else {
            secondNum += value;
        }
        screen.textContent = firstNum + " " + operator + " " + secondNum;
        
    }
        
};



function clickedEqual(value) {
    if (!(firstNum === undefined || secondNum === undefined || operator === undefined)) {
        screen.textContent = operate(Number(firstNum), operator, Number(secondNum));
        firstNum = operate(Number(firstNum), operator, Number(secondNum));
        secondNum = undefined;
        operator = undefined;
    }
    return
}
function clickedOperator(value) {
    operator =  value === '+' ? '+':
                value === "-" ? '-':
                value === "X" ? '*':
                '/';
    screen.textContent = firstNum + " " + operator;
}