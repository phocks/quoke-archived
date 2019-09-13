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

app.post("/api/register", async (req, res) => {
  await addUser(req.body);
  res.redirect("/api/users");
});

app.post("/api/login", async (req, res) => {
  const result = await checkLogin(req.body);
  if (result) res.redirect("/api/users");
  else res.send("Username or password incorrect...")
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

// const Koa = require('koa')
// const port = process.env.PORT || 3000
// const app = new Koa()
// const serve = require('koa-static')
// const Router = require('koa-router')
// const router = new Router()
// const views = require('koa-views')
// const bodyParser = require('koa-bodyparser');
// const passport = require("passport");
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const lodashId = require('lodash-id')

// const adapter = new FileSync('.data/db.json')
// const db = low(adapter)

// /* Initial database setup */
// // db._.mixin(lodashId)
// db.defaults({ items: [] }).write()

// function dbAddTask(data) {
//   console.log(data)
//   return db
//     .get('items')
//     .insert({ task: data.task })
//     .write()
// }

// function dbGetItems() {
//   return db.get('items').value()
// }

// function dbUpdateTask(id) {
//   db.get('items')
//     .find({ id: id })
//     .assign({ status: 'Done' })
//     .write()
// }

// function dbClear() {
//   db.get('items')
//     .remove()
//     .write()
//   console.log('Database cleared')
// }

// app.use(serve('./public'))

// app.use(views('./views', { map: { html: 'nunjucks' }}))

// /* This should appear before any routes */
// app.use(bodyParser())

// router.get('/', (ctx, next) => {
//   // Function to get items from database
//   const items = dbGetItems()
//   return ctx.body = items;
// })

// router.get('/clear', (ctx, next) => {
//   dbClear()
//   ctx.response.redirect('/')
// })

// router.post('/add', (ctx, next) => {
//   const payload = ctx.request.body
//   // Function to add task to database
//   dbAddTask(payload)
//   console.log("OK")
//   ctx.status = 200
//   ctx.response.redirect('/')
// })

// router.post('/update/:id', async (ctx, next) => {
//   const id = ctx.params.id
//   dbUpdateTask(id)
//   ctx.status = 200
//   ctx.response.redirect('/')
// })

// router.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });

// app.use(router.routes()).use(router.allowedMethods())

// app.use(async ctx => {
//   ctx.body = 'Hello Dinosaur 🦖'
// })

// const listener = app.listen(port, function() {
//   console.log('Your app is listening on port ' + listener.address().port)
// })
