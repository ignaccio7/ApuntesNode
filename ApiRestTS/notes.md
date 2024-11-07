# Comandos utilizados
## Para crear el proyecto
```bash
    npm init -y
```
## Para instalar typescript
```bash
    npm i typescript -D
```
Luego añadimos al **package.json** el script
ese tsc lo que hara es transfomar los ficheros de typescript a javascript para que el navegador o node los pueda leer y ejecutar
```json
    "scripts": {
        "tsc": "tsc",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```
Y ahora ejecutamos en la terminal
el -- es para evitar que el --init le llegue al parametro npm sino que le llegue al tsc que colocamos anteriormente
```bash
    npm run tsc -- --init
```
esto nos generara un archivo **tsconfig.json** donde estaran las configuraciones que usara para TS.

Y para compilar nuestros ficheros en la carpeta escpecificada en la propiedad outdir en el archivo tsconfig.json 
> "outDir": "./build"
```bash
    npm run tsc
```
Y por ultimo añadimos un script para que ejecute ese fichero
```json
    "scripts": {
        "tsc": "tsc",
        "start": "node build/index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```

Si quisieramos hacer un import de un **archivo.json** entonces deberiamos añadir algo en el tsconfig.json
> "resolveJsonModule": true

## Para Instalar un Linter
TS Standard
```bash
    npm i ts-standard -D
```

## Para Express
```bash
    npm i express -E
```
## Para instalar los tipos de express para typescript
```bash
    npm i @types/express -D
```
y agregamos un script para el link en el package.json
```bash
    "lint": "ts-standard",
```
Y tambien agregar en la parte final del package.json
```json
    "eslintConfig": {
        "extends": ["./node_modules/ts-standard/eslintrc.json"],
        "parserOptions": {
            "project": "./tsconfig.json"
        }
    }
```
Y en las configuraciones del vscode en settings tener el:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```
> o tambien puede ser
```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
}
```

## Para instalar un nodemon pero hay otro que lo que hara es hacer la conversion de ts a js para node

```bash
    npm i ts-node-dev -D
```

Y añadimos un script al package.json asi:
```bash
    "dev": "ts-node-dev src/index.ts",
```
Esta dependencia lo que hara es escuchar los cambios luego hara los cambios de ts a node y lo levantara el servicio