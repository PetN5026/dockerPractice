import { Post } from "../models/postModel";

async function getAllPosts(req, res, next) {
  try {
    const posts = await Post.find();
    res.status(200).json({
      status: "success",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (error) {
    res.status(400);
    console.log(error);
  }
}
