let localidad = prompt("Indique donde vive");
let edad = prompt("Indique su edad");
if(localidad == "Alicante" && 18 < edad && edad < 35){
    alert("Puede acceder al cartel de empresarios emprendedores");
}
else{
    alert("No puede acceder al cartel de empresarios emprendedores")
}