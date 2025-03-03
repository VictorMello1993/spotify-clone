import { useState } from "react";
import { Song } from "../../api/api";
import { SongItemList } from "../assets/database/songs";
import SongItem from "./SongItem";

interface SongListProps {
	songsArray: SongItemList[] | Song[];
}

export default function SongList({ songsArray }: SongListProps) {
	const [items, setItems] = useState(5); //Inicializando com 5 músicas

	return (
		<div className="song-list">
			{(songsArray as Song[])
				.filter((_, index) => index < items)
				.map((song, index) => (
					<SongItem _id={song._id as string} {...song} key={index} index={index} />
				))}
			<p
				className="song-list__see-more"
				onClick={() => {
					setItems(items + 5);
				}}
			>
				Ver mais
			</p>
		</div>
	);
}
