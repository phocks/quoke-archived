import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../lib/mongodb";

const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

const login = async (req, res) => {
  // Accept POST requests only
  if (req.method === "GET") {
    res.json({ error: "Please use POST" });
    return;
  }

  // Get user input
  const { username, password } = req.body;

  // All inputs required
  if (!username || !password) {
    res.json({ error: "All inputs required" });
    return;
  }

  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("users");
  const foundUser = await collection.findOne({ username: username });

  const { passwordHash } = foundUser;
  const isAuthenticated = await bcrypt.compare(password, passwordHash);

  if (!isAuthenticated) {
    res.json({ error: "Wrong username or password" });
    return;
  }

  const payload = { username: username };
  const token = jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });
  res.setHeader("Set-Cookie", [`token=${token}; Max-Age=${COOKIE_MAX_AGE}`]);
  res.json({ message: "signed in as " + username, token: token });
};

export default login;
