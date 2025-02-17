import { Link, useParams } from "react-router-dom";
import { artistsArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import Player from "../components/Player";

export default function Song() {
	const { id } = useParams();

	const song = songsArray.find((song) => song._id === id);
	const artist = artistsArray.find((artist) => artist.name === song?.artist);

	const songsListFromArtist = songsArray.filter((item) => item.artist === artist?.name);

	const randomIndexBackward = Math.floor(Math.random() * (songsListFromArtist.length - 1));
	const randomIndexForward = Math.floor(Math.random() * (songsListFromArtist.length - 1));
	const randomIdFromArtistBackward = songsListFromArtist[randomIndexBackward]._id!;
	const randomIdFromArtistForward = songsListFromArtist[randomIndexForward]._id!;

	return (
		<div className="song">
			<div className="song__container">
				<div className="song__image-container">
					<img src={song?.image} alt={`Imagem da música ${song?.name}`} />
				</div>
			</div>
			<div className="song__bar">
				<Link to={`/artist/${artist?._id}`} className="song__artist-image">
					<img width={75} height={75} src={artist?.image} alt={`Imagem o Artista ${song?.artist}`} />
				</Link>

				<Player
					duration={song!.duration}
					randomIdFromArtistBackward={randomIdFromArtistBackward}
					randomIdFromArtistForward={randomIdFromArtistForward}
					audio={song!.audio}
				/>

				<div>
					<p className="song__name">{song?.name}</p>
					<p>{song?.artist}</p>
				</div>
			</div>
		</div>
	);
}
