import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface SingleItemProps {
	id: number;
	name: string;
	image: string;
	banner: string;
	artist: string;
	idPath: string;
}

export default function SingleItem({ id, name, image, artist, idPath }: SingleItemProps) {
	return (
		<Link to={`${idPath}/${id}`} className="single-item">
			<div className="single-item__div-image-button">
				<div className="single-item__div-image">
					<img className="single-item__image" src={image} alt={`Imagem do artista ${name}`} />
				</div>
				<FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
			</div>

			<div className="single-item__texts">
				<div className="single-item__2lines">
					<p className="single-item__title">{name}</p>
				</div>
				<p className="single-item__type">{artist ?? "Artista"}</p>
			</div>
		</Link>
	);
}
