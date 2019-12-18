import { insertOne } from "../../lib/mongodb";

export default async function handle(req, res) {
  // const client = await MongoClient.connect(url, options);

  // const db = client.db(dbName);
  // const collection = db.collection("quotations");

  // const random = await collection
  //   .aggregate([{ $sample: { size: 1 } }])
  //   .toArray();

  // res.status(200).json(random[0]);
  // client.close();

  const result = await insertOne("authors", { name: "Stephen Hawking" });
  res.json(result);
}
