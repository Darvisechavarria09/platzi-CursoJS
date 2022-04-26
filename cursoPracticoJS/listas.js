/*Responde las siguientes preguntas en la sección de comentarios:

1.¿Qué es un array?
2.¿Qué es un objeto?
3.¿Cuándo es mejor usar objetos o arrays?
4.¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

R//1.es un espacio reservado para alamcenar informacion como: datos,objetos
2.es una coleccion datos almacenados de esta forma: PROPIEDA: VALOR  (tambien puede almacenar funciones)
3.su uso debe ser en el momento en que se requiera o depende de la necesidad del programa
4.si

/*-Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.*/

let frutas1=['fresa','cereza','mango','limon']
let imprimirFruta1 =(frutas1)=>{
    console.log(frutas[0])
}
imprimirFruta(frutas1)

/*-Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).*/

let frutas=['fresa','cereza','mango','limon']
let imprimirFruta =(frutas)=>{
    frutas.forEach(element => {
        console.log(element)
    });
}
imprimirFruta(frutas)

/*-Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).*/

let persona={
    nombre:'Darvis',
    apellido:'Echavarria',
    edad:20,
    id:1000885049
}
function imprimirPersona(persona){
    //para imprimir PROPIEDAD:VALOR
    console.log(persona)
    //para imprimir solo el valor
    /*Object.values(persona).forEach((elem)=>{
        console.log(elem)
    })*/
}
imprimirPersona(persona)