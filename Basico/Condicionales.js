
//if - else
if (true) {
    console.log("if");
}else {
    console.log("else")
}


//if - else if - else
var edad = 18;
if(edad === 18){
    console.log("Puedes votar, sera tu 1era ")
}else if (edad > 18){
    console.log("Puedes votar")
}else {
    console.log("No puedes votar")
}


//condition ? true : false
var numero = 1;
var resultado = numero === 1 ? "Si soy un uno" : "No soy uno"
console.log(resultado);



//Switch - validar casos
var num = 1;
switch (num) {
    case 1:
        console.log("Primero")
        break;
    case 2:
        console.log("Segundo")
        break;
    case 3:
        console.log("Tercero")
        break;
    case 4:
        console.log("Cuarto")
        break;
    case 5:
        console.log("Quinto")
        break;
    case 6:
        console.log("Sexto")
        break;
    default:
        console.log("Nada")
}