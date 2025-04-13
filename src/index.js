import { weathersList } from './app/data/weatherData'
import './app/styles/index.scss'

const root = document.querySelector('#app')
const weathers = document.querySelector('#weathers')

function renderWeatherCard(weather) {
	const item = document.createElement('li')
	item.innerText = weather?.name

	// Создаем элемент изображения
	const weatherImage = document.createElement('img')
	weatherImage.classList?.add('weatherImage')
	weatherImage.src = weather.image

	// Добавляем аудио
	const weatherAudio = document.createElement('audio')
	weatherAudio.src = weather.audio
	weatherAudio.controls = true

	item.appendChild(weatherImage)
	item.appendChild(weatherAudio)
	weathers.appendChild(item)
}

weathersList.forEach(renderWeatherCard)
