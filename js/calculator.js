/**
 * Contains all business logic:
 * add(), subtract(), multiply(), divide(),
 * calculate(), reset(),deleteDigit()
 * 
 * No HTML code should be here.
 */


class Calculator {

    constructor() {

        this.currentInput = "";

        this.previousInput = "";

        this.operator = null;

        this.history = [];

    }
    appendNumber(number) {

    if(this.currentInput.length >= MAX_DIGITS)
        return;

    this.currentInput += number;

    }
    chooseOperator(operator){

    if(this.currentInput==="")
        return;

    this.operator=operator;

    this.previousInput=this.currentInput;

    this.currentInput="";
    }
    calculate(){

    const first=parseFloat(this.previousInput);

    const second=parseFloat(this.currentInput);

    let result;

    switch(this.operator){

        case OPERATORS.ADD:
            result=first+second;
            break;

        case OPERATORS.SUBTRACT:
            result=first-second;
            break;

        case OPERATORS.MULTIPLY:
            result=first*second;
            break;

        case OPERATORS.DIVIDE:

            if(second===0){

                return ERROR_MESSAGES.DIVIDE_BY_ZERO;

            }

            result=first/second;

            break;

        default:
            return;
    }

    result=formatResult(result);

    this.history.push(
        `${first} ${this.operator} ${second} = ${result}`
    );

    this.currentInput=result.toString();

    this.previousInput="";

    this.operator=null;

    return result;
    }
    clear(){

    this.currentInput="";

    this.previousInput="";

    this.operator=null;

    }
    delete(){

    this.currentInput=this.currentInput.slice(0,-1);

    }
    getDisplay(){

    return this.currentInput;

    }
    getHistory(){

    return this.history;

    }
}

/**
export default class Calculator{
    constructor(tasks=[]){
        this.tasks=tasks;
    }
    add(num1,num2,operator){
        let result;
        if(operator=='+'){
            result=num1 + num2;
        }
        else
            result=0;
        const task={
            num1:num1,
            num2:num2,
            operator:operator,
            result:result
        }
        this.tasks.push(task);
    }
    subract(num1,num2,operator){
        let result;
        if(operator=='-'){
            result=num1 - num2;
        }
        else
            result=0;
        const task={
            num1:num1,
            num2:num2,
            operator:operator,
            result:result
        }
        this.tasks.push(task);
    }
    multiply(num1,num2,operator){
        let result;
        if(operator=='*'){
            result=num1 * num2;
        }
        else
            result=0;
        const task={
            num1:num1,
            num2:num2,
            operator:operator,
            result:result
        }
        this.tasks.push(task);
    }
    divide(num1,num2,operator){
        let result;
        if(operator=='/'){
            result=num1 / num2;
        }
        else
            result=0;
        const task={
            num1:num1,
            num2:num2,
            operator:operator,
            result:result
        }
        this.tasks.push(task);
    }

}
 */