// Images
import rainyImage from '../../assets/rainy-bg.jpg'
import summerImage from '../../assets/summer-bg.jpg'
import winterImage from '../../assets/winter-bg.jpg'
// Sounds
import rainSound from '../../assets/sounds/rain.mp3'
import summerSound from '../../assets/sounds/summer.mp3'
import winterSound from '../../assets/sounds/winter.mp3'

export const weathersList = [
	{
		name: 'summer',
		image: summerImage,
		audio: summerSound,
	},
	{
		name: 'winter',
		image: winterImage,
		audio: winterSound,
	},
	{
		name: 'rainy',
		image: rainyImage,
		audio: rainSound,
	},
]
