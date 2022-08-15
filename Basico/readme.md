# JavaScript
Es un lenguaje de programación dinámico que tiene la capacidad de ser utilizado en muchos dispositivos diferentes. Puede usarse en ordenadores personales, servidores web y teléfonos inteligentes. Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

JavaScript se emplea comúnmente para el desarrollo web front-end y más recientemente para algunos desarrollos back-end a través de frameworks como Node.Js. o Next.Js. Tiene características como la programación orientada a objetos, funciones y herencia basada en prototipos.

### Como nace JavaScript?
Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros. Fue creado por Brendan Eich en 1995 y se convirtió en un estándar oficial del World Wide Web Consortium (W3C) en 1997.

### Porque Decimos que es un lenguaje dinamico?
Corre directamente en la etapa de Runtime, sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores no se muestren sino hasta que se ejecuta el programa. Lo que se ve a primera vista, cuando se analiza el código, es muy probable que no sea lo que se va a obtener cuando el programa se ejecute.

JavaScript permite declarar (por ejemplo) variables cuyo valor (y tipo) solo se conocerá al momento de su ejecución en función de las condiciones dadas al momento de correrlo en un entorno real. En cambio, los lenguajes estáticos no compilarán en código ejecutable a menos que todos los valores (o tipos de valores) se conozcan por adelantado.


### Porque es debilmente tipado
Porque los tipos de datos no están bien definidos en el lenguaje y permite, por ejemplo, operaciones entre numerosos y letras. Esto sucede porque el lenguaje asume tipos de datos que no necesariamente fueron los que se querían representar. Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc.). Ejemplo:

```javascript
//Debilmente tipado
 4 + "7";   //47
 4 * "7";   //28
 2 + true;  // 2 + 1 = 3
 2 + false; // 2 + 0 = 2
```

### Realmente es un lenguaje interpretado?
Sí, y la razón es que el navegador lee línea por línea nuestro código, el cual le indica lo que tiene que ir haciendo, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador

### JavaScript es BackWards Compatible
Todas las funciones nuevas que salen para Javascript no dañarán el trabajo ya hecho previamente, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. Para solucionar esto está Babel, que permite usar las nuevas características del lenguaje, pero lo transforma a una versión que el navegador pueda entender.


1️⃣ Responde las siguientes preguntas en la sección de comentarios
- ¿Qué es una variable y para qué sirve?
    Una variable es un espacio en memoria que sirve para almacenar datos que se deviden en distinto tipos (String,Number,Boolean).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
    Declarar una variable es crear dicha variable pero sin valor osea undefined , para luego inicializar colocando dicho valor a la variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
    Al sumar numeros estamos realizando operaciones matemeticas mientras que los String estamos concatenando (uniendo) dos o mas cadenas de texto.

- ¿Cuál operador me permite sumar o concatenar?
    El operador que permite dicha operacion es +

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre : String
Apellido : String
Nombre de usuario en Platzi : String
Edad : Number
Correo electrónico : String
Mayor de edad : Boolean
Dinero ahorrado : Number
Deudas : Number

```JavaScript
let nombre = "";
let apellido = "";
let nombreUsuarioPlatzi = "";
let edad = 0;
let correoElectronico = "";
let isEdadMayor = false;
let dineroAhorrado = 0;
let deudas = 0;

console.log(nombre + apellido);
console.log(dineroAhorrado - deudas)
```

# Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una función?
    Una funcion es un blocke de codigo para que sean reutilizables en el futuro.  
- ¿Cuándo me sirve usar una función en mi código?
    Me sirve cuando tenemos codigo repetido en nuestro programa. Donde podemos crear funciones para evitar codigo repetido y estructurar con codigo limpio.
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
    Los parametros son variables locales que solamente pueden acceder dicha funcion , y los argumentos son los valores que le enviamos a esas variables indefinidas.

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
```JavaScript
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function print( name , lastName , completeName , nickName) {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

print(name,lastname,completeName,nickname)
```

# Condicionales

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un condicional?
    Un condicional es la validacion entre dos variables
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    Exiten los `if` (`else` y `else if`) que permite hacer validaciones completamente distinstasa en cada validacion y los `switch` que son un tipo de condicionales que evalua por casos con la misma variable
- ¿Puedo combinar funciones y condicionales?
    Si puedo combinar ya que podemos encapsular cualquier bloque de codigo 

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
```JavaScript
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion === "Free")
    console.log("Solo puedes tomar los cursos gratis");
else if(tipoDeSuscripcion === "Basic") 
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
else if(tipoDeSuscripcion === "Expert")
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
else 
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
```

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
```JavaScript
if (suscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
}
    
if (suscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
    
if (suscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
    
if (suscripcion == 'ExpertDuo') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

console.warn('Ese tipo de suscripción no existe')
```


# Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un ciclo?
    Un ciclo es un bucle que se repite en un blocke de codigo , donde termina cuando se cumple cierta condicion.
- ¿Qué tipos de ciclos existen en JavaScript?
    Existen los `for(){} while(){} do{}while()`
- ¿Qué es un ciclo infinito y por qué es un problema?
    Un ciclo infinito es un bucle que no tiene fin ya que nunca se valida la condicion , el problema de esto es que proboca un daño en la aplicacion.
- ¿Puedo mezclar ciclos y condicionales?
    Si puedo combinar o mezclar

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
```JavaScript
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
} 

let i = 0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}
i = 10;
while(i >= 2 ){
    console.log("El valor de i es: " + i);
    i--;
}
```

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
```JavaScript
let respuesta = 0;
while(respuesta != 4){
    let pregunta = Number(prompt("Cuanto es 2 + 2?: "))
    respuesta = pregunta;
}
```

# Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un array?
    Un array es un conjunto de elementos dentro de una variable.
- ¿Qué es un objeto?
    Es una lista de elementos pero cada elemento tiene un nombre clave
- ¿Cuándo es mejor usar objetos o arrays?
    Es mejor usar arrays cuando queremos un conjunto de elementos que sean del mismo tipo para realizar operaciones. Mientras que los objetos podemos crear variables con sus tipo correspondiente y crear una instacia varias veces del mismo objeto

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    Si puedo porque los arrays pueden guardar objetos y los objetos pueden guardar arrays entre sus propiedades

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```JavaScript
function name( array ) {
    console.log(array[0])
}
```

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```JavaScript
var array = ["Juan","Diego","Pablo","Rodrigo"];
function name( arrayParam ) {
    arrayParam.forEach(function(element){
        console.log(element);
    });
}
```

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```JavaScript
let myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
  detalle: function(){
    console.log(`Make: ${this.make} \nModel: ${this.model} \nYear: ${this.year}`)
  }
};
function readObject(object) {
  objetc.forEach(function (elemt){
    console.log(elemt.detalle())
  })
}
readObject(myCar);
```
