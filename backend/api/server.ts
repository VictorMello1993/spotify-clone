import express from "express";
import { database } from "./connect";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.get("/artists", async (req, res) => {
	const artistsCollection = await database.collection("artists").find({}).toArray();
	res.send(artistsCollection);
});

app.get("/songs", async (req, res) => {
	const songsCollection = await database.collection("songs").find({}).toArray();
	res.send(songsCollection);
});

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});
