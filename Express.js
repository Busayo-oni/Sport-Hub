const express = require("express");
const router = express.Router();
const Post = require("./models/Post");

// Update a post by ID
router.put("/api/posts/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true } // Return updated post
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Failed to update post" });
  }
});

module.exports = router;
