let currentInput = ''; // To track the current number input
let operator = null;  // To store the current operator
let previousValue = null; // To store the previous value

// Function to append a number to the display
function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Function to set an operator
function setOperator(op) {
    if (currentInput === '') return; // Ignore if no input
    if (previousValue === null) {
        previousValue = parseFloat(currentInput);
    } else {
        previousValue = calculateResult();
    }
    operator = op;
    currentInput = ''; // Clear the current input
}

// Function to calculate the result
function calculate() {
    if (currentInput === '' || operator === null) return; // Ignore if invalid
    const result = calculateResult();
    updateDisplay(result);
    previousValue = result; // Store the result for further calculations
    operator = null;
    currentInput = ''; // Reset current input
}

// Perform the calculation
function calculateResult() {
    const currentValue = parseFloat(currentInput);
    switch (operator) {
        case '+':
            return previousValue + currentValue;
        case '-':
            return previousValue - currentValue;
        case '*':
            return previousValue * currentValue;
        case '/':
            return previousValue / currentValue;
        case '%':
            return previousValue % currentValue;
        default:
            return currentValue;
    }
}

// Function to clear the display and reset the calculator
function clearDisplay() {
    currentInput = '';
    operator = null;
    previousValue = null;
    updateDisplay(0);
}

// Function to convert cm to inches
function convertCmToInch() {
    if (currentInput === '') return; // Ignore if no input
    const cm = parseFloat(currentInput);
    const inches = cm / 2.54; // Conversion formula
    updateDisplay(inches.toFixed(2)); // Display result with 2 decimals
    currentInput = ''; // Reset current input
}

// Function to update the display
function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value;
}
document.addEventListener("DOMContentLoaded", () => {
    const introVideo = document.getElementById("intro-video");
    const loadingScreen = document.getElementById("loading-screen");

    // מאזין לסיום הסרטון
    introVideo.addEventListener("ended", () => {
        if (loadingScreen) {
            loadingScreen.style.opacity = 0;
            setTimeout(() => {
                loadingScreen.style.display = "none";
                document.body.classList.remove("loading");
                if (loadingAudio) {
                    loadingAudio.pause(); // מפסיק את השמע
                    loadingAudio.currentTime = 0; // מאפס את השמע
                }
            }, 500);
        }
    });
});
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 4500); // 4 שניות
};