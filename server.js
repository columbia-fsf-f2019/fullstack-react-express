const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const db = require("./db");
var cors = require("cors");

/* constants */
const PORT = process.env.PORT || 3001;

/* */
const app = express();

/* set-up middlewares */
app.use(cors());
app.use(morgan("dev")); // logging
app.use(bodyparser.json()); // parsing json data in request body

/* route handlers */
app.get("/api/ping", (req, res) => res.send("pong"));

app
  .route("/api/users")
  .get((req, res) => res.json(db.users))
  .post((req, res) => {
    const newUserId = db.users.length + 1;
    db.users.push({ ...req.body, id: newUserId });
    res.status(201).json(newUserId);
  });

/* run our app */
app.listen(PORT, () => {
  console.log(`[SERVER] app listening on port ${PORT}`);
});
