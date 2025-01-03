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


operate(5, "+", 2);