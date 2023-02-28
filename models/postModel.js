const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "post must have title"],
  },
  body: {
    type: String,
    required: [true, "post must have body"],
  },
});

export const Post = mongoose.model("Post", postSchema);
