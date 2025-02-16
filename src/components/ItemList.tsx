import { Link, useLocation } from "react-router-dom";
import SingleItem from "./SingleItem";

interface ItemListProps {
	title: string;
	items: number;
	itemsArray: ArtistItem[] | SongItem[];
	path: string;
	idPath: string;
}

interface ArtistItem {
	id: number;
	image: string;
	name: string;
	banner: string;
}

interface SongItem {
	id: number;
	image: string;
	name: string;
	artist: string;
	audio: string;
	duration: string;
}

export default function ItemList({ title, items, itemsArray, path, idPath }: ItemListProps) {
	const { pathname } = useLocation();

	const isHome = pathname === "/";
	const finalItems = isHome ? items : Number.POSITIVE_INFINITY;

	return (
		<div className="item-list">
			<div className="item-list__header">
				<h2>{title} populares</h2>
				{isHome ? (
					<Link to={path} className="item-list__header">
						Mostrar tudo
					</Link>
				) : (
					<></>
				)}
			</div>
			<div className="item-list__container">
				{itemsArray
					.filter((_, index: number) => index < finalItems)
					.map((currentValue: ArtistItem | SongItem, index: number) => (
						<SingleItem idPath={idPath} {...currentValue} key={`${title}-${index}`} />
					))}
			</div>
		</div>
	);
}
