import { weathersList } from './app/data/weatherData';
import { createWeatherCard } from './app/func/createWeatherCard';
import './app/styles/index.scss';

const weathers = document.querySelector('.weather__cards');

weathersList.forEach(weather => {
	const weatherCard = createWeatherCard(weather);
	weathers.appendChild(weatherCard);
});
