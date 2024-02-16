import getImg from './gather-icons.js';

const tempTomorrow = document.getElementById('temp-tomorrow');
const tempAfterTomorrow = document.getElementById('temp-after-tomorrow')
const tomorrowCondition = document.getElementById('tomorrow-descriptor');
const afterTomorrowCondition = document.getElementById('after-tomorrow-descriptor');
const dateTomorrow = document.querySelector('#tomorrow > .date');
const dateAfterTomorrow = document.querySelector('#after-tomorrow > .date');
const dayAfterTomorrow = document.querySelector('#after-tomorrow > p:first-child');
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'WednesDay', 'Thursday', 'Friday', 'Saturday'];

const iconTomorrow = document.getElementById('icon-tomorrow');
const iconAfterTOmorrow = document.getElementById('icon-after-tomorrow');

export default function localForecast(localeInput, format) {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=f9f43b45bd044b1786f203709242901&days=3&q=${localeInput}`, { mode : 'cors' })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        const tomorrow = response.forecast.forecastday[1];
        const afterTomorrow = response.forecast.forecastday[2];
        const conditionTomorrow = tomorrow.day.condition.text;
        const conditionAfterTomorrow = afterTomorrow.day.condition.text;
        const day = new Date(afterTomorrow.date).getDay();

        dateTomorrow.textContent = tomorrow.date;
        dateAfterTomorrow.textContent = afterTomorrow.date;

        if (format === 'fahrenheit') {
            tempTomorrow.textContent = Math.round(tomorrow.day.maxtemp_f) + '°';
            tempAfterTomorrow.textContent = Math.round(afterTomorrow.day.maxtemp_f) + '°';
        } else {
            tempTomorrow.textContent = Math.round(tomorrow.day.maxtemp_c) + '°';
            tempAfterTomorrow.textContent = Math.round(afterTomorrow.day.maxtemp_c) + '°';
        }

        tomorrowCondition.textContent = conditionTomorrow;
        afterTomorrowCondition.textContent = conditionAfterTomorrow;
        dayAfterTomorrow.textContent = dayNames[day];

        getImg(conditionTomorrow, iconTomorrow);
        getImg(conditionAfterTomorrow, iconAfterTOmorrow);
    });
}