import './styles.css';
import localWeather from './weather-current.js';
import localForecast from './weather-forecast.js';

const getWeather = document.getElementById('get-weather');
const location = document.getElementById('location');
const degrees = document.getElementById('degrees');

localWeather('Tucson', 'fahrenheit');
localForecast('Tucson', 'fahrenheit');

getWeather.addEventListener('click', ()  => {
    localWeather(location.value, degrees.value);
    localForecast(location.value, degrees.value);
});
