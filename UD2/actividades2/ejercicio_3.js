let hermanos = prompt("Escriba su número de hermanos");
let cantidad = prompt("Escriba una cantidad");
if(hermanos >= 3){
    alert(`Su cantidad se ve reducida en un 15%, dejando un total de: ${cantidad * 0.85}`);
}
else if(hermanos > 0){
    alert(`Su cantidad se ve reducida en un 5%, dejando un total de: ${cantidad * 0.95}`);
}
else{
    alert(`Su cantidad no se ve reducidad, por tanto se queda con un total de: ${cantidad}`);
}