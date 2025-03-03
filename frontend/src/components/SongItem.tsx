import { Link } from "react-router-dom";
import { SongItemList } from "../assets/database/songs";
import { convertFromMillisToSeconds, formatTime } from "../utils/Utils";

interface SongItemProps extends SongItemList {
	index: number;
	_id: string;
}

export default function SongItem({ name, duration, image, _id, index }: SongItemProps) {
	const durationInSeconds = convertFromMillisToSeconds(duration as number);
	const durationFormatted = formatTime(durationInSeconds);

	return (
		<Link to={`/song/${_id}`} className="song-item">
			<div className="song-item__number-album">
				<p>{index + 1}</p>
				<div className="song-item__album">
					<img src={image} alt={`Imagem da música ${name}`} className="song-item__image" />
					<p className="song-item__name">{name}</p>
				</div>
			</div>
			<p>{durationFormatted}</p>
		</Link>
	);
}
