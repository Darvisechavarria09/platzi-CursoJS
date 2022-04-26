/*Responde las siguientes preguntas en la sección de comentarios:

1.¿Qué es un ciclo?
2.¿Qué tipos de ciclos existen en JavaScript?
3.¿Qué es un ciclo infinito y por qué es un problema?
4.¿Puedo mezclar ciclos y condicionales?

R//1.un bloque de codigo para repetir n veces
2. for,for in,for of,while,do-while
3.un ciclo infinito es un (bucle), un ciclo que nunca se va a detener y puede causar problemas como apaagar el ordenador, relentizarlo, por exceso de consumo de memoria
4.si puedo

Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:*/

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//ciclos while
let j=0
while(j<5){
    console.log("El valor de j es: " + j)
    j++
}

let i=10
while(i>=2){
    console.log("El valor de i es: " + i)
    i--
}

let respuesta = 0;
do{
  respuesta = prompt('¿Cual es el resultado de 2 + 2?')
  respuesta *= 1;
} while (!(respuesta === 4))
