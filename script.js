var firstInput = window.prompt("ENTER FIRST NUMBER");
var secondInput = window.prompt("ENTER FIRST NUMBER");
var operator = window.prompt("ENTER OPERATOR");
calculate();

function calculate (){
    if (operator == "+"){
        var result = parseInt(firstInput) + parseInt(secondInput);
        alert(firstInput + "+" + secondInput + " = " + result);
    }
    else if (operator == "*"){
        var result = parseInt(firstInput) * parseInt(secondInput);
        alert(firstInput + "*" + secondInput + " = " + result);
    }
    if (operator == "-"){
        var result = parseInt(firstInput) - parseInt(secondInput);
        alert(firstInput + "-" + secondInput + " = " + result);
    }
    if (operator == "/"){
        var result = parseInt(firstInput) / parseInt(secondInput);
        alert(firstInput + "/" + secondInput + " = " + result);
    }
}