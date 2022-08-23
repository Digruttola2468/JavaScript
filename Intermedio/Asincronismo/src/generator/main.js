function* generator() {
    yield 1;
    yield 2;
    yield 3; 
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function* iterate(arrayt) {
    for (let value of arrayt){
        yield value;
    }
}

const it = iterate(['Oscar','Ana','Omar','Lucia','Juan']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);