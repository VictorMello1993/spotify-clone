export function convertFromMillisToSeconds(timeInMillis: number) {
	return timeInMillis / 1000;
}

export function formatTime(timeInSeconds: number) {
	const minutes = Math.floor(timeInSeconds / 60);
	const minutesFormatted = minutes.toString().padStart(2, "0");

	const seconds = Math.floor(timeInSeconds - minutes * 60);
	const secondsFormatted = seconds.toString().padStart(2, "0");

	return `${minutesFormatted}:${secondsFormatted}`;
}

export function timeInSeconds(timeString: string) {
	const [minutes, seconds] = timeString.split(":");
	return Number(seconds) + Number(minutes) * 60;
}
