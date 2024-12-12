import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TeamMemberCard from './TeamMemberCard';
import Oracle from '../assets/oracle.jpg'
import Jane from '../assets/images.jpeg'
import Alex from '../assets/alex.jpeg'


export default function AboutUs() {
  return (
    <div>
      <Header />
      <main className="lg:px-20 px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to our platform! We are dedicated to bringing you the latest
            and most engaging news, stories, and updates in sports, culture,
            and beyond.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Our mission is to create a space where sports fans and enthusiasts
            can connect, learn, and engage with the world’s most exciting
            moments. Whether it’s the latest match highlights, exclusive
            interviews, or inspirational stories, we strive to deliver content
            that entertains and informs.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Passion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are passionate about sports and storytelling. Every piece of
                content is crafted with enthusiasm and attention to detail.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team is committed to delivering high-quality, reliable
                content that our audience can trust and enjoy.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in fostering a community of like-minded individuals
                who share our love for sports and culture.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TeamMemberCard
              name="DeOracleEdge"
              role="Founder & Editor-in-Chief"
              image={Oracle}
              bio="DeOracleEdge is a lifelong sports enthusiast and experienced Software Engineer who founded this platform to bring fans closer to the action."
            />
            <TeamMemberCard
              name="Jane Smith"
              role="Content Manager"
              image={Jane}
              bio="Jane oversees the creation and curation of all content, ensuring it aligns with our mission and values."
            />
            <TeamMemberCard
              name="Alex Johnson"
              role="Lead Developer"
              image={Alex}
              bio="Alex is the mastermind behind the platform's design and functionality, ensuring a seamless user experience."
            />
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Become a part of our growing community of sports lovers and
            enthusiasts. Stay updated with the latest stories, share your
            thoughts, and celebrate your favorite moments with us.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Subscribe Now
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
