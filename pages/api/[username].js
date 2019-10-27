/**
 * A server-side route that gives user data
 * depending on /user query
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

  console.log(result);

  if (!result) {
    res.status(200).json({ userFound: false });
    client.close();
  } else {
    res.status(200).json({
      userFound: true,
      username: result.username,
      dateRegistered: result.dateRegistered
    });
    client.close();
  }
};