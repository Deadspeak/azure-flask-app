let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        document.getElementById('display').value = 'Błąd';
    }
}

function appendToDisplay(value) {
    let display = document.getElementById('display');

    // Nie pozwala na dodanie drugiej kropki w tej samej liczbie
    if (value === '.' && display.value.includes('.')) {
        return;
    }

    display.value += value;
}

// Zmienia znak liczby na +/-
function toggleSign() {
    let display = document.getElementById('display');
    if (display.value) {
        display.value = display.value.startsWith('-') ? display.value.substring(1) : '-' + display.value;
    }
}

// Oblicza pierwiastek kwadratowy
function calculateSquareRoot() {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    if (value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        alert("Nie można obliczyć pierwiastka z liczby ujemnej!");
    }
}
