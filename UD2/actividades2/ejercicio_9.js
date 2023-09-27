let num = parseInt(prompt("Introduzca un numero"));
let total = 1;
while(num > 0){
    total *= num;
    num--;
}
alert("El factorial de su numero es: " + total);