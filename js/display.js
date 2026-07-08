/**
 * Responsible only for UI:
 * updateDisplay()
 * clearDisplay()
 * showError()
 * showResult()
 */
class Display {

    constructor(displayElement) {
        this.displayElement = displayElement;
    }

    update(value) {
        this.displayElement.value = value;
    }

    clear() {
        this.displayElement.value = "";
    }

    showError(message) {
        this.displayElement.value = message;
    }

}