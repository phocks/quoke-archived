const jwt = require("jsonwebtoken");

const secure = async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.jwtSecret);
    res.json(decoded);
  } catch(err) {
    res.json( err );
    return;
  }
};

export default secure;
