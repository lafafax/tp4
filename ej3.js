var numeros=[100,230,300,100,230,600,230,1200,500,400];
document.write(numeros.join(" - "));
document.write("<br>");
var entre = numeros.filter((numeros)=>numeros>=300 && numeros<=500);
document.write(entre);