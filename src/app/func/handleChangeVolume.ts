// Функция обработки событий для переключателя громкости
export const handleChangeVolume = (event: Event, weatherSounds: NodeListOf<HTMLAudioElement>): void => {
	const target = event.target as HTMLInputElement | null;

	if (target && target.value) {
		weatherSounds.forEach(sound => {
			sound.volume = Number(target.value) / 100;
		});
	}
};
