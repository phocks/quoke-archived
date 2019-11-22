import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../../lib/mongodb";
import isAuthd from "../../../lib/isAuthd";

const addQuote = async (req, res) => {
  // POST requests only
  if (req.method === "GET") {
    res.json({ error: "Please use POST" });
    return;
  }

  const { token } = req.cookies;
  const loginData = isAuthd(token);

  if (loginData.loggedIn !== true) {
    res.json({ error: "Not logged in" });
    return;
  }

  // Get user input
  const { text, author, source, slug, noRedirect } = req.body;

  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("quotations");

  try {
    await collection.insertOne({
      text: text,
      author: author,
      source: source,
      slug: slug,
      date: new Date(),
      addedBy: loginData.payload.username
    });
  } catch (err) {
    res.json(err);
    client.close()
    return;
  }

  if (noRedirect) {
    res.json({ success: true });
  } else {
    res.writeHead(302, {
      Location: "/login"
    });
    res.end();
  }
};

export default addQuote;
