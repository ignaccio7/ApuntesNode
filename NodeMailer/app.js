import path from 'node:path';
import { fileURLToPath } from 'url'

import express from 'express';

import router from './src/routes/index.js'

const app = express();

// para que entienda los datos del formulario que se envian en texto plano
app.use(express.urlencoded({ extended: false }))
// para que entienda los datos del formulario en formato json
app.use(express.json())

//fileURLToPath(import.meta.url): Convierte la URL del módulo en una ruta de archivo.

//console.log(import.meta.url);
//file:///D:/NACHO/PRACTICAS/NODE/NodeMailer/app.js
//console.log(fileURLToPath(import.meta.url));
//D:\NACHO\PRACTICAS\NODE\NodeMailer\app.js
//console.log(path.dirname(fileURLToPath(import.meta.url)))
//D:\NACHO\PRACTICAS\NODE\NodeMailer


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


const publicUrl = path.join(__dirname, 'src', 'public')


app.use(express.static(path.join(__dirname, 'src', 'public')));

app.use(router)

app.listen(3000, () => {
	console.log(`Server running on http://localhost:3000`);
})