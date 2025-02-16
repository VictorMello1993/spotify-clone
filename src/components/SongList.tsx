import SongItem from "./SongItem";

export default function SongList() {
	return (
		<div className="song-list">
			<SongItem />
			<SongItem />
			<SongItem />
			<SongItem />
			<SongItem />
			<p className="song-list__see-more">Ver mais</p>
		</div>
	);
}
