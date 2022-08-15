

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    frontend: "Ivan",
    backend: "Florencia",
    design: "Anabela",
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = "hello";
console.log(string.padStart(7, "Hi"));
console.log(string.padEnd(12," ----"));
console.log("Food".padEnd(12,"---"));


//----------
//Async Await
const helloWorld = () => {
    return new Promise( (resolver, reject) => {
        ( false )
            ? setTimeout( () => resolver("Hello world"), 3000)
            : reject(new Error("Test error"));
    })
}

//Funcion que va a implementar de async
const HelloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

HelloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();