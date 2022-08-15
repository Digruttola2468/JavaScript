//Classes
class calculator {
    constructor(){
        this.valueA = 0;
        this.valorB = 0;
    }
    sum(x,y) {
        this.valueA = x;
        this.valorB = y;
        return this.valueA + this.valorB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//------------------
//Modulos
import { hello } from "./modulo";

hello();

//------------------
//Generators
function* holaWorld(){
    if ( true ){
        yield "Hello, ";
    }
    if ( true ){
        yield "World";
    } 
};

const generatorHello = holaWorld();
console.log(generatorHello.next().value);

console.log(generatorHello.next().value);

console.log(generatorHello.next().value);