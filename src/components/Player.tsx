import { faBackwardStep, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface PlayerProps {
	duration: string;
	randomIdFromArtistBackward: number;
	randomIdFromArtistForward: number;
}

export default function Player({ duration, randomIdFromArtistBackward, randomIdFromArtistForward }: PlayerProps) {
	return (
		<div className="player">
			<div className="player__controllers">
				<Link to={`/song/${randomIdFromArtistBackward}`}>
					<FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
				</Link>
				<FontAwesomeIcon className="player__icon player__icon--play" icon={faCirclePlay} />
				<Link to={`/song/${randomIdFromArtistForward}`}>
					<FontAwesomeIcon className="player__icon" icon={faForwardStep} />
				</Link>
			</div>
			<div className="player__progress">
				<p>00:00</p>
				<div className="player__bar">
					<div className="player__bar-progress"></div>
				</div>
				<p>{duration}</p>
			</div>
		</div>
	);
}
