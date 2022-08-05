const title = document.querySelector("h1");
const inputValor1 = document.querySelector("#calculo1");
const inputValor2 = document.querySelector("#calculo2");
const btnCalcular = document.querySelector("#btnCalcular");
const form = document.querySelector("form");


//Ejemplo 1
/*
//Escucha cada vez que suceda un evento
//No se coloca parentecis porque manda a llamar y la misma funcion addEventListener coloca los parentecis
//Esto ayuda mejor a la legibilidad
form.addEventListener('submit', sumarInputs);

//Una de las formas de escuchar los elementos
function sumarInputs(event){
    console.log(event);
    //Ejecuta lo que no tiene que ejecutar como defecto, osea no recargar la pagina
    event.preventDefault();

    let valor1 = Number(inputValor1.value);
    let valor2 = Number(inputValor2.value);

    let resultado = valor1 + valor2;
    console.log(resultado)

    //Creamos el Elemento parrafo
    const parrafo = document.createElement("p");
    parrafo.innerText = resultado;

    //Agregamos el parrafo al body
    const body = document.querySelector("body");
    body.append(parrafo);
}
*/


//Ejemplo 2
btnCalcular.addEventListener('click', sumarInputs);

//Una de las formas de escuchar los elementos
function sumarInputs(){
    let valor1 = Number(inputValor1.value);
    let valor2 = Number(inputValor2.value);

    let resultado = valor1 + valor2;
    console.log(resultado)

    //Creamos el Elemento parrafo
    const parrafo = document.createElement("p");
    parrafo.innerText = resultado;

    //Agregamos el parrafo al body
    const body = document.querySelector("body");
    body.append(parrafo);
}