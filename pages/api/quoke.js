import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../lib/mongodb";

const index = async (req, res) => {
  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("quotations");

  try {
    const result = await collection.find({ addedBy: "quoke" }).toArray();
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

export default index;
