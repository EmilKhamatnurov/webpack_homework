// Функция обработки событий для переключателя громкости
export const handleChangeVolume = (element, weatherSounds) => {
	weatherSounds.forEach(sound => {
		sound.volume = element.target.value / 100;
	});
};
