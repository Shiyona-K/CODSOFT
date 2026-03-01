const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === "0" && value !== ".") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    try {
        if (display.value !== "") {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "Error";
        setTimeout(() => clearDisplay(), 1500);
    }
}