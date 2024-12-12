import Header from '../pages/Header';
import Footer from '../pages/Footer';
import SportCard from '../pages/SportCard';
import UpgradeCard from './upgradeCard';
import HeroCarousel from './Herocarosel';
import Image1 from '../assets/img1.jpeg';
import Image2 from '../assets/boxing.jpg';
import Image3 from '../assets/tennis-article1.jpg';
import Image4 from '../assets/cricket.jpeg';
import Image5 from '../assets/basketball.jpg';
import ArticleCard from '../pages/ArticleCard'; // Assume an ArticleCard component exists for recent news

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Welcome Section */}
      <main className="flex-grow p-6 bg-gray-50">
        <section className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Welcome to the Ultimate Sports Blog</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            Discover the latest updates, match highlights, player stats, and expert analyses on your favorite sports. From football and tennis to boxing and basketball, we've got you covered!
          </p>
        </section>

        {/* Sports Categories Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Explore Sports</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SportCard
              sportName="Football"
              image={Image1}
              description="Villa pegged back for second time at RB Leipzig LIVE!"
              link="/football"
            />
            <SportCard
              sportName="Boxing"
              image={Image2}
              description="Stay updated with boxing games and highlights."
              link="/boxing"
            />
            <SportCard
              sportName="Tennis"
              image={Image3}
              description="Read the latest tennis news."
              link="/tennis"
            />
            <SportCard
              sportName="Cricket"
              image={Image4}
              description="Follow thrilling cricket tournaments and player records."
              link="/Cricket"
            />
            <SportCard
              sportName="Basketball"
              image={Image5}
              description="Catch up on NBA, EuroLeague, and more basketball leagues."
              link="/Basketball"
            />
          </div>
        </section>

        {/* Recent Articles Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Recent Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArticleCard
              title="How Aston Villa Clinched the Victory"
              excerpt="Ross Barkley and Jhon Duran shine as Villa defeats Leipzig in a thrilling Champions League encounter."
              image={Image1}
              date="Dec 11, 2024"
              link="/football"
            />
            <ArticleCard
              title="Boxing: Highlights of the Year"
              excerpt="Check out the top knockouts and fights that defined this year in boxing."
              image={Image2}
              date="Dec 10, 2024"
              link="/boxing"
            />
            <ArticleCard
              title="Top Tennis Moments of 2024"
              excerpt="Relive the incredible performances and jaw-dropping matches in tennis this year."
              image={Image3}
              date="Dec 9, 2024"
              link="/WimbledonHistory"
            />
          </div>
        </section>

        {/* Featured Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white p-10 rounded-lg mb-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
          <p className="text-lg mb-6">
            Be a part of the vibrant sports community! Discuss your favorite matches, share insights, and connect with fellow sports enthusiasts.
          </p>
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-100">
            Sign Up Now
          </button>
        </section>

        {/* Upgrade Section */}
        <UpgradeCard />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
