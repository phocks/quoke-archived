import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../../lib/mongodb";

export default async (req, res) => {
  const { username } = req.query;

  console.log(req.query)

  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("quotations");

  try {
    const result = await collection
      .find({ addedBy: username })
      .sort({ date: -1 })
      .limit(10)
      .toArray();
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

