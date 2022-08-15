//Normal
function newFunction(name,age,country){
    var name = name || "oscar";
    var age = age || 32;
    var country = country || "ARG";
    console.log(name,age,country);
}

// ES6
function newFunctionES6(name = "oscar", age = 10, country = "ARG"){
    console.log(name,age,country);
}

newFunction();
newFunction("Sebas",20,"Peru");

newFunctionES6();
newFunctionES6("Ivan",17,"Paraguay");

//---------

//Normal
let hello = "HI";
let world = "World";
let epicPharase = hello + " " + world;
console.log(epicPharase);

//ES6
let epicPharase2 = `${hello} ${world}`
console.log(epicPharase2)

//---------

//Normal
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" +
            " Other phase i needed";
console.log(lorem);

//ES6
let lorem2 = `Epic moment 
otro momento epico sin usar /n`;

console.log(lorem2);


//Normal
let person = {
    "name": "Ivan",
    "age": 23,
    "country": "MX"
}
console.log(person.name,person.age);

//ES6
let { name,country,age } = person;
console.log(name,age,country);

//-----------------

//ES6
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria","Yesica","Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);


//La variable var es de manera global a pesar que esta dentro de un blocke
{
    var globalVar = "Global";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet);


const a = "b";
a = "a";
console.log(a);