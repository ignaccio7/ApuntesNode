
import axios from 'axios'
import chalk from 'chalk'

const API_KEY = 'a95bcc3e4182cc51463b2252bb73e742'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

async function getWeather({ city }) {
    try {
        let endpoint = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`

        const response = await axios.get(endpoint,{
            params:{
                q: city,
                appid: API_KEY,
                units:"metric"
            }
        })
        // console.log(response);
        return response.data

    } catch (error) {
        console.log(chalk.red(error));
        throw new Error(`No es posible obtener la informacion de: ${city}`)
    }
}

function displayWeather(city, weatherData){
    console.log(chalk.yellow(`\nInformacion del clima: ${city}`));
    console.log(chalk.yellow("*******************************"));
    console.log(chalk.cyan("Descripcion:",weatherData.weather[0].description));
    console.log(chalk.cyan("Temperatura:",weatherData.main.temp),"°C");
    console.log(chalk.cyan("Humedad:",weatherData.main.humidity),"%");
}

function handleError(err){
    console.log(chalk.red("Error:",err.message));
    process.exit(1)
}


function initApp() {
    let city = process.argv[2]
    // console.log(city);

    if (!city) {
        console.log(chalk.red("Por favor proporciona un nombre de lugar o ciudad"));
        console.log(chalk.white("Ejecuta la instruccion de la siguiente forma: node app.js <ciudad o pais>"));
    }

    getWeather({ city })
      .then(weatherData=>{
        displayWeather(city, weatherData)
      })
      .catch(handleError)
}

initApp()  