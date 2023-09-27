let num1 = parseInt(prompt("Inserte un numero"));
let caracter = prompt("Inserte una operacion (+, -, * o /)");
let num2 = parseInt(prompt("Inserte un numero"));
switch(caracter){
    case "+":
        alert("El resultado de su suma es: " + (num1 + num2));
    break;
    case "-":
        alert("El resultado de su resta es: " + (num1 - num2));
    break;
    case "*":
        alert("El resultado de su multiplicacion es: " + (num1 * num2));
    break;
    case "/":
        alert("El resultado de su division es: " + (num1 / num2));
    break;
}