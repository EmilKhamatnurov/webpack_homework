export function createWeatherCard(weather) {
	if (!weather) {
		return;
	}
	const item = document.createElement('li');
	item.innerText = weather.name;
	// Добавляем изображение
	const weatherImage = document.createElement('img');
	weatherImage.classList?.add('weatherImage');
	weatherImage.src = weather.image;

	// Добавляем аудио
	const weatherAudio = document.createElement('audio');
	weatherAudio.src = weather.audio;

	// Добавляем иконку
	const weatherIcon = document.createElement('img');
	weatherIcon.classList?.add('weatherImage');
	weatherIcon.src = weather.icon;

	// Добавляем элементы
	item.appendChild(weatherAudio);
	item.appendChild(weatherIcon);

	return item;
}
