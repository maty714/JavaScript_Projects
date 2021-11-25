const Calculator = {
    display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

function Input_Digit(digit){
    //This is a destructuring assignment.      
    //It is the same as saying display_Value = Calculator.display_Value
    //It is a way to grab values from properties in a class and store them in variables
    //the same applies to wait_Second_Operand
    const {display_Value, Wait_Second_Operand} = Calculator
    if (Wait_Second_Operand === true){

        Calculator.display_Value = digit;
        Calculator.Wait_Second_Operand = false;

    }
    else{
        Calculator.display_Value = display_Value === '0' ?  digit :display_Value + digit;
    }
}

function Input_Decimal(dot){

    if (Calculator.Wait_Second_Operand === true){
        return;
    }
    if (!Calculator.display_Value.includes(dot)){
        Calculator.display_Value += dot;
    }
}

function Handle_Operator(Next_Operator){

    const {First_Operand, display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(display_Value);

    if (operator && Calculator.Wait_Second_Operand){
        Calculator.operator = Next_Operator;
        return;
    }
    else if(operator){
        
        //The || is an or statement but not like other languages
        // If the left is true, then 
        const Value_Now = First_Operand || 0
        
        let result = perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9)

        result = (result *1).toString()
        Calculator.display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}


const perform_Calculation = {
    '/': (First_Operand, Second_Operand) =>First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) =>First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) =>First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) =>First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) =>Second_Operand
};



function Calculator_Reset(){
    Calculator.display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display(){
    const display = document.querySelector('.Calculator-screen');
    display.Value = Calculator.display_Value;
}

Update_Display();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (Event) => {

    const { target } = Event;
    
    if (!target.matches('button')){
        return;
    }

    if(target.classList.contains('operator')){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if(target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if(target.classList.contains('all-clear')){
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();

})