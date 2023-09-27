let num = parseInt(prompt("Introduce un numero diferente a 0"));
let total = num;
while(num != 0){
    num = parseInt(prompt("Introduce otro numero. Mientras añadas numeros diferentes a 0, se sumarán"));
    total += num;
}
alert(`La suma de los numeros que ha introducido es: ${total}`);