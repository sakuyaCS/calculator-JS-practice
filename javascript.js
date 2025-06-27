let operator = "";
let a = "";
let b = "";




function add(a, b) {
  return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function operate(a, b, operator) {

    let result = 0;
    let operationResult;


    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    if (Number.isNaN(num1) || Number.isNaN(num2)) return "0";

    if (operator === "+") {
       operationResult = add(num1, num2);
       result += operationResult; 
    } else if (operator === "-") {
        operationResult = subtract(num1, num2);
        result += operationResult;
    } else if (operator === "*") {
        operationResult = multiply(num1, num2);
        result += operationResult;
    } else if (operator === "/" || operator === "÷") {
        operationResult = divide(num1, num2);
        result += operationResult;
    }

    return result;


}

let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => 
    button.addEventListener('click', () => {
        const buttonType = button.dataset.type;
        const buttonValue = button.value;

        if (buttonType === 'number') {
            if (operator === "") {
                a += buttonValue;
                display.textContent = a;
            } 
            else {
                b += buttonValue;
                display.textContent = b;
            }
        }
      

        if (buttonType === 'operator') {
            if (a !== "" && b !== "") {
                let result = operate(a, b, operator);
                a = result.toString();
                b = "";
                display.textContent = a;
            }
            operator = buttonValue;
        }

        if (buttonType === 'equals') {
            if (a !== "" && b !== "" && operator !== ""){
                let result = operate(a, b, operator);

                display.textContent = result;

                a = result.toString();

                b = "";

                operator = "";
            }
        }

        if (buttonType === 'clear') {
            a = "";
            b = "";
            operator = "";
            display.textContent = "0";
            
        }

        if (buttonType === 'backspace') {
            if (b !== "") {
                b = b.slice(0, -1);
                    display.textContent = b || "0";
            } else if (a !== "") {
                a = a.slice(0, -1);
                display.textContent = a || "0";
            }
        }
    })
);


window.addEventListener('keydown', (event) => { 

    const key = event.key;
    let button;

    if (key >= 0 && key <= 9 || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        button = document.querySelector(`button[value="${key}"]`);
    } else if (key === 'Enter' || key === '=') {
        button = document.querySelector(`button[value="="]`); 
    } else if (key === 'Backspace') {
        button = document.querySelector(`button[value="backspace"]`);
    } else if (key === 'Escape') {
        button = document.querySelector(`button[value="clear"]`);
    }

    if (button) {
        event.preventDefault();
        button.click();
    }

});


