//0 - 1 - 2 - 3
var frutas = ["Manzana", "Banana", "Frutilla", "Paltas"];

//["Manzana", "Banana", "Frutilla", "Paltas"]
console.log(frutas);

//4
console.log(frutas.length)

//Banana
console.log(frutas[1])

//----------------------Mutable

//Add
var masFrutas = frutas.push("Naranja");
console.log(frutas)

//Delete element latest
var ultimo = frutas.pop()
//Delete element first
var first = frutas.shift()

//Get position
var getPosition = frutas.indexOf("Banana")
console.log("Banana: " + getPosition)

//Rename 
frutas[1] = "Mandarina"

console.log(frutas)