var articulo = [
{   
    nombre: "Bici" , 
    costo: 3000
},
{
    nombre: "Teclado",
    costo: 2500
},
{
    nombre: "Celular",
    costo: 10000
},
{
    nombre: "Laptop",
    costo: 20000
},
{
    nombre: "Teclado",
    costo: 500
},
{
    nombre: "Audifonos",
    costo: 1700
}
]

//Methos

//filter retorna todas las coincidencias
var articulosFiltrados = articulo.filter(function(arti){
    return arti.costo <= 500
})
console.log(articulosFiltrados)

//Mapea los objetos y nos devuelve un array de los nombres
var nombreArticulos = articulo.map(function(arti) {
    return arti.nombre
});
console.log(nombreArticulos)

//find() 
//find retorna solo la primer coincidencia
var encuentraArticulo = articulo.find(function(arti){
    return arti.nombre === "Teclado"
});
console.log(encuentraArticulo)

//forEach()
articulo.forEach(function(arti){
    console.log(arti)
});

//some() -> Verdadero o falso
var articulosBaratos = articulo.some(function(arti){
    return arti.costo <= 3000
});
console.log(articulosBaratos);  //True
