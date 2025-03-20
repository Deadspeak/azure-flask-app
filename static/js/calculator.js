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
    let display = document.getElementById('display');
    display.value = '';
    currentInput = ''; // Resetujemy stan
}



function calculateResult() {
    let display = document.getElementById('display');
    try {
        // Przekształcamy tekst na liczbę i wykonujemy obliczenia
        display.value = eval(currentInput);
        currentInput = display.value; // Ustaw wynik jako nową "obecną liczbę"
    } catch (e) {
        display.value = "Błąd"; // Obsługuje błędy, np. dzielenie przez 0
        currentInput = ""; // Resetuje obecny stan
    }
}

// Funkcja dodająca wartości do wyświetlacza
function appendToDisplay(value) {
    let display = document.getElementById('display');

    // Jeśli kliknięto kropkę
    if (value === '.') {
        // Jeśli kropka już jest w liczbie, nie dodawaj jej ponownie
        if (currentInput.includes('.')) {
            return;
        }
        currentInput += value; // Dodaj kropkę do liczby
    } else {
        currentInput += value; // Dodaj cyfrę do liczby
    }
    display.value = currentInput; // Zaktualizuj wyświetlacz
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
