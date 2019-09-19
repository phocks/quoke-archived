// const MongoClient = require('mongodb').MongoClient;
import { MongoClient } from "mongodb";
const url = `mongodb://${process.env.dbUser}:${process.env.dbPassword}@ds034677.mlab.com:34677/quoke`;

export default async function handle(req, res) {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });
  const db = client.db("quoke");
  const collection = db.collection("test");
  const result = await collection.find({}).toArray();
  console.log(result);
  client.close();
  res.status(200).json(result);
}
