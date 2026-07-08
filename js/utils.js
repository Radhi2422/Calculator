function isNumber(value) {
    return !isNaN(value);
}

function formatResult(number) {
    return parseFloat(number.toFixed(10));
}


function resetState(state) {

    state.currentInput = "";

    state.previousInput = "";

    state.operator = null;

}