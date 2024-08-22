let global = {
    value1: "",
    value2: "",
    operator: "",
}

const setup = () => {

    let buttons = document.getElementsByClassName("button")
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", (e) => {checkValues(buttons[i].getAttribute("value"))})
    }
    document.onkeyup = (e) => {
        console.log(e.key)
        switch(e.key){
            case "1":
                checkValues("digit 1")
                break;
            case "2":
                checkValues("digit 2")
                break;
            case "3":
                checkValues("digit 3")
                break;
            case "4":
                checkValues("digit 4")
                break;
            case "5":
                checkValues("digit 5")
                break;
            case "6":
                checkValues("digit 6")
                break;
            case "7":
                checkValues("digit 7")
                break;
            case "8":
                checkValues("digit 8")
                break;
            case "9":
                checkValues("digit 9")
                break;
            case "0":
                checkValues("digit 0")
                break;
            case "+":
                checkValues("operator +")
                break;
            case "-":
                checkValues("operator -")
                break;
            case "/":
                checkValues("operator /")
                break;
            case "x":
                checkValues("operator x")
                break;
            case "*":
                checkValues("operator x")
                break;
            case "=":
                checkValues("operator =")
                break;
            case "Enter":
                checkValues("operator =")
                break;
            case "Backspace":
                checkValues("operator backspace")
                break;
            case "Escape":
                checkValues("operator clear")
                break;
            case ".":
                checkValues("digit .")
                break;
        }
    }
}

const operate = (newOperator) => {
    switch(global.operator){
        case "+":
            add(global.value1, global.value2, newOperator);
            break;
        case "-":
            subtract(global.value1, global.value2, newOperator);
            break;
        case "x":
            multiply(global.value1, global.value2, newOperator);
            break;
        case "/":
            divide(global.value1, global.value2, newOperator);
            break;
    }
}

const checkValues = (val) => {
    console.log(val)
    let [operatorDigit, symbol] = val.split(" ")
    
    if(operatorDigit === "operator"){
        if(symbol === "="){
            operate()
        } else if(symbol === "backspace"){
            backspace()
        } else if( symbol === "clear"){
            global.value1 = ""
            global.value2 = ""
            global.operator = ""
            updateDisplay()
        } else if(global.operator.length === 0){
            global.operator = symbol
            updateDisplay()
        } else {
            //calculate
            operate(symbol)
        } 
    }

    if(operatorDigit === "digit"){
        if(global.operator.length === 0){
            if(!(symbol === "." && global.value1.includes("."))){
                global.value1+=symbol
                updateDisplay()
            }
        } else{
            if(!(symbol === "." && global.value2.includes("."))){
                global.value2+=symbol
                updateDisplay()
            }
        }
    }
    
    
    console.log(global.value1, global.operator, global.value2)
}

const backspace = () => {
    let removed = false;
    if(global.value2.length != 0){
        global.value2 = global.value2.slice(0, -1)
        removed = true;
    } else if(global.operator.length != 0 && !removed){
        global.operator = ""
        removed = true;
    } else if(global.value1.length != 0 && !removed){
        global.value1 = global.value1.slice(0, -1)
    }
    updateDisplay()
}

const updateDisplay = () => {
    let display = document.getElementsByClassName("text")[0] 
    display.textContent = global.value1 + global.operator + global.value2
}

const add = (a, b, newOperator) => {
    global.value1 = parseFloat(a) + parseFloat(b);
    global.value2 = ""
    global.operator = newOperator ? newOperator : "";
    updateDisplay()
}

const subtract = (a,b, newOperator) => {
    global.value1 = a - b;
    global.value2 = ""
    global.operator = newOperator ? newOperator : "";
    updateDisplay()
}

const multiply = (a,b, newOperator) => {
    global.value1 = a * b;
    global.value2 = ""
    global.operator = newOperator ? newOperator : "";
    updateDisplay()
}

const divide = (a,b, newOperator) => {
    if(a === "0" || b === "0"){
        global.value1 = ""
        global.value2 = ""
        global.operator = ""
        updateDisplay()
        alert("Dividing by 0 is for idiots!")
    } else {
        global.value1 = a/b;
        global.value2 = ""
        global.operator = newOperator ? newOperator : "";
        updateDisplay()
    }
}

window.addEventListener("load", setup);
