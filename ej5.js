var numeros=[100,230,300,150,230,600,130,1200,500,400];
document.write(numeros.join(" - "));
document.write("<br>");
var menores = numeros.filter((numeros)=>numeros<200);
document.write(menores);