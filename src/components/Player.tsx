import { faBackwardStep, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Player() {
	return (
		<div className="player">
			<div className="player__controllers">
				<FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
				<FontAwesomeIcon className="player__icon player__icon--play" icon={faCirclePlay} />
				<FontAwesomeIcon className="player__icon" icon={faForwardStep} />
			</div>
			<div className="player__progress">
				<p>00:00</p>
				<div className="player__bar">
					<div className="player__bar-progress"></div>
				</div>
				<p>02:50</p>
			</div>
		</div>
	);
}
