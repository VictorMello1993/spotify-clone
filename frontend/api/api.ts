import axios from "axios";
import { ArtistItemList } from "../src/assets/database/artists";
import { SongItemList } from "../src/assets/database/songs";

const URL = "http://localhost:3000";

const reponseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistsArray = reponseArtists.data as ArtistItemList[];
export const songsArray = responseSongs.data as SongItemList[];
