import { Link, useLocation } from "react-router-dom";
import { Artist, Song } from "../../api/api";
import { ArtistItemList } from "../assets/database/artists";
import { SongItemList } from "../assets/database/songs";
import SingleItem from "./SingleItem";

interface ItemListProps {
	title: string;
	items: number;
	itemsArray: ArtistItemList[] | SongItemList[] | Artist[] | Song[];
	path: string;
	idPath: string;
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
					.map((currentValue: any, index: number) => (
						<SingleItem idPath={idPath} {...currentValue} key={`${title}-${index}`} />
					))}
			</div>
		</div>
	);
}
