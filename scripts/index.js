let global = {
    value1: "",
    value2: "",
    operator: null,
}

const setup = () => {

    let value1;
    let value2;
    let operator;
    
    let buttons = document.getElementsByClassName("button")
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", (e) => {updateDisplay(buttons[i].getAttribute("value"))})
    }
    
}

const operate = (value1, operator, value2) => {
    switch(operator){
        case " + ":
            add(value1, value2);
            break;
        case "-":
            subtract(value1, value2);
            break;
        case "x":
            multiply(value1, value2);
            break;
        case "/":
            divide(value1, value2);
            break;
    }
}

const updateDisplay = (val) => {
    console.log(val)
    let [operatorDigit, symbol] = val.split(" ")
    
    if(operatorDigit === "operator"){
        if(global.operator === null){
        global.operator = symbol
        } else {
            //calculate
        } 
    }

    if(operatorDigit === "digit"){
        if(global.operator === null){
            global.value1+=symbol
        } else{
            global.value2+=symbol
        }
    }
    console.log(global.value1, global.operator, global.value2)
    let display = document.getElementsByClassName("text")[0] 
    display.textContent += symbol;
}


const add = (a, b) => {
    return a + b;
}

const subtract = (a,b) => {
    return a - b;
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    return a/b;
}

window.addEventListener("load", setup);