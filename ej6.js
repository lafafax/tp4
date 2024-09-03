var numeros=[100,345,300,345,230,600,130,1200,500,400];
document.write(numeros.join(" - "));
document.write("<br>");
var distintos = numeros.filter((numeros)=>numeros!=345);
document.write(distintos);