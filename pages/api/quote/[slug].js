import { getDb } from "../../../lib/mongodb";

export default async function handle(req, res) {
  const { slug } = req.query;

  const db = await getDb(); 
  const collection = db.collection("quotations");

  const result = await collection.findOne({ slug: slug });

  res.status(200).json(result);
  client.close();
}
