import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../lib/mongodb";

const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;
const USER_PASS_ERROR = { error: "Wrong username or password" }

const login = async (req, res) => {
  // Accept POST requests only
  if (req.method === "GET") {
    res.json({ error: "Please use POST" });
    return;
  }

  // Get user input
  const { username, password, noRedirect } = req.body;

  // All inputs required
  if (!username || !password) {
    res.json({ error: "All inputs required" });
    return;
  }

  const client = await MongoClient.connect(url, options);
  const db = client.db(dbName);
  const collection = db.collection("users");
  const foundUser = await collection.findOne({ username: username });

  if (!foundUser) {
    res.json(USER_PASS_ERROR);
    return;
  }

  const { passwordHash } = foundUser;
  const isAuthenticated = await bcrypt.compare(password, passwordHash);

  if (!isAuthenticated) {
    res.json(USER_PASS_ERROR);
    return;
  }

  const payload = { username: username };
  const token = jwt.sign(payload, process.env.jwtSecret || "secret", { expiresIn: "1y" });
  res.setHeader("Set-Cookie", [
    `token=${token}; Max-Age=${COOKIE_MAX_AGE}; Path=/`
  ]);

  // If no JavaScript let's hard redirect
  if (noRedirect) {
    res.json({ loggedIn: true });
  } else {
    res.writeHead(302, {
      Location: "/"
    });
    res.end();
  }
};

export default login;
