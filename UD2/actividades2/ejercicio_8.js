let resultado = "";
for(num = 25; num > 0; num--){
    if(num % 2 == 0){
        resultado += " " + num;
    }
}
alert("Los numeros pares entre 25 y 1 son: " + resultado)