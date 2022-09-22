# 🎲 ¿Qué es Webpack?

**Ideas/conceptos claves** \
Module bundlers son herramientas de frontend que nos permiten usar archivos con módulos JavaScript, entre otras características y convertiros a un JavaScript el cual el navegador pueda entender.

**Apuntes** \
Webpack es una herramienta que nos permite preparar nuestro código para llevarlo a producción (module bundler)
Webpack nos permite trabajar con:

- HTML
- CSS
- JavaScript
- Archivos estáticos
- Imágenes
- Fuentes

Tambien nos permite tener un modo en desarrollo para nuestros proyectos para hacer pruebas
Nacio en el 2012, desde ese entonces varias empresas lo usan como ser:

- Twitter
- Instagram
- PayPal

También nos permite:

- Gestionar dependencias
- Ejecutar tareas
- Conversión de archivos
- Nos permite trabajar en módulos

Permitiéndonos tener un código separado en desarrollo, pero en producción en una sola fuente.

**RESUMEN**  
Webpack es un module bundler que nos permite trabajar con una variedad de tecnologías web empezando desde HTML y terminando con JS. Además de tener soporte para archivos estáticos.

## 📖 Conceptos básicos

**Ideas/conceptos claves** \
Webpack es un paquete de módulos estáticos para aplicaciones de JS modernas

*Loader* Te permite hacer un bundle de cualquier recurso estático más allá de JavaScript

*Plugins* Extienden recursos para añadir configuraciones y particularidades de recursos externos

**Apuntes** \
Webpack construye un gráfico de dependencias que mapea cada módulo para con verlo en uno o más módulos

Desde webpack 4 ya no dependemos de tener un archivo de configuración, pero si debemos tener un punto de entrada

Tambien tendremos que tener un punto de salida
En este punto se creará nuestro proyecto una vez esté preparado

Normalmente es la carpeta dist ⇒ Distribution

Tambien contamos con diferentes modos

- Modo de desarrollo
- Modo de producción
- Modos de performance

[Concept | WebPack](https://webpack.js.org/concepts/)
