import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../lib/mongodb";

export default async function handle(req, res) {
  const client = await MongoClient.connect(url, options);

  const db = client.db(dbName);
  const collection = db.collection("test");

  const result = await collection.find({}).toArray();

  res.status(200).json(result);
  client.close();
}
