import getImg from './gather-icons.js';

const locale = document.getElementById('locale');
const tempToday = document.getElementById('temp-today');
const condition = document.getElementById('descriptor');
const feelsLike = document.getElementById('feels-like');
const windData = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const dateToday = document.querySelector('#today > .date');
const visibility = document.getElementById('visibility');
const uvIndex = document.getElementById('uv');
const icon = document.getElementById('icon-today');

export default function localWeather(localeInput, format) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=f9f43b45bd044b1786f203709242901&q=${localeInput}`, { mode : 'cors' })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        locale.textContent = response.location.name;
        dateToday.textContent = response.current.last_updated;
        const conditionAdjective = response.current.condition.text;
        condition.textContent = conditionAdjective;
        if (format === 'fahrenheit') {
        tempToday.textContent = Math.round(response.current.temp_f) + '°';
        feelsLike.textContent = Math.round(response.current.feelslike_f) + '°';
        } else {
        tempToday.textContent = Math.round(response.current.temp_c) + '°';
        feelsLike.textContent = Math.round(response.current.feelslike_c) + '°';
        }
        windData.textContent = response.current.wind_mph + ' mph ' + response.current.wind_dir;
        visibility.textContent = response.current.vis_miles + ' miles';
        humidity.textContent = response.current.humidity + '%';
        uvIndex.textContent = response.current.uv;
        getImg(conditionAdjective, icon);
    })
}