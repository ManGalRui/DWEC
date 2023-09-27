let num = parseInt(prompt("Que el primer usuario introduzca un numero"));
let num2 = parseInt(prompt("Que el segundo usuario intente adivinar el primer numero"));
while (num2 != num){
    if(num2 > num){
        num2 = parseInt(prompt("El numero del primer usuario es menor. Intentelo otra vez"));
    }
    else{
        num2 = parseInt(prompt("El numero del primer usuario es mayor. Intentelo otra vez"));
    }
}
alert("Acertaste!");