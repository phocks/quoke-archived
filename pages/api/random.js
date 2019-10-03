import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../lib/mongodb";

const random = async (req, res) => {
  const client = await MongoClient.connect(url, options);

  const db = client.db(dbName);
  const collection = db.collection("quotations");

  const random = await collection
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();

  res.status(200).json(random[0]);
  client.close();
};

export default random;
