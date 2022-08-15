

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
