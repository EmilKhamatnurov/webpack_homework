const setCardEventListener = weather => {};

export function createWeatherCard(weather) {
	if (!weather) {
		return;
	}
	const item = document.createElement('li');

	// Добавляем класс для элемента
	item.classList?.add('weather__card');
	// Ставим фоновое изображение карты погоды
	item.style.background = `url(${weather.image}) center center / cover no-repeat`;
	setCardEventListener(weather);

	// Добавляем аудио
	const weatherAudio = document.createElement('audio');
	weatherAudio.src = weather.audio;

	// Добавляем иконку
	const weatherIcon = document.createElement('img');
	// Задаем изобраджение иконки
	weatherIcon.src = weather.icon;
	// Добавляем класс для иконки
	weatherIcon.classList?.add('weather__icon');

	// Добавляем элементы
	item.appendChild(weatherAudio);
	item.appendChild(weatherIcon);

	return item;
}
