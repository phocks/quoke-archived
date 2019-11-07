import jwt from "jsonwebtoken";

const isAuthd = token => {
  if (typeof token === "undefined") {
    return { message: "No token" };
  }

  try {
    var decoded = jwt.verify(token, process.env.jwtSecret || "secret");
    return { loggedIn: true, payload: decoded };
  } catch (err) {
    return { loggedIn: false, error: err };
  }
};

export default isAuthd;
