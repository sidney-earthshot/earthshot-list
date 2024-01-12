import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("earthshot-list");

export default db;