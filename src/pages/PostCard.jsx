import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post, onDelete }) {
  const truncateDescription = (desc, length = 100) => {
    return desc.length > length ? `${desc.substring(0, length)}...` : desc;
  };

  return (
    <div className="post-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
      <Link to={`/post/${post._id}`}>
        <div className="mb-4">
          <img 
            src={post.image || 'https://via.placeholder.com/600x400'} 
            alt={post.title}
            className="w-full h-48 object-cover rounded-lg" 
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600">{truncateDescription(post.description)}</p>
      </Link>
      {/* <button
        onClick={() => onDelete(post._id)} 
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Delete
      </button> */}
    </div>
  );
}

export default PostCard;
