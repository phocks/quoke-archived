const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const payload = { username: "phocks" };
  const token = jwt.sign(payload, process.env.jwtSecret);
  res.setHeader("Set-Cookie", [
    `token=${token}; Max-Age=${1 * 365 * 24 * 60 * 60}`
  ]);
  res.json({ message: "signed in... secure this in future" });
};

export default login;
