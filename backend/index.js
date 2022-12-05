const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");

const PORT = 8080;
const app = express();
const { UserModel, ServerModel } = require("./models/");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/servers", async (req, res) => {
  try {
    const servers = await ServerModel.find().lean();
    res.status(200).json({ servers });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch data." });
  }
});

app.post("/user", async (req, res) => {
  const name = req.body.name;

  const user = new UserModel({
    _id: new mongoose.Types.ObjectId(),
    name
  });

  try {
    await user.save().catch((e) => console.log(e));
    res.status(201).json({
      message: "User has been added",
      user: { _id: user._id, name: name }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to save." });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({
      username: username
    }).lean();

    if (user.password === password) {
      res.status(200).json({ user });
    } else {
      res.status(400).json({
        message: "no user found, or username/password combination incorrect"
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err });
  }
});

mongoose.connect(
  "mongodb://host.docker.internal:27017/join-test",
  {},
  (err) => {
    if (err) {
      console.error("failed to connect to mongoDB");
      console.error(err);
    } else {
      console.log("mongodb is running and secured");
      app.listen(PORT);
    }
  }
);
