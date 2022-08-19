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

