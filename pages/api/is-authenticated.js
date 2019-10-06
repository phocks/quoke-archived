import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res) => {
  // Accept POST requests only
  // if (req.method === "GET") {
  //   res.json({ error: "Please use POST" });
  //   return;
  // }

  const { token } = req.cookies;

  try {
    var decoded = jwt.verify(token, process.env.jwtSecret);
    console.log(decoded);
    console.log(+new Date());

    res.json(decoded);
  } catch (err) {
    res.json(err);
  }

  // // Get user input
  // const { username, password } = req.body;

  // // All inputs required
  // if (!username || !password) {
  //   res.json({ error: "All inputs required" });
  //   return;
  // }

  // const client = await MongoClient.connect(url, options);
  // const db = client.db(dbName);
  // const collection = db.collection("users");
  // const foundUser = await collection.findOne({ username: username });

  // const { passwordHash } = foundUser;
  // const isAuthenticated = await bcrypt.compare(password, passwordHash);

  // if (!isAuthenticated) {
  //   res.json({ error: "Wrong username or password" });
  //   return;
  // }

  // const payload = { username: username };
  // const token = jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1y" });
  // res.setHeader("Set-Cookie", [`token=${token}; Max-Age=${COOKIE_MAX_AGE}`]);
  // res.json({ message: "signed in as " + username, token: token });
};

export default isAuthenticated;
