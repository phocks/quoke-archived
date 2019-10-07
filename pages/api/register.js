import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../lib/mongodb";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const register = async (req, res) => {
  // POST requests only
  if (req.method === "GET") {
    res.json({ error: "Please use POST" });
    return;
  }

  // Get user input
  const { username, email, password } = req.body;

  // All inputs required
  if (!username || !email || !password) {
    res.json({ error: "All inputs required" });
    return;
  }

  // Generate a password hash and salt
  const hash = await bcrypt.hash(password, SALT_ROUNDS);

  const client = await MongoClient.connect(url, options);

  const db = client.db(dbName);
  const collection = db.collection("users");

  await collection.insertOne({
    username: username,
    email: email,
    passwordHash: hash,
    dateRegistered: new Date()
  });

  console.log(hash);

  res.writeHead(302, {
    Location: "/login"
  });
  res.end();
};

export default register;
