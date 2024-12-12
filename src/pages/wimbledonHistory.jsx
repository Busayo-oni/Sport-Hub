import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ImageWithCaption from './widthcaption';
import WimbledonImage from '../assets/wimbledon.jpg';
import Roger from '../assets/roger.webp'
import Roger2 from '../assets/Federer.webp'
import Serena from '../assets/Serena.webp'



export default function WimbledonHistory() {
  return (
    <div>
      <Header />
      <main className="lg:px-20 px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <img src={WimbledonImage} alt="Wimbledon" className="w-full h-auto rounded-lg shadow-md mb-6" />
          <h1 className="text-4xl font-bold text-gray-700 mb-4">Top 10 Moments in Wimbledon History</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Wimbledon, the oldest and most prestigious tennis tournament, has delivered countless unforgettable moments over the years. 
            From intense rivalries to groundbreaking achievements, here are the top 10 moments that define Wimbledon’s legacy.
          </p>
        </section>

        {/* Top Moments */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">The Iconic Moments</h2>
          {/* Moment 1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              1. Federer’s Unstoppable Streak (2003-2007)
            </h3>
            <ImageWithCaption
              src={Roger}
              alt="Roger Federer"
              caption="Roger Federer dominated Wimbledon from 2003 to 2007, securing five consecutive titles."
            />
            <p className="text-lg text-gray-600 leading-relaxed">
              Roger Federer’s unprecedented five consecutive Wimbledon titles cemented his status as one of the greatest players in tennis history.
              His graceful style, unmatched technique, and fierce determination captivated fans around the world.
            </p>
          </div>

          {/* Moment 2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              2. Nadal vs. Federer, 2008 Final
            </h3>
            <ImageWithCaption
              src={Roger2}
              alt="Federer vs Nadal 2008 Final"
              caption="The 2008 Wimbledon final is often regarded as the greatest tennis match ever played."
            />
            <p className="text-lg text-gray-600 leading-relaxed">
              In a match that lasted nearly five hours, Rafael Nadal defeated Roger Federer in a five-set thriller to win his first Wimbledon title.
              This legendary battle is widely considered the greatest tennis match of all time.
            </p>
          </div>

          {/* Add other moments similarly */}
          {/* Example format for additional moments */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">3. Serena Williams’ Comeback Victory</h3>
            <ImageWithCaption
              src={Serena}
              alt="Serena Williams"
              caption="Serena Williams’ triumph after her return to tennis showcased her incredible resilience."
            />
            <p className="text-lg text-gray-600 leading-relaxed">
              Serena Williams’ 2012 Wimbledon victory marked a triumphant return after battling injuries, solidifying her legacy as a tennis icon.
            </p>
          </div>
        </section>

        {/* Fan Engagement Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Fan Zone</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-600 mb-4">Which Wimbledon moment is your favorite?</p>
            <form>
              <div className="mb-4">
                <input type="radio" id="federer" name="favorite" value="Federer" />
                <label htmlFor="federer" className="text-lg text-gray-800 ml-2">Federer’s Five Titles</label>
              </div>
              <div className="mb-4">
                <input type="radio" id="nadal" name="favorite" value="Nadal" />
                <label htmlFor="nadal" className="text-lg text-gray-800 ml-2">Nadal vs. Federer 2008</label>
              </div>
              <div className="mb-4">
                <input type="radio" id="serena" name="favorite" value="Serena" />
                <label htmlFor="serena" className="text-lg text-gray-800 ml-2">Serena’s Comeback</label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Submit Vote
              </button>
            </form>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Explore More</h2>
          <ul className="list-disc pl-6">
            <li className="text-lg text-gray-600 mb-2">
              <a href="/tennis/history" className="text-blue-500 hover:underline">The Evolution of Wimbledon: A Timeline</a>
            </li>
            <li className="text-lg text-gray-600 mb-2">
              <a href="/tennis/stars" className="text-blue-500 hover:underline">Tennis Legends Who Shaped the Game</a>
            </li>
            <li className="text-lg text-gray-600 mb-2">
              <a href="/tennis/rankings" className="text-blue-500 hover:underline">Current ATP and WTA Rankings</a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
