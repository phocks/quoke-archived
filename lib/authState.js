import jwt from "jsonwebtoken";

const authState = token => {
  if (!token) return { loggedIn: false };
  try {
    var decoded = jwt.verify(token, process.env.jwtSecret);
    return { loggedIn: true, payload: decoded };
  } catch (err) {
    return { loggedIn: false, error: err };
  }
};

export default authState;