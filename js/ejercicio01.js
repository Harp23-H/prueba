// 1. Declaracion de variables 
var miNombre = "Harold";
var misApellidos;
console.warn("-- Declaracion de Variables utilizando el prefijo VAR --")

//utilizaremos la funcion console.log para imprimir el valor actual de la variable 
console.log ("El valor de la variable elNombre es =", miNombre);
console.log ("El valor de la variable misApellidos es =", misApellidos);
//esto arroja un undefined dado que la variable no a sido inicializada

misApellidos="Ramirez Peralta"
//En este momento la variable ya tiene un valor 
console.log("El valor de la variable misApellidos es =", misApellidos)
//Para actualizar el valor de una variable previamente definida solo basta con igualar el nuevo valor
miNombre="Harold Alexis";
console.log("Hola, ",miNombre, misApellidos)

//2. Declaracion de Variables utilizando el prefijo CONST
console.warn("-- Declarcion de Variables utilizando el prefijo CONST --")

//La palabra reservada CONST nos permite a nivel memoria reservar espacion para almacenar datos de una constante 
// que a diferencia de una variable esta no puede cambiar su valor durante la ejecucion del programa, de igual manera 
// no se pueden declarar constantes sin obligatoriamente iniciarlas, es decir asignarles un valor especifico por ejemplo

const miMatricula="240497"

//imprimir el valor de la constante 
console.log ("El valor actual de la constante miMatricula es",miMatricula)

//const miEdad; // -- esto ocaciona un error porque la variable no fue inicializada

//miMatricula=250497; -- Ocaciona un error porque el valor constante no puede cambiar una vez sido asignado.

// 3. Declaracion de Variables utilizandio el prefijo LET

/* La palabra reservada Let enb JavaScript nos permite declarar variables de una manera
muy similar a VAR, con la diferencia del alcance (SCOPE) de la misma, es decir 
aquellas variables declaradas con var tienen un alange global durante la ejecucion y la let
se limitan a funcionesm, ciclos o nloques de codigo, eliminando los valores 
almacenando una vez cumplen su funcion*/

var miFechaNacimiento = new Date("2006-10-23");

function calcularEdad(miFechaNacimiento) {

//Para calcular la edad requerimos de la fecha del dia de hoy 
var fechahoy = new Date();

//Dadi que los datos de fecha almacenados en milisegundos por default en JavaScript, necesitamos una variable que 
//nos permite saber el numero de milisegundos al dia
let milisegundosPorDia = 24*60*60*1000;

//Ya que tenemos los milisegundos por dia tenemo que restar a la fecha de hoy, la fecha en que nacimos 
//para calcular los milisegundos que hemos vivido 
let diasVividos=(fechahoy-miFechaNacimiento)/milisegundosPorDia;

//Invocamos el metodo matematico de la funcion piso (FLOOR)
let edad = diasVividos /365.25
edad = Math.floor(edad);

return edad;
}

 console.warn("-- Declaracion de Variables utilizando LET --")
 console.log("El valor de la variable miFechaNacimiento es: ",miFechaNacimiento);
 var miEdad = calcularEdad(miFechaNacimiento);
 console.log("Despues de ejecutar la funcion calcularEdad(), puedo saber que tienes: ",miEdad," años.")

 if(miEdad >= 18)
 {
    var esMayordeEdad = true;
    esMenordeEdad= false;
    

 }
 else{
    esMayordeEdad=false;
    esMenordeEdad=true;
 }

 console.log("En base a tu edad puedo deducir que el valor de esMayordeEdad es: ",esMayordeEdad, "y el valor de esMenordeEdad es: ",esMenordeEdad);
 
 //interpolacion de datos

 /*Para interpolar datos en JavaScript, es decir mezclar informacion estatica, que ni cambia con datos dinamicos que pueden
 cambiar durante la ejecucion del programa se requiere comenzar la cadena con un backtic () y los datos son dinamicos estran 
 encerrados en llevar curvas {} atendidas por un signo de dolar $*/
 console.warn("-- Interpolacion de Datos --");
console.log( `Hola, ${miNombre} ${misApellidos} se que tienes: ${miEdad} años; por lo que eres: ${esMayordeEdad? 'mayor de edad': 'menor de edad'}.`)