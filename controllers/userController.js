const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
async function signUp(req, res) {
  const { username, password } = req.body;
  try {
    const hashpassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      password: hashpassword,
    });
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "user not found",
      });
    }

    const check = await bcrypt.compare(password, user.password);
    if (check) {
      res.status(200).json({
        status: "success",
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "incorrect credentials",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
exports.signUp = signUp;
exports.login = login;
