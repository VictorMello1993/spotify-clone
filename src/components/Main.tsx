import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import ItemList from "./ItemList";

export default function Main() {
	return (
		<div className="main">
			<ItemList title="Artistas" items={5} itemsArray={artistArray} path="/artists" idPath="/artist" />
			<ItemList title="Músicas" items={10} itemsArray={songsArray} path="/songs" idPath="/song" />
		</div>
	);
}
