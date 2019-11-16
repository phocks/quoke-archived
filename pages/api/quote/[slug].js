import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../../lib/mongodb";

export default async function handle(req, res) {
  const { slug } = req.query;

  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("quotations");

  const result = await collection.findOne({ slug: slug });

  res.status(200).json(result);
  client.close();
}
