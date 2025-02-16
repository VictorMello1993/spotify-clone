import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SongList from "../components/SongList";

export default function Artist() {
	return (
		<div className="artist">
			<div
				className="artist__header"
				style={{
					backgroundImage:
						"linear-gradient(to bottom, var(--_shade), var(--_shade)), url(https://i.scdn.co/image/ab67618600001016909a162796dbc3629a1fadeb)",
				}}
			>
				<h2 className="artist__title">Jorge & Mateus</h2>
			</div>
			<div className="artist__body">
				<h2>Populares</h2>
				<SongList />
			</div>

			<Link to="/song/1">
				<FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
			</Link>
		</div>
	);
}
