let nombre = prompt("Introduzca su nombre");
let apellidos = prompt("Introduzca sus apellidos");
let edad = prompt("Introduzca su edad");
let salario = parseFloat(prompt("Introduzca su salario (con dos decimales)"));
if(salario < 1000){
    if(edad < 30){
        salario = 1100
    }
    else if(edad < 45){
        salario *= 1.03;
    }
    else{
        salario *= 1.15;
    }
}
else if(salario < 2001){
    if(edad > 45){
        salario *= 1.03;
    }
    else{
        salario *= 1.10;
    }
}
alert("Su nombre completo es: " + nombre + " " + apellidos + "\n Su edad es: " + edad + "\n Su salario es: " + salario);