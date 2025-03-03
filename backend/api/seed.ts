import { artistsArray } from "../../frontend/src/assets/database/artists";
import { songsArray } from "../../frontend/src/assets/database/songs";
import { database } from "./connect";

interface ArtistItem {
	id?: string | number;
	image: string;
	name: string;
	banner: string;
}

interface SongItem {
	id?: number | string;
	image: string;
	name: string;
	artist: string;
	audio: string;
	duration: string;
}

const newArtistsArray = artistsArray.map((artist) => {
	const newObj = { id: artist.id, ...artist };
	delete newObj.id;
	return newObj;
});

const newSongsArray = songsArray.map((song) => {
	const newObj = { ...song };
	delete newObj.id;
	return newObj;
});

await database.collection("songs").insertMany(newSongsArray);
await database.collection("artists").insertMany(newArtistsArray);
