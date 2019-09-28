import { dbName, client } from "../../lib/mongodb";

export default async function handle(req, res) {
  await client.connect();

  const db = client.db(dbName);
  const collection = db.collection("test");

  const result = await collection.find({}).toArray();

  res.status(200).json(result);
  client.close();
}
