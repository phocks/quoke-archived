import { MongoClient } from "mongodb";

const isProduction = process.env.NODE_ENV === "production";

export const url = isProduction
  ? "mongodb+srv://" +
    process.env.dbUser +
    ":" +
    process.env.dbPassword +
    "@quoke-42nuw.azure.mongodb.net/quoke?retryWrites=true&w=majority"
  : "mongodb://127.0.0.1:27017/quoke";

export const dbName = "quoke";

export const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Returns a collection you can do DB operations with
export const getCollection = async collectionName => {
  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  return collection;
};

export const findOne = async (collectionName, query) => {
  const collection = await getCollection(collectionName);
  const result = await collection.findOne(query);

  return result;
};

export const findMany = async (collectionName, query) => {
  const collection = await getCollection(collectionName);
  const result = await collection
    .find(query)
    .sort({ date: -1 })
    .toArray();

  return result;
};

export const findHome = async (
  collectionName,
  query,
  options = { limit: 5, skip: 0 }
) => {
  const collection = await getCollection(collectionName);
  const result = await collection
    .find(query)
    .limit(options.limit)
    .skip(options.skip)
    .sort({ date: -1 })
    .toArray();

  return result;
};

export const search = async (
  collectionName,
  query,
  options = { limit: 5, skip: 0 }
) => {
  const collection = await getCollection(collectionName);
  const result = await collection
    .find(query)
    .limit(options.limit)
    .skip(options.skip)
    .sort({ date: -1 })
    .toArray();

  return result;
};

export const insertOne = async (collectionName, doc) => {
  const collection = await getCollection(collectionName);
  const result = await collection.insertOne(doc);
  return result;
};
