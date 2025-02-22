import { faBackwardStep, faCirclePause, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface PlayerProps {
	duration: string;
	randomIdFromArtistBackward: number | string;
	randomIdFromArtistForward: number | string;
	audio: string;
}

const ONE_SECOND = 1000;

function formatTime(timeInSeconds: number) {
	const minutes = Math.floor(timeInSeconds / 60);
	const minutesFormatted = minutes.toString().padStart(2, "0");

	const seconds = Math.floor(timeInSeconds - minutes * 60);
	const secondsFormatted = seconds.toString().padStart(2, "0");

	return `${minutesFormatted}:${secondsFormatted}`;
}

function timeInSeconds(timeString: string) {
	const [minutes, seconds] = timeString.split(":");

	return Number(seconds) + Number(minutes) * 60;
}

export default function Player({
	duration,
	randomIdFromArtistBackward,
	randomIdFromArtistForward,
	audio,
}: PlayerProps) {
	const audioPlayer = useRef<HTMLAudioElement>(null);
	const progressBar = useRef<HTMLDivElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(formatTime(0));
	const durationInSeconds = timeInSeconds(duration);

	function playPause() {
		isPlaying ? audioPlayer.current?.pause() : audioPlayer.current?.play();
		setIsPlaying(!isPlaying);
		setCurrentTime(formatTime(audioPlayer.current!.currentTime));
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (isPlaying) {
				setCurrentTime(formatTime(audioPlayer.current!.currentTime));
			}
			//Preenchendo a barra de progresso enquanto que a música está sendo reproduzida
			progressBar.current?.style.setProperty(
				"--_progress",
				`${(audioPlayer.current!.currentTime / durationInSeconds) * 100}%`,
			);
		}, ONE_SECOND);
		return () => clearInterval(intervalId);
	}, [isPlaying]);

	return (
		<div className="player">
			<div className="player__controllers">
				<Link to={`/song/${randomIdFromArtistBackward}`}>
					<FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
				</Link>
				<FontAwesomeIcon
					className="player__icon player__icon--play"
					icon={isPlaying ? faCirclePause : faCirclePlay}
					onClick={() => playPause()}
				/>
				<Link to={`/song/${randomIdFromArtistForward}`}>
					<FontAwesomeIcon className="player__icon" icon={faForwardStep} />
				</Link>
			</div>
			<div className="player__progress">
				<p>{currentTime}</p>
				<div className="player__bar">
					<div ref={progressBar} className="player__bar-progress"></div>
				</div>
				<p>{duration}</p>
			</div>
			<audio ref={audioPlayer} src={audio}></audio>
		</div>
	);
}
