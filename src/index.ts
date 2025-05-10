import { weathersList } from "./app/data/weatherData";
import { createWeatherCard } from "./app/func/createWeatherCard";
import { handleChangeVolume } from "./app/func/handleChangeVolume";
import "./app/styles/index.scss";

const weathers = document.querySelector(".weather__cards");
const volumeInput = document.querySelector(".volume__input");

if (weathers) {
	weathersList.forEach(weather => {
		const weatherCard = createWeatherCard(weather);
		weathers.appendChild(weatherCard);
	});
}

const weatherSounds = document.querySelectorAll("audio");
if (volumeInput) {
	volumeInput.addEventListener("change", e =>
		handleChangeVolume(e, weatherSounds)
	);
}
