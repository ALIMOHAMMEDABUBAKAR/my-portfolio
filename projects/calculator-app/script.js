const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

// Update display
function updateDisplay() {
    display.value = currentInput;
}

// Check if last character is operator
function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

// Add input safely
function addInput(value) {
    const lastChar = currentInput.slice(-1);

    // Prevent starting with operator except "-"
    if (currentInput === "" && isOperator(value) && value !== "-") {
        return;
    }

    // Prevent two operators together
    // Allow ( and ) without blocking
    if (isOperator(lastChar) && isOperator(value) && value !== "(" && value !== ")") {
    return;
    }

    // Prevent multiple dots in a number
    if (value === ".") {
        // Split by operators and check last number
        const parts = currentInput.split(/[\+\-\*\/]/);
        const lastNumber = parts[parts.length - 1];

        if (lastNumber.includes(".")) {
            return;
        }
    }

    currentInput += value;
    updateDisplay();
}

// Calculate result safely
function calculate() {
    try {
        // Prevent ending with operator
        if (isOperator(currentInput.slice(-1))) {
            return;
        }

        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
}

// Button click support
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            updateDisplay();
        }

        else if (value === "DEL") {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }

        else if (value === "=") {
            calculate();
        }

        else {
            addInput(value);
        }
    });
});


// KEYBOARD SUPPORT
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === ".".||
        key === "(" ||
        key === ")"
    ) {
        addInput(key);
    }

    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    else if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }

    else if (key === "Escape") {
        currentInput = "";
        updateDisplay();
    }
});