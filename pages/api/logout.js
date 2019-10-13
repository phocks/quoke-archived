const COOKIE_MAX_AGE = -1;

const logout = async (req, res) => {
  res.setHeader("Set-Cookie", [
    `token=logged-out; Max-Age=${COOKIE_MAX_AGE}; Path=/`
  ]);
  // res.json({ message: "logged out" });
  res.writeHead(302, {
    Location: "/"
  });
  res.end();
};

export default logout;
