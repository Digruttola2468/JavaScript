const title = document.querySelector("h1");
const inputValor1 = document.querySelector("#calculo1");
const inputValor2 = document.querySelector("#calculo2");
const btnCalcular = document.querySelector("#btnCalcular");

console.log(inputValor1);

//Una de las formas de escuchar los elementos
function btnOnClick(){
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