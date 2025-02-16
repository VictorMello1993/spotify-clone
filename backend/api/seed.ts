import { artistArray } from "../../src/assets/database/artists";
import { songsArray } from "../../src/assets/database/songs";
import { database } from "./connect";

const newArtistArray = artistArray.map((artist) => {
	const newArtist = { ...artist };
	delete newArtist.id;

	return newArtist;
});

const newSongArray = songsArray.map((song) => {
	const newSong = { ...song };
	delete newSong.id;

	return newSong;
});

const responseSongs = await database.collection("songs").insertMany(newSongArray);
const responseArtists = await database.collection("artists").insertMany(newArtistArray);

console.log(responseSongs);
console.log(responseArtists);
