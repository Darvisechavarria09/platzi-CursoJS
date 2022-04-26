/*Responde las siguientes preguntas en la sección de comentarios:

1.¿Qué es una condicional?
2.¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
3.¿Puedo combinar funciones y condicionales?

R//1.es una instrucción o grupo de instrucciones que se pueden ejecutar o no en función del valor de una condición.
2.If, else if, switch y ternario
3.si

-Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:*/

let tipoDeSuscripcion1 = "Basic";
switch (tipoDeSuscripcion1){
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//Codigo con else if
let tipoDeSuscripcion2 = "Basic";

if(tipoDeSuscripcion2=='Free'){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion2=='Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion2=='Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion2=='ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//codigo solo con if
let tipoDeSuscripcion3 = "Basic";

if(tipoDeSuscripcion3=='Free'){
    console.log("Solo puedes tomar los cursos gratis");
}
else{
    if(tipoDeSuscripcion3=='Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else{
        if(tipoDeSuscripcion3=='Expert'){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }
        else{
            if(tipoDeSuscripcion3=='ExpertPlus'){
                console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            }
        }
    }
}

//Codigo solo con if
let tipoDeSuscripcion4 = "Basic";

if(tipoDeSuscripcion4=='Free'){
    console.log("Solo puedes tomar los cursos gratis");
}
if(tipoDeSuscripcion4=='Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if(tipoDeSuscripcion4=='Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if(tipoDeSuscripcion4=='ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}