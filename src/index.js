import { weathersList } from './app/data/weatherData';
import { createWeatherCard } from './app/func/createWeatherCard';
import './app/styles/index.scss';

const root = document.querySelector('#app');

const weathers = document.querySelector('#weathers');

weathersList.forEach(weather => {
	const weatherCard = createWeatherCard(weather);
	weathers.appendChild(weatherCard);
});
