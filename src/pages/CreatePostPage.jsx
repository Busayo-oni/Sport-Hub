import React from "react";
import Header from "../pages/Header";
import Footer from "./Footer";
import CreatePost from "./CreatePost";
import { useNavigate } from "react-router-dom";

export default function CreatePostPage() {
  const navigate = useNavigate();

  const handleCreatePost = (newPost) => {
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([newPost, ...existingPosts]));
    navigate("/"); // Navigate back to Home
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Create a New Post</h1>
        <CreatePost onCreatePost={handleCreatePost} />
      </div>
      <Footer />
    </div>
  );
}
