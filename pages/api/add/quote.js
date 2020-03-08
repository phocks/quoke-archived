import { MongoClient } from "mongodb";
import slug from "slug";
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
  const { text, author, source, title, noRedirect } = req.body;

  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("quotations");

  const slugText = slug(title, {
    replacement: "-", // replace spaces with replacement
    symbols: true, // replace unicode symbols or not
    remove: /[.]/g, // (optional) regex to remove characters
    lower: true, // result in lower case
    charmap: slug.charmap, // replace special characters
    multicharmap: slug.multicharmap // replace multi-characters
  });

  try {
    await collection.insertOne({
      title: title,
      text: text,
      author: author,
      source: source,
      slug: slugText,
      date: new Date(),
      addedBy: loginData.payload.username
      // topics: ["Test", "Topics"]
    });
  } catch (err) {
    res.json(err);
    client.close();
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
