import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { artistsArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import SongList from "../components/SongList";

export default function Artist() {
	const { id } = useParams();

	const artist = artistsArray.find((item) => item._id === id);
	const songsListFromArtist = songsArray.filter((item) => item.artist === artist?.name);

	const randomIndex = Math.floor(Math.random() * (songsListFromArtist.length - 1));
	const randomIdFromArtist = songsListFromArtist[randomIndex]._id;

	return (
		<div className="artist">
			<div
				className="artist__header"
				style={{
					backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artist?.banner})`,
				}}
			>
				<h2 className="artist__title">{artist?.name}</h2>
			</div>
			<div className="artist__body">
				<h2>Populares</h2>
				<SongList songsArray={songsListFromArtist} />
			</div>

			<Link to={`/song/${randomIdFromArtist}`}>
				<FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
			</Link>
		</div>
	);
}
