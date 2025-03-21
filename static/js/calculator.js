let firstNumber = '';
let operator = '';
let secondNumber = '';
let isSecondNumber = false;

function appendNumber(number) {
    if (!isSecondNumber) {
        firstNumber += number;
        document.getElementById('display').value = firstNumber;
    } else {
        secondNumber += number;
        document.getElementById('display').value = `${firstNumber} ${operator} ${secondNumber}`;
    }
}

function appendOperator(op) {
    if (firstNumber && !operator) { // Dodajemy operator tylko jeśli jest pierwsza liczba
        operator = op;
        isSecondNumber = true;
        document.getElementById('display').value = `${firstNumber} ${operator}`;
    }
}

function clearDisplay() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    isSecondNumber = false;
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (firstNumber && operator && secondNumber) {
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);
        let result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "Błąd: Dzielenie przez 0";
                break;
            default:
                result = "Błąd";
        }

        document.getElementById('display').value = result;
        firstNumber = result.toString(); // Wynik staje się nową pierwszą liczbą
        operator = '';
        secondNumber = '';
        isSecondNumber = false;
    }
}

function appendToDisplay(value) {
    if (value === '.') {
        if (!isSecondNumber && !firstNumber.includes('.')) {
            firstNumber += value;
            document.getElementById('display').value = firstNumber;
        } else if (isSecondNumber && !secondNumber.includes('.')) {
            secondNumber += value;
            document.getElementById('display').value = `${firstNumber} ${operator} ${secondNumber}`;
        }
    } else {
        appendNumber(value);
    }
}

function toggleSign() {
    if (!isSecondNumber && firstNumber) {
        firstNumber = firstNumber.startsWith('-') ? firstNumber.substring(1) : '-' + firstNumber;
        document.getElementById('display').value = firstNumber;
    } else if (isSecondNumber && secondNumber) {
        secondNumber = secondNumber.startsWith('-') ? secondNumber.substring(1) : '-' + secondNumber;
        document.getElementById('display').value = `${firstNumber} ${operator} ${secondNumber}`;
    }
}

function calculateSquareRoot() {
    if (!isSecondNumber && firstNumber) {
        let value = parseFloat(firstNumber);
        if (value >= 0) {
            firstNumber = Math.sqrt(value).toString();
            document.getElementById('display').value = firstNumber;
        } else {
            alert("Nie można obliczyć pierwiastka z liczby ujemnej!");
        }
    }
}