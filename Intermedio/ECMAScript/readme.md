# ECMAScript
Es una especificación de lenguaje de scripting en la que se basa JavaScript y Ecma International está a cargo de estandarizar este idioma artificial. Actualmente, JavaScript puede ser interpretado y procesado en varias plataformas, por lo que regirse a un estándar es fundamental para el desarrollo de esta tecnología de programación.

## Que se implemento en ES7??
La siguiente versión de ECMAScript fue publicada en 2016. Las siguientes características de ES7 o ES2016 que aprenderás son: el método includes y el operador de potenciación.

### Método includes
El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

Este método recibe dos argumentos:

- El elemento a comparar.
- El índice inicial desde donde comparar hasta el último elemento.

### Índices positivos y negativos
Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.

`[0,1,2,3, ...., lenght-1]`

Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.

`[-lenght, ...,  -3, -2, -1]`

#### Ejemplos utilizando el método includes
El método includes se utiliza para arrays y strings. El método es sensible a mayúsculas, minúsculas y espacios.

```JavaScript
//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true
```

```JS
// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true
```

#### Operador de potenciación
El operador de potenciación (exponential operator) consiste en elevar una base a un exponente utilizando el doble asterisco (**).

base ** exponente

Por ejemplo, el cubo de dos es igual a 8, matemáticamente expresado sería: $2^3=8$.

```JS
const potencia = 2**3

console.log(potencia) // 8
```



---

# Que se implemento en ES8??
La siguiente versión de ECMAScript fue publicada en 2017 y las características ES8 o ES2017 que aprenderás son:

- Métodos de transformación de objetos a arrays
- Rellenar un string
- Trailing commas

### Métodos de transformación de objetos a arrays
Los métodos de transformación de objetos a arrays sirven para obtener la información de las propiedades, sus valores o ambas.

### Obtener los pares de valor de un objeto en un array
`Object.entries()` devuelve un array con las entries en forma `[propiedad, valor]` del objeto enviado como argumento.

```JS
const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.entries(usuario) 
/* 
[
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
]  
*/
```

### Obtener las propiedades de un objeto en un array
`Object.keys()` devuelve un array con las propiedades (keys) del objeto enviado como argumento.

```JS
const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.keys(usuario) 
// [ 'name', 'email', 'age' ]
```

### Obtener los valores de un objeto en un array
`Object.values()` devuelve un array con los valores de cada propiedad del objeto enviado como argumento.

```JS
const usuario = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23
}

Object.values(usuario) 
// [ 'Andres', 'andres@correo.com', 23 ]
```

### Cómo rellenar un string o padding
El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima.

Este método recibe dos argumentos:

- La longitud máxima a rellenar, incluyendo el string inicial.
- El string para rellenar, por defecto, es un espacio.
Si la longitud a rellenar es menor que la longitud del string actual, entonces no agregará nada.

### Método padStart
El método padStart completa un string con otro string en el inicio hasta tener un total de caracteres especificado.

```JS
'abc'.padStart(10) // "       abc"
'abc'.padStart(10, "foo") // "foofoofabc"
'abc'.padStart(6,"123465") // "123abc"
'abc'.padStart(8, "0") // "00000abc"
'abc'.padStart(1) // "abc"
```

### Método padEnd
El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado.

```JS
'abc'.padEnd(10) // "abc       "
'abc'.padEnd(10, "foo") // "abcfoofoof"
'abc'.padEnd(6, "123456") // "abc123"
'abc'.padEnd(1) // "abc"
```

### Trailing commas
Las trailing commas consisten en comas al final de objetos o arrays que faciliten añadir nuevos elementos y evitar errores de sintaxis.

```JS
const usuario = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23, //<-- Trailing comma
}

const nombres = [
    "Andres",
    "Valeria",
    "Jhesly", //<-- Trailing comma
 ]
```
