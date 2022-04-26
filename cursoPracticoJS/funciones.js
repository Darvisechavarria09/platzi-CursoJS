/*Responde las siguientes preguntas en la sección de comentarios:
1.¿Qué es una función?
2.¿Cuándo me sirve usar una función en mi código?
3.¿Cuál es la diferencia entre parámetros y argumentos de una función?

R//1. una funcion es un bloque de codigo dedicado a una tarea en especifico
2. cuando se repite varias lineas de codigo en el proyecto o para realizar una tarea determinada
3. Parametro es una variable que está en la definición de una función, argumento son los datos que se le pasan a los parametros de una función*/

/*Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
*/
let nombre = 'Darvis';
let apellido = 'Echavarria Angel';
let nombreCompleto = nombre+apellido;
let nickname = 'Darvis09';
function saludar(nombre,apellido,nickname){
    console.log(`Mi nombre es: ${nombre} ${apellido}, pero prefiero que me digas: ${nickname}`)
}
saludar('Darvis','Echavarria Angel','DARVIS09')
