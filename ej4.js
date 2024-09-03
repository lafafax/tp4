var numeros=[100,230,300,100,230,600,230,1200,500,400];
document.write(numeros.join(" - "));
document.write("<br>");
var mayores = numeros.filter((numeros)=>numeros>400);
document.write(mayores);