/**
 * Starts the application.
 * 
 * Initialize the calculator
 * Then attach event listeners
 * Then create calculator object
 * Then at end render UI
 */


const displayElement = document.getElementById("display");

const historyElement = document.getElementById("history");

const buttons = document.querySelectorAll(".btn");

const operators = document.querySelectorAll(".operator");

const equals = document.getElementById("equals");

const clear = document.getElementById("clear");

const del = document.getElementById("delete");


const calculator = new Calculator();

const display = new Display(displayElement);

const validator = new Validator();

const history = new History(historyElement);
// class App {
//     constructor() {
//         this.calculator = new Calculator();
//         this.display = new Display(document.getElementById("display"));
//         this.validator = new Validator();
//         this.history = new History(document.getElementById("history"));
//     }
// }

class App {

    handleNumber(number) {

        calculator.appendNumber(number);

        display.update(calculator.getDisplay());

    }
        handleDecimal() {

        if (
            validator.canAddDecimal(
                calculator.currentInput
            )
        ) {

            calculator.appendNumber(".");

            display.update(
                calculator.getDisplay()
            );

        }

    }
        handleOperator(operator) {

        calculator.chooseOperator(operator);

    }
        handleEquals() {

        if (

            validator.divideByZero(

                calculator.operator,

                calculator.currentInput

            )

        ) {

            display.showError(

                ERROR_MESSAGES.DIVIDE_BY_ZERO

            );

            return;

        }

        const result = calculator.calculate();

        display.update(result);

        history.render(

            calculator.getHistory()

        );

    }
        handleClear() {

        calculator.clear();

        display.clear();

    }
        handleDelete() {

        calculator.delete();

        display.update(

            calculator.getDisplay()

        );

    }


}
const app = new App();
buttons.forEach(button => {

    button.addEventListener("click", () => {

        app.handleNumber(

            button.dataset.value

        );

    });

});
operators.forEach(button => {

    button.addEventListener("click", () => {

        app.handleOperator(

            button.dataset.value

        );

    });

});
equals.addEventListener("click", () => {

    app.handleEquals();

});
clear.addEventListener("click", () => {

    app.handleClear();

});


del.addEventListener("click", () => {

    app.handleDelete();

});



const keyboard = new Keyboard(app);

keyboard.initialize();






















