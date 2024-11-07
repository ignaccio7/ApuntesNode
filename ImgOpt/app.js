
import fse from 'fs-extra'
import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminSvgo from 'imagemin-svgo'
import imageminWebp from 'imagemin-webp'
import imageminGifsicle from 'imagemin-gifsicle'
import sharp from 'sharp'

// las carpetas de entrada y salida
let inputFolder = 'src'
let outputFolder = 'opt'
// para establecer un ancho a cual redimencionaremos la imagen
let targetWidth = 1280
// esta sera la funcion que optimizara las imagenes
const processImg = async () => { 
    try {
        const files = await fse.readdir(inputFolder)

        for (const file of files) {
            let inputPath = `${inputFolder}/${file}`
            let outputPath = `${outputFolder}/${file}`

            await sharp(inputPath).resize(targetWidth).toFile(outputPath)

            await imagemin([outputPath],{
                destination: outputFolder,
                plugins:[
                    imageminJpegtran({ quality:80 }), // comprimir imagen con calidad del 80%
                    imageminSvgo(), // comprimir imagen svg
                    imageminWebp({ quality:80 }), // comprimir imagen webp con calidad del 80%
                    imageminGifsicle(), // Comprimir imagen gif
                ]
            })
            console.log(`Se ha optimizado la imagen: ${file}`);
        }

        console.log('Se an terminado de optimizar todas las imagenes');

    } catch (error) {
        console.log(error);
    }
}

processImg()
