import { MongoClient } from "mongodb";
// const url = `mongodb://${process.env.dbUser}:${process.env.dbPassword}@ds034677.mlab.com:34677/quoke`;
const url = `mongodb+srv://${process.env.dbUser}:${process.env.dbPassword}@quoke-42nuw.azure.mongodb.net/test?retryWrites=true&w=majority`


export default async function handle(req, res) {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db("quoke");
  const collection = db.collection("test");
  const result = await collection.find({}).toArray();
  client.close();
  console.log(result)
  res.status(200).json(result);
}
