
//Tarea que se repite
var estudiantes = ["Ivan","Jose","Martin","Pedro","Julian","Daniel"]

function saludar ( estudiante ){
    console.log(`Nombre: ${estudiante}`)
}


//For
for ( var i = 0 ; i < estudiantes.length ; i++ ) {
    saludar (estudiantes[i])
}

//For Each 
for (var estudian of estudiantes){
    saludar( estudian )
}

//For Each position
for ( var estudi in estudiantes){
    saludar ( estudi )
}

//------------------------------While
//while is true
while ( estudiantes.length > 0 ) {
    var estudiante = estudiantes.shift();
    saludar( estudiante )
}
console.log(estudiantes)