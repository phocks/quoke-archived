// const MongoClient = require('mongodb').MongoClient;
import { MongoClient } from "mongodb";
const url = `mongodb://${process.env.dbUser}:${process.env.dbPassword}@ds034677.mlab.com:34677/quoke`;

export default async function handle(req, res) {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });
  const db = client.db("quoke");
  const result = await db.createCollection("testing");
  console.log(result);
  client.close();
  res.end("Hello World");
}
