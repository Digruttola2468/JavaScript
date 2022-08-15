var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2001,
    detalleDelAuto: function(){
        console.log(`Marca: ${this.marca} \nModelo: ${this.modelo}`)
    }
}

console.log(miAuto)

console.log(miAuto.marca)

console.log(miAuto.detalleDelAuto())

//Como puedo crear 30 autos con su marca y modelo??

//Funcion Constructora
function auto ( marca , modelo , anio) {
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
}

//Nueva instancia de nuestra funcion constructora
var nuevoModelo  = new auto("Tesla", "Model 3", 2022)
var nuevoModelo2 = new auto("Renaul","Kangoo",2022)
var nuevoModelo3 = new auto("Citroen","Captus",2022)

console.log(nuevoModelo)
console.log(nuevoModelo2)
console.log(nuevoModelo3)