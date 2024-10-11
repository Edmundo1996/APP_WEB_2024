// Este es un comentario de una línea

/*
Esto es un comentario 
de varias líneas
*/

// Alerta 
// alert("Soy una ventana de alerta");

// Variables 
var nombre = 'Jonathan';
let nombre2 = 'Edmundo';
let edad = 20;
let logica = true;
let estatura = 1.85;

// Mostrar en pantalla con WRITE
let concatenacion = "La persona: " + nombre + ", tiene la edad de: " + edad + " años";
// document.write("<h1>" + concatenacion + "</h1><br>");
// document.write("La persona: " + nombre + ", tiene la edad de: " + edad + " años");  

// Mostrar en pantalla con el document.getElementById
let datos = document.getElementById("info");
datos.innerHTML = `
    <br>
    <br>
    <h1> La persona ${nombre2}, tiene una altura de: ${estatura} </h1>
    <hr>
`;

let datos2 = document.getElementById("info2");
datos2.innerHTML = `
    <h2> Este es otro contenido </h2> 
    <br> <hr>
`;

// Condicionales if
if (estatura >= 1.90) {
    datos.innerHTML += `
    <hr>
    <h3> Es una persona alta </h3> 
    `;
} else {
    datos.innerHTML += "<h3> Es una estatura promedio </h3>";
}

// Ciclos
for (let i = 1; i <= 5; i++) {
    datos.innerHTML += `<hr><h3>For: El número es: ${i} </h3>`;
}

let i = 1;        
while (i <= 5) {
    datos.innerHTML += `<hr><h3>While: El número es: ${i} </h3>`;
    i++; 
}

let j = 1;
do {
    datos.innerHTML += `<hr><h3>Do While: El número es: ${j} </h3>`;
    j++;
} while (j <= 5);

// Funciones

// 1.- Que no recibe parámetros y no regresa valor
function suma() {
    let n1 = 2;
    let n2 = 4;
    let resultado = n1 + n2;}