import { MongoClient } from "mongodb";

const URI =
	"mongodb+srv://admin:admin@spotify-clone-cluster.kh0em.mongodb.net/?retryWrites=true&w=majority&appName=spotify-clone-cluster";

const client = new MongoClient(URI);
const database = client.db("spotify-clone-db");

export { database };
