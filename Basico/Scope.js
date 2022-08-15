
//Scope Global
var nombre = "Diego"

//Scope Local
function fun(){
    var apellido = "Digru"
    return nombre + " " + apellido;
}

fun(); //Diego Digru
