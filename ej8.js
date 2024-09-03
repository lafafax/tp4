var numeros=[460,460,460,345,230,600,130,1200,500,460];
document.write(numeros.join(" - "));
document.write("<br>");
var maymen = numeros.filter((numeros)=>numeros>500 || numeros<200 );
document.write(maymen);