/** Изображения состояний погоды */
import rainyImage from '../../assets/rainy-bg.jpg';
import summerImage from '../../assets/summer-bg.jpg';
import winterImage from '../../assets/winter-bg.jpg';
/** Звуки состояний погоды */
import rainSound from '../../assets/sounds/rain.mp3';
import summerSound from '../../assets/sounds/summer.mp3';
import winterSound from '../../assets/sounds/winter.mp3';
/** Иконки состояний погоды */
import rainIcon from '../../assets/icons/cloud-rain.svg';
import winterIcon from '../../assets/icons/cloud-snow.svg';
import summerIcon from '../../assets/icons/sun.svg';

/** Название состояний погоды */
export const stateNames = {
	SUMMER: 'Summer',
	WINTER: 'Winter',
	RAINY: 'Rainy',
};

/** Список данных разных состояний погоды */
export const weathersList = [
	{
		name: stateNames.SUMMER,
		image: summerImage,
		audio: summerSound,
		icon: summerIcon,
	},
	{
		name: stateNames.WINTER,
		image: winterImage,
		audio: winterSound,
		icon: winterIcon,
	},
	{
		name: stateNames.RAINY,
		image: rainyImage,
		audio: rainSound,
		icon: rainIcon,
	},
];
