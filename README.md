# **HeroesApp-Angular**

El proyecto fue elaborado con [Angular CLI](https://github.com/angular/angular-cli) versión 13.3.3.
## **Descripción**

En esta aplicación se implementó:
- Un CRUD de Heroes mediante la conexión al backend JSON-Server
- Carga de módulos bajo el concepto LazyLoad
- Autocomplete en la búsqueda de héroes mediante el uso de los componentes de Angular Material.
- Protección de rutas mediante la implementación de Guards.
- Uso de operadores de RxJs(switchMap, map y tap) y de Observables (of).
- Diseño responsive básico mediante el uso del sistema Grid de Angular MAterial y de Angular Flex.


## **Temas** ##
<br>
A continuación, se presenta los temas aplicados en la elaboración de esta aplicación:

- Rutas Hijas y LazyLoad
- Angular Material
- Interfaces y tipado
- Pipes personalizados
- Variables de entorno
- Autocomplete de AngularMaterial
- Peticiones HTTP
- JSON-Server
- Angular Flex y Flexbox
- CRUD (Create, Read, Update, Delete)
- Pipes puros e impuros
- Snacks
- Dialogs
- Inyección de servicios manualmente
- Protección de rutas
- Rutas privadas
- Rutas públicas
- Servicio de autenticación
- Guards
- CanActivate
- Can Load
- Mantener la sesión del usuario 
- Operadors RxJs: switchMap, map y tap
- Observables 'of' de RxJs

Tecnologías utilizadas:

- Angular
- Angular Material
- Angular Flex
- JSON Server (backend)


<br>

## **JSON SERVER** 
https://www.npmjs.com/package/json-server

Es un paquete de node que permite tener rápidamente un backend para crear prototipos, provee una API REST falsa completa sin codificar nada. 

Para instalarlo debe utilizar el comando

```
npm install -g json-server
```

Se hizo uso de la base de datos `db.json` https://gist.github.com/Klerith/403c91e61d3c87284beb0dd138619958, esta tiene que ser descargada y colocada en algún directorio de interés. 

Levantar el JSON Server con el comando `json-server --watch db.json`

## **Recomendaciones**

<br>

- Recuerden reconstruir los módulos de Node con `npm install`

- Para correr el servidor de desarrollo ejecute `ng serve -o`. La aplicación se recargará automáticamente si cambia cualquiera de los archivos de origen.

- Para correr el backend de prueba dirijase al directorio donde se encuentra el archivo `db.json` y ejecute el comando `json-server --watch db.json`

- Si desea compilar el proyecto ejecute `ng build`.
