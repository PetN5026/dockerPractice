const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");

const postRouter = require("./routes/expressRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authsource=admin`;
mongoose
  .connect(mongoURL)
  .then(() => console.log("connected to dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"))
  .catch((e) => console.log(e));
app.get("/", (req, res) => {
  res.send("<h2>Hello!<h2>");
});

const port = process.env.PORT || 3000;

//localhost:3000/posts/api/v1/posts
app.use(express.json());
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
