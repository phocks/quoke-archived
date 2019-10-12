import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res) => {
  const { token } = req.body;
  if (typeof token === "undefined") {
    res.json({ message: "No token" });
    return;
  }

  try {
    var decoded = jwt.verify(token, process.env.jwtSecret);
    res.json({ loggedIn: true, payload: decoded });
  } catch (err) {
    res.json({ loggedIn: false, error: err });
  }
};

export default isAuthenticated;
