/*Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
-Nombre
-Apellido
-Nombre de usuario en Platzi
-Edad
-Correo electrónico
-Mayor de edad
-Dinero ahorrado
-Deudas*/
let  nombre = 'Darvis'
let apellido = 'Echavarria'
let nombreUsuario = 'Darvis09'
let edad = 20
let email = 'yerikechavarria210@gmail.com'
let mayorEdad = true
let dineroAhorrado = 100000
let deudas = 0
/*Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)*/

let nombreCompleto = nombre+' '+apellido
console.log('Nombre Completo:',nombreCompleto)
let dineroReal = dineroAhorrado-deudas
console.log('dinero Real:',dineroReal)