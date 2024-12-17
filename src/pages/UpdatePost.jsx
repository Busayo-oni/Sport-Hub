import React, { useState } from "react";

const UpdatePost = ({ posts, onUpdatePost }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  // Handle editing a post
  const startEditing = (post) => {
    setSelectedPost(post);
    setUpdatedTitle(post.title);
    setUpdatedDescription(post.description);
  };

  // Handle submitting the updated post
  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/posts/${selectedPost._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: updatedTitle,
          description: updatedDescription,
        }),
      });

      if (response.ok) {
        const updatedPost = await response.json();
        onUpdatePost(updatedPost); // Update state in Home
        setSelectedPost(null); // Reset the form
      } else {
        console.error("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Update Post</h2>

      {/* Select a post to edit */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Select Post:</label>
        <select
          className="p-2 border rounded w-full"
          onChange={(e) => {
            const postId = e.target.value;
            const post = posts.find((p) => p._id === postId);
            startEditing(post);
          }}
          value={selectedPost ? selectedPost._id : ""}
        >
          <option value="">-- Select a Post --</option>
          {posts.map((post) => (
            <option key={post._id} value={post._id}>
              {post.title}
            </option>
          ))}
        </select>
      </div>

      {/* Update Form */}
      {selectedPost && (
        <div className="space-y-4">
          <div>
            <label className="block font-semibold">Title:</label>
            <input
              type="text"
              className="p-2 border rounded w-full"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold">Description:</label>
            <textarea
              className="p-2 border rounded w-full"
              rows="4"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleUpdate}
          >
            Save Updates
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdatePost;
