// import { MongoClient } from "mongodb";
// // const url = `mongodb://${process.env.dbUser}:${process.env.dbPassword}@ds034677.mlab.com:34677/quoke`;
// const url =
//   "mongodb+srv://" +
//   process.env.dbUser +
//   ":" +
//   process.env.dbPassword +
//   "@quoke-42nuw.azure.mongodb.net/test?retryWrites=true&w=majority";

import {dbName, client} from "../../../lib/mongodb"

export default async function handle(req, res) {
  const { slug } = req.query;

  // const client = await MongoClient.connect(url, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // });
  await client.connect();

  const db = client.db(dbName);
  const collection = db.collection("quotations");
  const result = await collection.find({ slug: slug }).toArray();

  

  res.status(200).json(result);
  client.close();
}
