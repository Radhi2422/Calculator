/**
 * Maps keyboard keys:
 * 1,
 * 2,
 * +,-..
 * Enter, escape, backscape
 */

class Keyboard {

    constructor(app) {
        this.app = app;
    }

    initialize() {

        document.addEventListener("keydown", (event) => {

            const key = event.key;

            if (!isNaN(key)) {
                this.app.handleNumber(key);
            }

            else if (key === ".") {
                this.app.handleDecimal();
            }

            else if (["+", "-", "*", "/"].includes(key)) {
                this.app.handleOperator(key);
            }

            else if (key === "Enter") {
                this.app.handleEquals();
            }

            else if (key === "Backspace") {
                this.app.handleDelete();
            }

            else if (key === "Escape") {
                this.app.handleClear();
            }

        });

    }

}