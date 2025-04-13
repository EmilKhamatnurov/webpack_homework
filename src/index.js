import './index.css'

const root = document.querySelector('#app')
const weathers = document.querySelector('#weathers')

const weathersList = [
	{ name: 'summer' },
	{ name: 'winter' },
	{ name: 'spring' },
]

function renderWeatherCard(weather) {
	const item = document.createElement('li')
	item.innerText = weather?.name
	weathers.appendChild(item)
}

weathersList.forEach(renderWeatherCard)
