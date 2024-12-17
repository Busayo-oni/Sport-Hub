import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import HeroCarousel from './Herocarosel';
import SportCard from '../pages/SportCard';
import UpgradeCard from './upgradeCard';
import Image1 from '../assets/img1.jpeg';
import Image2 from '../assets/boxing.jpg';
import Image3 from '../assets/tennis-article1.jpg';
import Image4 from '../assets/cricket.jpeg';
import Image5 from '../assets/basketball.jpg';

export default function Home() {
  const [posts, setPosts] = useState([]);

  // Fetch stored posts from local storage on component mount
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  // Handle creating a new post
  const handleCreatePost = () => {
    const newPost = {
      _id: Date.now(),  // Unique ID
      title: "Amazing Football Match",
      description: "A thrilling game between two top teams.",
      image: "https://example.com/path/to/image.jpg",  // Replace with an actual image URL
      createdAt: new Date().toISOString(),
    };

    // Update state and localStorage with the new post
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  // Handle deleting a post
  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter(post => post._id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-50">
        {/* Welcome Section */}
        <section className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the Ultimate Sports Blog</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Discover the latest updates, match highlights, player stats, and expert analyses on your favorite sports.
          </p>
        </section>

        {/* Sports Categories */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Explore Sports</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SportCard sportName="Football" image={Image1} description="Villa pegged back for second time at RB Leipzig LIVE!" />
            <SportCard sportName="Boxing" image={Image2} description="Stay updated with boxing games and highlights." />
            <SportCard sportName="Tennis" image={Image3} description="Read the latest tennis news." />
            <SportCard sportName="Cricket" image={Image4} description="Follow thrilling cricket tournaments and player records." />
            <SportCard sportName="Basketball" image={Image5} description="Catch up on NBA, EuroLeague, and more basketball leagues." />
          </div>
        </section>

        {/* Button to Add a New Post */}
        

        {/* Latest Posts */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Latest Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} onDelete={handleDeletePost} />
            ))}
          </div>
        </section>

        {/* Featured Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white p-10 rounded-lg mb-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
          <p className="text-lg mb-6">
            Be a part of the vibrant sports community! Discuss matches, share insights, and connect with fellow fans.
          </p>
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-100">
            Sign Up Now
          </button>
        </section>

        {/* Upgrade Section */}
        <UpgradeCard />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
