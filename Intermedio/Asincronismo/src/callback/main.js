function sum(x,y) {
    return x + y;
}

function calc(num1,num2, callback){
    return callback(num1,num2);
}

console.log(calc(2, 5, sum));

//----
//----
//----

//Ejemplos de conceptos de CallBack
setTimeout(() => {
    console.log("HOLA JS")
}, 2000);

function grettin(name){
    console.log(`HOLA ${name}`);
}

setTimeout(grettin, 2000, `Oscar`)