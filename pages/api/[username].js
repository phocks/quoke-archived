/**
 * A server-side
 */
import { MongoClient } from "mongodb";

import { dbName, url, options } from "../../lib/mongodb";

export default async (req, res) => {
  const { username } = req.query;

  // Connect to the database
  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("users");

  // See if user exists
  const result = await collection.findOne({ username: username });

  if (!result) {
    res.status(200).json({ userFound: false });
    client.close();
  } else {
    res.status(200).json({ userFound: true, username: result.username });
    client.close();
  }
};
