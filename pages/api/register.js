import { MongoClient } from "mongodb";
import { dbName, url, options } from "../../lib/mongodb";
import bcrypt from "bcrypt";
import axios from "axios";
import qs from "qs";

const SALT_ROUNDS = 10;

const register = async (req, res) => {
  // POST requests only
  if (req.method === "GET") {
    res.json({ error: "Please use POST" });
    return;
  }

  // Get user input
  const { username, email, password, noRedirect, recaptchaToken } = req.body;

  // All inputs required
  if (!username || !email || !password) {
    res.json({ error: "All inputs required" });
    return;
  }

  // On production check if robot
  if (process.env.NODE_ENV === "production") {
    const recaptchaResult = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      qs.stringify({
        secret: process.env.recaptchaSecret,
        response: recaptchaToken
      })
    );

    if (!recaptchaResult.data.success) {
      res.json({ error: "reCAPTCHA call failed" });
      return;
    }

    if (recaptchaResult.data.score < 0.5) {
      res.json({ error: "Maybe you are a robot, sorry..." });
      return;
    }
  }

  // Generate a password hash and salt
  const hash = await bcrypt.hash(password, SALT_ROUNDS);

  const client = await MongoClient.connect(url, options);

  const db = client.db(dbName);
  const collection = db.collection("users");

  try {
    await collection.insertOne({
      username: username,
      email: email,
      passwordHash: hash,
      dateRegistered: new Date()
    });
  } catch (err) {
    res.json(err);
    return;
  }

  console.log(hash);

  if (noRedirect) {
    res.json({ success: true });
  } else {
    res.writeHead(302, {
      Location: "/login"
    });
    res.end();
  }
};

export default register;
