import './app/styles/index.scss'

// const root = document.querySelector('#app')
const weathers = document.querySelector('#weathers')

const weathersList = [
	{
		name: 'summer',
		image: '/assets/summer-bg.jpg',
		audio: '/assets/sounds/summer.mp3',
	},
	{
		name: 'winter',
		image: '/assets/winter-bg.jpg',
		audio: '/assets/sounds/winter.mp3',
	},
	{
		name: 'rainy',
		image: '/assets/rainy-bg.jpg',
		audio: '/assets/sounds/rain.mp3',
	},
]

function renderWeatherCard(weather) {
	const item = document.createElement('li')
	item.innerText = weather?.name

	// Создаем элемент изображения
	const weatherImage = document.createElement('img')
	weatherImage.classList?.add('weatherImage')

	// Устанавливаем путь к изображению
	weatherImage.src = weather?.image

	// Добавляем аудио
	const weatherAudio = document.createElement('audio')
	weatherAudio.src = '/assets/sounds/rain.mp3'
	{
		/* <audio controls src="/shared-assets/audio/t-rex-roar.mp3"></audio> */
	}
	weathers.appendChild(item)
	weathers.appendChild(weatherImage)
	weathers.appendChild(weatherAudio)
}

weathersList.forEach(renderWeatherCard)
