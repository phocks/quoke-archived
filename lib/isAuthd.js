import jwt from "jsonwebtoken";

const isAuthd = (token) => {
  // const { token } = req.cookies;

  if (typeof token === "undefined") {
    res.json({ message: "No token" });
    return;
  }

  try {
    var decoded = jwt.verify(token, process.env.jwtSecret || "secret");
    return({ loggedIn: true, payload: decoded });
  } catch (err) {
    return({ loggedIn: false, error: err });
  }
};

export default isAuthd;
