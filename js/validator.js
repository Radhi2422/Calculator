/**
 * Check users input:
 * multiple decimals,
 * division by user,
 * invalid operator,
 * empty input
 */

class Validator {

    hasDecimal(value) {
        return value.includes(".");
    }

    canAddDecimal(currentInput) {
        return !this.hasDecimal(currentInput);
    }

    isEmpty(value) {
        return value === "";
    }

    divideByZero(operator, secondNumber) {

        return (
            operator === OPERATORS.DIVIDE &&
            Number(secondNumber) === 0
        );

    }

}