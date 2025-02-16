import { Link } from "react-router-dom";
import { SongItemList } from "./ItemList";

interface SongItemProps extends SongItemList {
	index: number;
}

export default function SongItem({ name, duration, image, id, index }: SongItemProps) {
	return (
		<Link to={`/song/${id}`} className="song-item">
			<div className="song-item__number-album">
				<p>{index + 1}</p>
				<div className="song-item__album">
					<img src={image} alt={`Imagem da música ${name}`} className="song-item__image" />
					<p className="song-item__name">{name}</p>
				</div>
			</div>
			<p>{duration}</p>
		</Link>
	);
}
