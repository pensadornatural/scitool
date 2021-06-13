![logo](https://user-images.githubusercontent.com/84646649/119243644-a6714000-bb36-11eb-8acf-bee3f2454414.png)

# SciTool

SciTool es una librería JavaScript diseñada para escribir 100% en JavaScript el front-end de aplicaciones web, facilitando el desarrollo, especialmente en proyectos de Data Science. La interfaz de usuario se basa en un escritorio ilimitado con ventanas flotantes que permiten multitarea, llamadas **Documentos**.

## Uso

Se debe importar el archivo *scitool.min.js* en el *index.html* como cualquier librería, y escribir el programa con JavaScript y SciTool entre etiquetas **<script></script>** o en archivos *.js* como componentes. El archivo *scitool.js* solo conviene usarlo para depuración, pues pesa el doble que el archivo minificado.

Se recomienda que cada documento (ventana) o componente se escriba en un archivo aparte, para lograr una estructura clara que ayude a la mantención o actualización del software, y que además permita su reutilización en otros proyectos.

Para crear una aplicación web, se escriben sentencias como *AddDocument* para crear un nuevo documento, *AddButton*, *AddLabel*, etc. para crear objetos de la interfaz de usuario dentro del documento, y código en sus eventos que SciTool crea automáticamente como funciones nombradas con el mismo nombre de los objetos seguido del nombre del evento.

### Características:

- Los documentos se muestran al usuario instantáneamente, sin que deba esperar su descarga desde internet como sucede con las páginas web tradicionales, pues ya se descargaron en segundo plano al inicio.

- Cada documento puede escribirse en un archivo con la interfaz de usuario, datos y métodos, como un componente completo.

- No se requiere crear funciones de eventos. Estos están listos para ser programados en funciones como: function NombreObjeto_OnNombreEvento() {código...}

- Pueden escribirse componentes que no se referencian entre sí ni a sus objetos, para lograr componentes completamente reutilizables. Esto se puede conseguir porque cada objeto dispone de un método *Talk* a través del cual emitir mensajes, y un método *Listen* que escucha a todos los demás, de modo de poder programar las reacciones que correspondan en los objetos que deban reaccionar a uno o más mensajes en particular.

- Se incluye validación de datos automática, como enteros, reales, rangos, alfanuméricos, etc.

- Además, el usuario dispone de un escritorio ilimitado con infinitas mesas de trabajo para organizar sus documentos como desee.
  
### ¡Hola mundo!

El siguiente código crea un documento flotante con el mensaje *¡Hola mundo!* que aparece automáticamente cuando se carga. Aunque pudo haberse escrito todo en el mismo archivo *index.html*, se prefirió separar el documento flotante en un archivo aparte llamado *DocHolaMundo.js* para ejemplificar el uso de componentes.

Archivo: index.html
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="scitool.min.js"></script> //Importar SciTool.
    </head>

    <body>
        <script>
            sci.Begin() //Inicializar SciTool.
            sci.LoadComponent('DocHolaMundo.js') //Cargar documento.
        </script>
    </body>
</html>
```

Archivo: DocHolaMundo.js
```
sci.AddDocument(0,0,400,200,'','DocHolaMundo') //Crear documento llamado DocHolaMundo.
DocHolaMundo.AddLabel(10,30,'¡Hola Mundo!') //Añadir un label al documento DocHolaMundo.

function ComponentDocHolaMundo_OnLoaded() { //Abrir el documento cuando esté cargado.
    DocHolaMundo.Bring()
}
```

## PARTICIPACIÓN

Este proyecto es open source, y queda disponible a la comunidad tanto para su uso como para participar activamente, sea programando nuevas características, escribiendo el manual, realizando pruebas, difundiendo o aportando ideas. Todos son bienvenidos.

**Para colaborar desarrollando:**

El proyecto solo contiene un archivo de código fuente, en TypeScript, llamado *scitool.ts*. Puedes tomar uno de los issues o proponer uno nuevo, y luego crea una rama para desarrollarlo editando el archivo. Cuando termines, realiza un Pull Request.

# Licencia

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021, Gabriel Lucero
