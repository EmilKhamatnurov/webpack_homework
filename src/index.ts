import { weathersList } from "./app/data/weatherData";
import { createWeatherCard } from "./app/func/createWeatherCard";
import { handleChangeVolume } from "./app/func/handleChangeVolume";
import "./app/styles/index.scss";

// Элементы на странице
// Элемент списка карточек погоды
const weathers = document.querySelector(".weather__cards");
// Переключатель громкости
const volumeInput = document.querySelector(".volume__input");

if (weathers) {
	// Создаем карточки состояний погоды
	weathersList.forEach(weather => {
		const weatherCard = createWeatherCard(weather);
		weathers.appendChild(weatherCard);
	});
}

// Аудио на странице
const weatherSounds = document.querySelectorAll("audio");
if (volumeInput) {
	//Обработчик события для
	volumeInput.addEventListener("change", e =>
		handleChangeVolume(e, weatherSounds)
	);
}
