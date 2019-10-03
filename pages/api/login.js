const jwt = require("jsonwebtoken");

const COOKIE_MAX_AGE = 60 * 60;

const login = async (req, res) => {
  const payload = { username: "phocks" };
  const token = jwt.sign(payload, process.env.jwtSecret);
  res.setHeader("Set-Cookie", [
    `token=${token}; Max-Age=${COOKIE_MAX_AGE}`
  ]);
  res.json({ message: "signed in... secure this in future" });
};

export default login;
