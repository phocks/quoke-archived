import { MongoClient, ObjectID } from "mongodb";

import { dbName, url, options } from "../../../lib/mongodb";

export default async function handle(req, res) {
  const { slug } = req.query;
  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("quotations");

  const searchString = "^" + slug.replace(/\-/g, ".*");

  const regexSearch = new RegExp(searchString, "i");

  console.log(regexSearch)
  

  const result = await collection.find({ text: regexSearch }).toArray();

  res.status(200).json(result);
  client.close();
}
