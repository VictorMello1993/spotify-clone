import axios from "axios";

export interface Artist {
	_id?: string;
	image: string;
	name: string;
	banner: string;
}

export interface Song {
	_id?: string;
	image: string;
	name: string;
	artist: string;
	audio: string;
	duration: string;
}

const URL = "http://localhost:3000";

const reponseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistsArray = reponseArtists.data as Artist[];
export const songsArray = responseSongs.data as Song[];
