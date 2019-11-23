import { getCollection, dbName, url, options } from "../../lib/mongodb";

export default async (req, res) => {
  const collection = await getCollection("quotations");

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
