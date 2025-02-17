import { artistsArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import ItemList from "./ItemList";

interface MainProps {
	type?: string;
}

export default function Main({ type }: MainProps) {
	return (
		<div className="main">
			{type === "artists" || type === undefined ? (
				<ItemList title="Artistas" items={5} itemsArray={artistsArray} path="/artists" idPath="/artist" />
			) : (
				<></>
			)}

			{type === "songs" || type === undefined ? (
				<ItemList title="Músicas" items={10} itemsArray={songsArray} path="/songs" idPath="/song" />
			) : (
				<></>
			)}
		</div>
	);
}
