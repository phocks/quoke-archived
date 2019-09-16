const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(".data/db.json");
const db = low(adapter);
const argon2 = require("argon2");

db.defaults({ users: [] }).write();

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

const addUser = async data => {
  const userCheck = db
    .get("users")
    .find({ username: data.username })
    .value();

  if (typeof userCheck === "undefined") {
    const hash = await argon2.hash(data.password);
    const user = { username: data.username, passwordHash: hash };
    db.get("users")
      .push(user)
      .write();
  } else {
    console.log("User exists...");
    if (await argon2.verify(userCheck.passwordHash, data.password)) {
      console.log("Password correct!");
    } else {
      console.log("Wrong password...");
    }
  }
};

const checkLogin = async data => {
  const userCheck = db
    .get("users")
    .find({ username: data.username })
    .value();
  
  if (typeof userCheck === "undefined") {
    console.log("User not found...");
    return false;
  } else console.log("User exists...");
      if (await argon2.verify(userCheck.passwordHash, data.password)) {
        console.log("Password correct!");
        return true;
      } else {
        console.log("Wrong password...");
        return false;
      }
}

// Serve /public statically
app.use(express.static("public"));

// To parse POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.render("index.html", { username: "phocks" });
});

app.get("/register", (req, res) => {
  res.render("register.html");
});

app.get("/login", (req, res) => {
  res.render("login.html");
});

app.get("/api/users", (req, res) => {
  res.json(db.get("users").value());
});

app.post("/register", async (req, res) => {
  await addUser(req.body);
  res.redirect("/api/users");
});

app.post("/login", async (req, res) => {
  const result = await checkLogin(req.body);
  if (result) res.redirect("/api/users");
  else res.send("Username or password incorrect...")
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

