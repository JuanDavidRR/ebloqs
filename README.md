# Ebloqs

El presente proyecto documenta el sitio web de ebloqs en su versión de lanzamiento.

## Tecnologías
- NextJS
- ReactJS
- Tailwind CSS
- Framer Motion
- React Icons

## Antes de iniciar:
- (Opcional) Si se desea actualizar el repositorio en la nube se debe contar con una cuenta en GitHub y tener Git instalado en el equipo
- Instalar NodeJS para poder ejecutar el proyecto, la instalación es muy breve. Tutorial: https://www.youtube.com/watch?v=SwUKKCS3r3c
- Instalar NPM para la gestión de paquetes. la instalación es muy breve. Tutorial: https://www.youtube.com/watch?v=Ue6g4udgbdI
- Tener algún editor de código para realizar los cambios. Se recomienda Visual Studio Code: https://code.visualstudio.com/

## Descargar el proyecto

Para comenzar a trabajar en este proyecto hay dos alternativas: Descargar los archivos del proyecto en formato zip o clonar el repositorio.

### Opción 1 (recomendada): Descargar el proyecto en ZIP

Este proceso se realiza desde la página principal del repositorio ubicada en https://github.com/JuanDavidRR/ebloqs. Allí habrá un botón verde con la leyenda <Code> el cual abre el panel de opciones para descargar el repositorio. Para descargarlo simplemente se debe seleccionar la opción (Descargar ZIP). Posteriormente se debe descromprimir la carpeta y arrastrarla en el editor de código de preferencia (recomendamos Visual Studio Code)

### Opción 2: Clonar el repositorio 

Para este proceso se debe de tener una cuenta en github y haber descargado y configurado git en el equipo: 

Instalación Git: https://www.youtube.com/watch?v=F02LEVYEmQw

Posteriormente para clonar el repositorio se deben ejecutar los comandos:

```bash
git clone https://github.com/JuanDavidRR/ebloqs.git
```

## Instalar Dependiencias

Para ejecutar este paso se debe de contar con la instalación de NodeJS, NPM y tener el proyecto ya descargado.

Una vez descargado o clonado el repositorio se debe ejecutar el siguiente comando para descargar los paquetes de las dependencias. El comando puede ser ejecutado en Visual Studio Code presionando. Para ello debemos ir a la parte superior de la interfaz y dar click sobre la pestaña (Terminal) y luego seleccionar la opción (Split terminal) . Una vez teniendo disponible la consola podemos escribir el comando:

```bash
npm install
```

Esto descargará todas las dependencias del proyecto para poder ejecutarlo y realizar pruebas.

## Ejecutar proyecto
Para ejecutar el proyecto en modo local se debe de ejecutar el comando en la terminal de Visual Studio code.

```javascript
npm run dev
```

El puerto por defecto en el que se abrira será: http://localhost:3000/. Allí estará el proyecto en ejecución. Por lo que luego de esperar debemos dirigirnos a esa dirección.

## Navegando en el proyecto

### Recomendación
Si su única intención es cambiar texto o enlaces dentro del sitio haga lo siguiente: (Se debe de contar con algún editor de código como VISUAL STUDIO CODE)

#### Use el buscador de la herramienta para encontrar lo que buscador
Ejemplo: Si desea buscar cambiar el titulo (Soy un título secundario). 
- Seleccione el icono de lupa ubicado en la esquina superior izquierda en el menú lateral de su Visual Studio Code. 
- En el cuadro (Search) coloque el texto del contenido que desea cambiar.
- Si hay alguna coincidencia debajo saldrá una sección con el fragmento que desea cambiar, de cliq a elemento. Esto lo llevará al archivo y la sección donde se encuentra dicho contenido. Simplemente realice los cambios necesarios.
- Una vez realizados los cambios, vaya a la parte superior izquierda de su editor de código en la sección (File) y seleccione la opción SAVE ALL o Guardar todo

### Jerarquía de los archivos
Para consultar todos los archivos core del proyecto deberá visitar el directorio SRC. En dicho directorio encontrará:
```python
/src/components
```
Carpeta destinada al almacenamiento de cualquier tipo de elementos rehusables.
Como botones, footer, navbar, cartas, etc
```javascript
/src/sections
```
Carpeta destinada al almacenamiento de las secciones completas del sitio.
Por ejemplo, sección de hero, testimonios, proyectos, cómo funciona, etc

```javascript
/src/app
```
Carpeta destinada al almacenamiento de los componentes de enrutamiento del sitio. Por ejemplo page.jsx, que representa el home /marketplace que representa la página destinada al marketplace. Otros archivos a tener en cuenta:
- Layout: En este archivo se envolverá el sitio, por lo que es ideal para trabajar la metadata y estructura principal

### Estilos
```javascript
/src/styles/
```
En dicha carpeta se encontrará el global.css donde se encuentra todo el css del proyecto. En index.js estarán todas las variables que se pueden reusar, dichas están construidas en tailwind

### Utils.
```javascript
/src/styles/
```
En dicha carpeta se encontrará la carpeta de animaciones
```javascript
/src/utils/animations
```
Allí podrá verse listadas las animaciones del sitio web
```javascript
/src/utils/constants
```
Allí podrá verse listada toda la fake data del sitio web. Como menus, testimonios, equipo, etc.


# Pasos para publicar cambios

## 1. Crear la carpeta Out
Crear el "out" del proyecto que es la carpeta que se debe subir al servidor para que pueda ser vista por el usuario final para ello se necesita correr el siguiente script en la consola o terminal:

``` bash
  npm run build
```


Esto generará una nueva carpeta en el proyecto llama "out".

## 2. Comprimir los archivos

Con el explorador de archivos vamos a la carpeta raiz del proyecto y buscamos la carpeta llamada "out", entramos alli seleccionamos todos los archivos y los comprimimos en formato ZIP.

## 3. Entrar a cpanel y abrir el explorador de archivos

Entramos a nuestro servidos de Cpanel con usuario y contraseña, en el icono de lupa buscamos (Administrador de archivos). Una vez allí buscamos la carpeta "public_html" dentro de ella eliminamos todos los archivos que se encuentren allí para subir una nueva actualización.


## 4. Subir los archivos al servidor y descomprimirlo

En las opciones superiores hay una opcion que se llama "cargar" seleccionamos alli, posteriormente se nos abre el explorador y seleccionamos el archivo .zip generadó anteriormente, esperamos a que carge la subida al servidor.

## 5. Descomprimir los archivos

una vez subido el zip a la carpeta "public_html" procederemos a descomprimirlo para ello damos click derecho al .zip en el servidor y seleccionamos la opción de "expand" o "descomprimir" una vez descomprimidos los archivos ya nuetsro sitio deberia estar funcional.
