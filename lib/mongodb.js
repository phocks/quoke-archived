// import { MongoClient } from "mongodb";

const isProduction = process.env.NODE_ENV === "production";

export const url = isProduction
  ? "mongodb+srv://" +
    process.env.dbUser +
    ":" +
    process.env.dbPassword +
    "@quoke-42nuw.azure.mongodb.net/quoke?retryWrites=true&w=majority"
  : "mongodb://127.0.0.1:27017/quoke";

export const dbName = "quoke";

// export const client = new MongoClient(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

export const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
