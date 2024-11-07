/**
 * Usaremos un modulo nativo de node y otro que descargaremos de npm
 * ReadLine https://nodejs.org/api/readline.html -> nos permite crear una interfaz para comunicarnos con la linea de comandos
 * npm chalk https://www.npmjs.com/package/chalk -> que nos ayudara a darle colores a nuestra terminal
 * npm i chalk
 * 
 * usaremos el objeto process que como sabemos es una variable global que contiene informacion acerca del proceso que se esta ejecutando en el hilo de nuestra aplicacion
 * 
 * y tambien usaremos nodemon para que automaticamnte se recargue ante cualquier cambio
 * https://www.npmjs.com/package/nodemon
 * npm i -D nodemon
 * añadimos el script "start" y este script es el unico del que no tenemos que colgarnos de la palabra run asi solo digitamos npm start
 */

// ----------------- min 5:37:00

// -> IMPORTACIONES
import { createInterface } from 'node:readline'
import chalk from 'chalk'

// -> DECLARACION DE VARIABLES
const tasks = []

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

// -> DECLARACION DE FUNCIONES
function displayMenu() {
    console.log(chalk.yellow.bold("*******To Do App*******"));
    console.log(chalk.blueBright("Options"));
    console.log("1. Add task");
    console.log("2. List tasks");
    console.log("3. Complete task");
    console.log("4. exit");
    // console.log("\n");
}

function addTask() {
    rl.question("Write your new task : ", (task) => {
        tasks.push({
            task,
            isComplete: false
        })
        console.log(chalk.green.bold("Task added successfully.!"));
        displayMenu()
        chooseOption()
    })
}

function listTasks() {
    console.log(chalk.white('\n *******Tasks******'));
    if (tasks.length === 0) {
        console.log(chalk.bgGreen('You are not tasks to do \n'))
    } else {
        tasks.forEach((task, index) => {
            let status = task.isComplete ? chalk.green("Tarea completada") : chalk.red("Sin completar")
            console.log(chalk.gray(`${index + 1} - ${task.task} - `) + status);
        })
    }
    displayMenu()
    chooseOption()
}

function completeTask() {
    rl.question(chalk.blue("Write to task number to comlplete :"), (taskNumber) => {
        const index = parseInt(taskNumber)

        if (index <= 0 || index > tasks.length) {
            console.log(chalk.red("Task to complete invalid"));
        }else{
            tasks[index - 1].isComplete = true;
            console.log(chalk.green("Task completed successfull!!!"));
        }
        displayMenu()
        chooseOption()
    })
}

function chooseOption() {
    // este metodo nos permitira hacer 1 preguntar y poder interactuar con la terminal
    rl.question(chalk.blueBright("Choose number to option : "), (choice) => {
        switch (choice) {
            case "1":
                // console.log("-> Add task");
                addTask()
                break;
            case "2":
                // console.log("-> List task");
                listTasks()
                break;
            case "3":
                // console.log("-> Complete task");
                completeTask()
                break;
            case "4":
                console.log(chalk.red("-> Bye bye"));
                rl.close() // con esta linea cerraremos la comunicacion con la terminal
                break;
            default:
                console.log(chalk.redBright("Invalid option. Try again \n"));
                displayMenu()
                chooseOption()
                break;
        }
    })
}

// -> EJECUCION DE CODIGO
displayMenu();
chooseOption();
