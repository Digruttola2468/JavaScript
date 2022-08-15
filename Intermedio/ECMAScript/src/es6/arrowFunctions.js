let name = "ivi";
let age = 20;

//ES5
obj = {name: name, age: age};

//ES6
obj2 = { name,age }

console.log(obj);
console.log(obj2);

//--------------------------
//Arrow Functions
const names = [
    {name: "Ivan", age: 12},
    {name: "Sebas", age: 54},
    {name: "Yesica", age: 32}
]

//Normal
let listOfNames = names.map(function (item) {
    console.log(item.name);
});

//ES6
let listOfNames2 = names.map( item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
    //...
}

const listOfNames4 = name => {
    //...
}

const square = num => num * num;
console.log(square(10));

//-------------------------

//Promesas
//Algo va a pasar que nosotros estamos estableciendo

const helloPromise = () => {
    return new Promise( (resolve,reject) => {
        if(false){
            resolve("OK")
        }else
            reject("UPS");
    });
}

helloPromise().then(response => console.log(response))
              .catch(error => console.log(error));
