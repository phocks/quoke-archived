const COOKIE_MAX_AGE = -1;

const logout = async (req, res) => {
  res.setHeader("Set-Cookie", [
    `token=logged-out; Max-Age=${COOKIE_MAX_AGE}; Path=/`
  ]);
  // res.json({ message: "logged out" });
  const { noRedirect } = req.body;
  if (noRedirect) {
    res.json({ success: true });
  } else {
    res.writeHead(302, {
      Location: "/"
    });
    res.end();
  }
};

export default logout;
