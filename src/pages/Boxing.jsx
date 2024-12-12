import Header from './Header';
import Footer from './Footer';
import ArticleCard from './ArticleCard';
import ImageWithCaption from './widthcaption';
import Image1 from '../assets/boxing.jpg';
import Image2 from '../assets/tyson-fury.jpg'
import imageKnockouts from "../assets/knockouts.jpg";
import usykImage from "../assets/usykImage.jpg";


export default function Boxing() {
  return (
    <div>
      <Header />
      <main className="lg:px-20 px-4 py-8">
        {/* Main Article Section */}
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          Oleksandr Usyk vs Tyson Fury 2: Timing, Pricing, and Booking Details
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-6 leading-relaxed">
          Oleksandr Usyk and Tyson Fury rematch for the world heavyweight championship! 
          <strong> Catch the Riyadh Season event live on Sky Sports Box Office this Saturday, December 21, with various ways to book.</strong>
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Published:</strong> Wednesday, 11 December 2024, 08:51 AM, UK
        </p>
        <ImageWithCaption
          src={Image1}
          alt="Tyson Fury and Oleksandr Usyk stare down before their match"
          caption="Tyson Fury will rematch Oleksandr Usyk on December 21 live on Sky Sports Box Office."
        />

        {/* About the Fight Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">About the Fight</h2>
          <p className="text-lg text-gray-600 mb-4">
            The much-anticipated rematch between Tyson Fury and Oleksandr Usyk promises to be an unforgettable showdown. Both fighters bring their best to the ring, with Fury's undefeated record and Usyk's relentless style keeping fans on the edge of their seats.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Their first fight ended in controversy, and this rematch will settle the score once and for all. Who will emerge as the undisputed heavyweight champion?
          </p>
        </section>

        {/* Upcoming Boxing Matches */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Upcoming Matches</h2>
          <ul className="bg-gray-100 p-6 rounded-lg shadow">
            <li className="text-xl text-gray-800 mb-4">
              <strong>Anthony Joshua vs. Deontay Wilder</strong> - January 15, 2025
            </li>
            <li className="text-xl text-gray-800 mb-4">
              <strong>Canelo Alvarez vs. Gennadiy Golovkin</strong> - February 10, 2025
            </li>
            <li className="text-xl text-gray-800 mb-4">
              <strong>Naoya Inoue vs. Stephen Fulton</strong> - March 5, 2025
            </li>
          </ul>
        </section>

        {/* Featured Articles Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Latest Boxing News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArticleCard
              image={Image2}
              title="Tyson Fury’s Career Highlights"
              excerpt="Take a look back at the most memorable moments of Tyson Fury’s illustrious career."
              date="Dec 10, 2024"
              link="/TysonFuryHighlights"
            />
            <ArticleCard
              image={imageKnockouts}
              title="Top 5 Knockouts of 2024"
              excerpt="Relive the most stunning knockouts of the year, featuring some of the biggest names in boxing."
              date="Dec 9, 2024"
              link="/TopKnockouts2024"
            />
            <ArticleCard
              image={usykImage}
              title="A Look at Usyk’s Training Regimen"
              excerpt="How does Oleksandr Usyk prepare for the biggest fights of his career?"
              date="Dec 8, 2024"
              link="/UsykTrainingRegimen"
            />
          </div>
        </section>

        {/* Fan Poll */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Fan Poll</h2>
          <p className="text-lg text-gray-600 mb-4">
            Who do you think will win the rematch between Tyson Fury and Oleksandr Usyk?
          </p>
          <form className="bg-gray-100 p-6 rounded-lg shadow">
            <div className="mb-4">
              <input type="radio" id="fury" name="winner" value="Fury" />
              <label htmlFor="fury" className="text-lg text-gray-800 ml-2">Tyson Fury</label>
            </div>
            <div className="mb-4">
              <input type="radio" id="usyk" name="winner" value="Usyk" />
              <label htmlFor="usyk" className="text-lg text-gray-800 ml-2">Oleksandr Usyk</label>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Submit Vote
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
