import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../../../lib/mongodb";
import isAuthd from "../../../../lib/isAuthd";

export default async function handle(req, res) {
  const { slug } = req.query;
  const { token } = req.cookies;

  console.log(token);

  const loginData = isAuthd(token);

  if (loginData.loggedIn !== true) {
    res.json({ error: "Not logged in" });
    return;
  }

  console.log(loginData.payload.username);

  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("quotations");

  const result = await collection.updateOne(
    { slug: slug },
    { $addToSet: { likedBy: loginData.payload.username } }
  );

  res.status(200).json(result);
  client.close();
}
