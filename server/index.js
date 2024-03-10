const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./Models/User");

const app = express();
app.use(express.json());
app.use(cors(
  {
  origin:[""],
  methods: ["POST","GET"],
  credentials: true
  }
));

mongoose.connect("mongodb://127.0.0.1:27017/sport-user");

app.post("/register", async (req, res) => {
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const newUser = await UserModel.create(req.body);
    return res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        let isPasswordCorrect = true;
        for (let i = 0; i < user.password.length; i++) {
          if (user.password[i] !== password[i]) {
            isPasswordCorrect = false;
          }
        }

        if (isPasswordCorrect) {
          res.json({ message: "Success" });
        } else {
          res.json({ message: "The email or password is incorrect" });
        }
      } else {
        res.json({ message: "No record existed for the given email" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.listen(3001, () => {
  console.log("server is running");
});
