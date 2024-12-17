import React, { useState } from "react";

export default function CreatePost({ onCreatePost }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // State to handle the uploaded image

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description are required");
      return;
    }

    // Create a new post object with a unique ID and current date
    const newPost = {
      _id: Date.now(), // Unique ID based on current timestamp
      title,
      description,
      image: image ? URL.createObjectURL(image) : null, // Generate a temporary URL for the image
      createdAt: new Date().toISOString(),
    };

    onCreatePost(newPost);

    // Reset the form
    setTitle("");
    setDescription("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Create a New Post</h3>

      {/* Title Input */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter post description"
          rows="4"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
          Upload Image
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full text-gray-700"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Create Post
      </button>
    </form>
  );
}
