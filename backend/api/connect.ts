import { MongoClient } from "mongodb";

const URI = process.env.URI_CONNECTION_MONGO as string;

const client = new MongoClient(URI);
const database = client.db("spotify-clone-db");

export { database };
