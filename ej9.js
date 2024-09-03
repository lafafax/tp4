var precios=[345,230,300,100,230,600,230,1200,500,400];
document.write(precios.join(" - "));
document.write("<br>");
var iguales = precios.filter((precios)=>precios == 345);
document.write(iguales);