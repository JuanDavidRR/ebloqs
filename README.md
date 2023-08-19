# Ebloqs

El presente proyecto documenta el sitio web de ebloqs.

## Tecnologías
- NextJS
- ReactJS
- Tailwind CSS
- Framer Motion
- React Icons


## Install

Una vez descargado o clonado el repositorio se debe correr el comando

```bash
npm install
```

## Run
Para correr el proyecto en modo desarrollo se debe de ejecutar el comando 

```python
npm run dev

```
## Build
Para correr el proyecto en modo desarrollo se debe de ejecutar el comando 

```javascript
npm run build

```
## Navegando en el proyecto
Para consultar todos los archivos core del proyecto deberá visitar el directorio SRC. En dicho directorio encontrará
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


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.