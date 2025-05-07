import { IWeathersList } from '../data/weatherData';

/**
 * Функция создания событий для карточек погоды
 * @param {HTMLElement} weather
 * @param {object} weatherData
 */
const setCardEventListener = (
	weather: HTMLLIElement,
	weatherData: IWeathersList,
	weatherSoundElement: HTMLAudioElement): void => {

	// Добавляем обработчик события
	weather.addEventListener("click", () => {
		const backgroundElement = document.querySelector(".background__image") as HTMLElement;
		if (backgroundElement) {
			backgroundElement.style.background = `url(${weatherData.image}) center center / cover no-repeat`;
		}

		const currentSound = localStorage.getItem("currentSound");

		// Если нажали на неактивную карточку погоды, то играется другой звук
		// При этом все звуки сбрасываются
		if (weatherData.name !== currentSound) {
			document.querySelectorAll("audio").forEach(sound => {
				sound.currentTime = 0;
				sound.pause();
			});
			weatherSoundElement?.play();
			localStorage.setItem("currentSound", weatherData.name);
			return;
		}

		// Если нажали на активную карточку погоды, то звук ставится на паузу или проигрывается
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
export function createWeatherCard(weather: IWeathersList): Node {

	const item = document.createElement("li");
	// Добавляем класс для элемента
	item.classList?.add("weather__card");
	// Ставим фоновое изображение карты погоды
	item.style.background = `url(${weather.image}) center center / cover no-repeat`;

	// Добавляем аудио
	const weatherSound = document.createElement("audio");
	weatherSound.src = weather.audio;
	weatherSound.dataset.weather = weather.name;

	// Добавляем иконку
	const weatherIcon = document.createElement("img");
	// Задаем изображение иконки
	weatherIcon.src = weather.icon;
	// Добавляем класс для иконки
	weatherIcon.classList?.add("weather__icon");

	// Добавляем элементы
	item.appendChild(weatherSound);
	item.appendChild(weatherIcon);

	// Добавляем обработчики события для карты погоды
	setCardEventListener(item, weather, weatherSound);

	return item;
}
