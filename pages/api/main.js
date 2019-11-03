import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../lib/mongodb";

const main = async (req, res) => {
  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("quotations");

  try {
    const result = await collection
      .find({ addedBy: "quoke" })
      .sort({ date: -1 })
      .toArray();
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

export default main;
