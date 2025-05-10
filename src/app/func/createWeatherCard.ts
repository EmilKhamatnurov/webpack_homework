import { WeathersList } from '../data/weatherData';

/**
 * Функция создания событий для карточек погоды
 * @param {HTMLElement} weather
 * @param {object} weatherData
 */
const setCardEventListener = (
	weather: HTMLLIElement,
	weatherData: WeathersList,
	weatherSoundElement: HTMLAudioElement): void => {
	weather.addEventListener("click", () => {
		const backgroundElement = document.querySelector(".background__image") as HTMLElement;
		if (backgroundElement) {
			backgroundElement.style.background = `url(${weatherData.image}) center center / cover no-repeat`;
		}

		const currentSound = localStorage.getItem("currentSound");
		if (weatherData.name !== currentSound) {
			document.querySelectorAll("audio").forEach(sound => {
				sound.currentTime = 0;
				sound.pause();
			});
			weatherSoundElement?.play();
			localStorage.setItem("currentSound", weatherData.name);
			return;
		}

		if (
			weatherData.name === currentSound &&
			weatherSoundElement.paused === true
		) {
			weatherSoundElement?.play();
			return;
		}
		weatherSoundElement?.pause();
	});
};

/**
 * Функция создания карточки погоды
 * @param {object[]} weather - массив данных для карточек погоды
 * @returns {HTMLElement}
 */
export function createWeatherCard(weather: WeathersList): Node {

	const item = document.createElement("li");
	item.classList?.add("weather__card");
	item.style.background = `url(${weather.image}) center center / cover no-repeat`;

	const weatherSound = document.createElement("audio");
	weatherSound.src = weather.audio;
	weatherSound.dataset.weather = weather.name;

	const weatherIcon = document.createElement("img");
	weatherIcon.src = weather.icon;
	weatherIcon.classList?.add("weather__icon");
	item.appendChild(weatherSound);
	item.appendChild(weatherIcon);

	setCardEventListener(item, weather, weatherSound);

	return item;
}
