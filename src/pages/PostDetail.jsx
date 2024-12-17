import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams, useNavigate } from "react-router-dom";  // Use useNavigate instead of useHistory

function PostDetail() {
  const { id } = useParams();  // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const navigate = useNavigate();  // useNavigate instead of useHistory

  useEffect(() => {
    // Fetch the post based on the ID from localStorage or an API
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const foundPost = storedPosts.find((post) => post._id === parseInt(id)); // Assumes post IDs are numbers
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/'); // Redirect to home page if post is not found
    }
  }, [id, navigate]);  // Use navigate here instead of history.push

  if (!post) return <p>Loading...</p>;

  return (
    <>
    <Header />
   
    <div className="container mx-auto p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
      <img src={post.image} alt={post.title} 
      className="w-full"
      />
      <p className="text-gray-600 mb-4">{post.createdAt}</p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-800">{post.description}</p>
        {/* Add any additional post content here */}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default PostDetail;
