# Conceptos iniciales
1. Controllers.- Donde se manejara la logica del negocio.
2. Database.- Donde ira la configuracion para la conexion con la base de datos.
3. Routes.- Las rutas en las que se expondra nuestra API.
4. Models.- Para traer los esquemas de la base de datos.
5. .env.- Donde tendremos las varibles de entorno(para almacenar constantes reutilizables como ser credenciales rutas base etc).

# Comandos utilizados

En la raiz de nuestro proyecto
```bash
    mkdir controllers,database,routes,models 
    touch index.js
```

Para inicializar el proyecto
```bash
    npm init
```

# Dependencias utilizadas
Express y dotenv
```bash
    npm i -E express dotenv
```
Nodemon
```bash
    npm i -D nodemon
```
> En el archivo **package.json** cambiar el script -> "start": "nodemon index.js",
Mongose
```bash
    npm i -E mongoose
```
Babel
```bash
    npm i -D -E @babel/core @babel/node @babel/preset-env
```
> Crear un archivo de nombre **babelrc* y copiar el siguiente contenido
```json
    {
        "presets": [
            "@babel/preset-env"
        ]
    }
```
> Y para decirle a node que lo utilice. En el archivo **package.json** cambiar el script -> "start": "nodemon --exec babel-node index.js",