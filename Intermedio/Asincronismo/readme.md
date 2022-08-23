# Conceptos que se utilizan en un Asincronismo

**Bloqueante:** una tarea no devuelve el control hasta que se ha completado

**NoBloqueante:** Una tarea devuelve inmediatamente con independencia del resultado. Si se completo, devuelve los datos. Si no, un error.

**Sincrono:** Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea.

**Asincrono:** Las tareas pueden ser realizadas mas tarde, lo que hace posible que una respuesta sea procesada en diferido.

**Concurrencia:** Utiliza un modelo de concurrencia basado en un Event Loop.

**EventLoop:** El bucle de eventos es un patron de diseño que espera y ditribuye eventos o mensajes en un programa.

**Callbacks:** Una funcion que se pasa como argumento de otra funcion y que sera invocada.

**Promesas:** Funcion noBloqueantes y asincrona la cual puede retornar un valor ahora , en un futurio o nunca.

**Async/Await:** Permite estructurar una funcion asincronica sin bloqueo de una manera similar a una funcion sincronica ordinaria.

JavaScript es asincrono y no bloqueante, con un bucle de eventos (concurrencia) implementado con un unico hilo para sus interfaces de I/O.

**Memory Heap:** Los objetos son asignados a un monticulo(espacio grande en memoria no organizado)
**CallStack(Pila):** Apila de forma ordenada las intrucciones de nuestro programa.

**TaskQueue:** cola de taras , se maneja la concurrencia, se agregan las tareas que ya estan listas para pasar al Stack(pila)
El stack debe de estar vacio.

**MicroTask Queue:** Las promesas tienen otra forma de ejecutarse y una prioridad superior.

**Web Apis:** Del lado del cliente: setTimeout, XMLHttpRequest, File Reader, DOM. Node: FS,HTTPS.

[Ejemplo](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKJC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)


# Callbacks
Es una funcion que se pasa a otra funcion como un argumento, que luego se invoca dentro de la funcion para completar algun tipo de rutina o accion.

[Documentacion CallBacks](https://developer.mozilla.org/es/docs/Glossary/Callback_function)

```JS
function sum(x,y) {
    return x + y;
}

function calc(num1,num2, callback){
    return callback(num1,num2);
}

console.log(calc(2, 5, sum));
```

# XMLHttpRequest
XMLHttpRequest es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs).

📪 Existen 5 estados en un llamado XMLHttpRequest:
- 0 → Se ha inicializado.
- 1 → Loading (cargando).
- 2 → Se ha cargado.
- 3 → Procesamiento si existe alguna descarga.
- 4 → Completado.

📫 Métodos y propiedades:

- xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
- xmlhttp.readyState → Retorna el estado de la petición.
- xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
- xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)
- xmlhttp.send() → Envía la petición.

📬 Características del protocolo http:

Verbos: Los verbos indican acciones que están asociadas a peticiones y recursos, es decir, sirven para la manipulación de recursos cliente/servidor. Los Verbos http son:

**GET** → Solicita un recurso.

**HEAD** → Solicita un recurso pero sin retornar información, la estructura de esta petición es igual que get tanto en su headers como estatus. Es útil cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.

**POST** → Sirve para la creación de recursos en el servidor.

**PUT** → Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

**PATCH** → Actualiza parcialmente un recurso.

**DELETE** → Elimina un recurso.

📭 Los códigos de estados del servidor:

El código de estado (status codes) sirve para describir el estado de la petición hecha al servidor.

- 1xx → Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
- 2xx → Indican que la petición fue recibida, aceptada y procesada correctamente.
- 3xx → Indican que hay que tomar acciones adicionales para completar la solicitud.
- 4xx → Indican errores del lado del cliente que hizo mal una solicitud.
- 5xx → Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.

📧 Los códigos más comunes a la hora de interactuar con una API son:

- 200 → OK → Indica que todo está correcto.
- 201 → Created → Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
- 204 → No Content → Indica que la solicitud se completó correctamente pero no devolvió información. Este es común cuando se hacen peticiones con el verbo DELETE.
- 400 → Bad Request → Indica que algo está mal en la petición (no encontró algo).
- 401 → Unauthorized → Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
- 403 → Forbidden → Indica que no tenemos acceso a ese recurso aunque se esté autenticado.
- 404 → Not Found → Indica que no existe el recurso que se está intentando acceder.
- 500 → Internal Server Error → Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.

# Promesas
El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

Una Promesa (Promise) es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa.
Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona.

**Proxy** es una computadora que actua como un intermediador entre el cliente y el servidor. 

<img src="https://tudotecnologia.net/wp-content/uploads/2022/03/What-is-proxy-server-featured-BR.jpg" alt="Proxy" width=50%>

Promesas tienen 3 estados:
- Pendiente
- Cumplido (ha regresado la informacion)
- Rechazado

Una promesa pendiente puede cumplirse con un valor o rechazarse con un motivo (error).Cuando ocurre cualquiera de estas opciones, se llama a los controladores asociados en cola por el método then de una promesa. Si la promesa ya se ha cumplido o rechazado cuando se adjunta un manejador correspondiente, se llamará al manejador, por lo que no existe una condición de carrera entre la finalización de una operación asíncrona y la conexión de sus manejadores.

![Image](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

[Promise +info](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Fetch Post

⚠️ Hay permisos que se deben tomar en cuenta para que el intercambio sea seguro, hay que especificar el modo (mode), aquí se indica si se permite solicitudes de origen cruzado.

🔀 ¿Qué es un origen cruzado?

Un origen tiene `dominio/protocolo/puerto`, un origen cruzado denominado “Cross Origin” es la palabra que se utiliza para denominar el tipo de peticiones que se realizan a un dominio diferente del dominio de origen desde donde se realiza la petición.
Así que si se coloca cors, indica que se permiten ciertas solicitudes predeterminadas de origen cruzado como GET y POST para salvaguardar y evitar manipulaciones maliciosas. En el enlace detallan más sobre el concepto de Cors [aqui](https://javascript.info/fetch-crossorigin)

# Funciones Asincronas
La declaración de función async define una función asíncrona, la cual devuelve un objeto `AsyncFunction`.

#### Sintaxis
```JS
async function name([param[, param[, ... param]]]) {
   statements
}
```

#### Parametros
`name`: El nombre de la funcion.
`param`: El nombre de un argumento que se debe pasar a la funcion.
`statements`: Las declaraciones que conforman el cuerpo de la funcion.

Cuando se llama a una función `async`, esta devuelve un elemento [Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise). Cuando la función `async` devuelve un valor, `Promise` se resolverá con el valor devuelto. Si la función `async` genera una excepción o algún valor, `Promise` se rechazará con el valor generado.

Una función `async` puede contener una expresión [await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/await), la cual pausa la ejecución de la función asíncrona y espera la resolución de la `Promise` pasada y, a continuación, reanuda la ejecución de la función `async` y devuelve el valor resuelto.

![Asynchronous TypeScript](https://www.johnpapa.net/content/images/2020/02/async-ts-1.png)

# Try and Catch
🚨 Importante recordar que la estructura de `async/await` se compone por las palabras reservadas `async` y `await`:

1. La palabra `async` se coloca antes de la función (la otra forma es con funciones flecha en que el `async` va antes que los argumentos).
2. La palabra `await` se utiliza dentro de las funciones `async`.

# Generators
Un generador en JavaScript consta de una función generadora que muestra un objeto iterable Generator. La palabra reservada yield se usa para pausar y reanudar una función generadora.

```JS
function* generator() {
    yield 1;
    yield 2;
    yield 3; 
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
```

Fuente: [aquí](https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript-es)

