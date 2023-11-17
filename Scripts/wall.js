var img= document.getElementById("letras");

document.addEventListener("keydown", teclado);
document.addEventListener("keyup", reset);

function teclado(event) {
    var codigo = event.code;
    img.src = "Images/Pared/"+codigo+".gif";
}

function reset(event) {
    img.src = "Images/Pared/vacio.gif";
}