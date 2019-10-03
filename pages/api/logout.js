const jwt = require("jsonwebtoken");

const COOKIE_MAX_AGE = -1;

const logout = async (req, res) => {
  // const payload = { username: "phocks" };
  // const token = jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h"});
  res.setHeader("Set-Cookie", [
    `token=logged-out; Max-Age=${COOKIE_MAX_AGE}`
  ]);
  res.json({ message: "logged out" });
};

export default logout;
