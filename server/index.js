const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./Models/User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/sport-user");

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((newUser) => res.json(newUser))
    .catch((err) => res.json(err));
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        // Use constant time comparison to mitigate timing attacks
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
