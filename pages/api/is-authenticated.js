import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res) => {
  const { token } = req.cookies;
  if (typeof token === "undefined") {
    res.json({ message: "Not logged in" });
    return;
  }

  try {
    var decoded = jwt.verify(token, process.env.jwtSecret);
    res.json(decoded);
  } catch (err) {
    res.json(err);
  }
};

export default isAuthenticated;
