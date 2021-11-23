

//let reg = "/";
var nombre=prompt("Introduce tu nombre","Tecla");
var apellido=prompt("Introduce tus apellidos","Tecla");
var fdia=prompt("Introduce tu fecha de nacimiento con formato DD/MM/AAAA","Tecla");
var cursos=parseInt(prompt("Introduce los cursos de programacion que realizaste","Tecla"));
var comparacion=fdia.split("/");


cursos=cursos+1;
console.log(cursos);

if(comparacion[2]<2000)
{
    alert(nombre+" "+apellido +","+" "+"¿estas seguro que eres un programador junior?");
}
else{
    alert(nombre+" "+apellido +","+" "+"Eres un programador junior");
}



