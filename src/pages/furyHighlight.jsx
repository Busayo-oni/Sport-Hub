import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ImageWithCaption from './widthcaption';
import TysonImage from '../assets/tyson-fury.jpg';
import Heavyweight from '../assets/heavyweight.jpg';
import Wilder from '../assets/wilder.jpg';
import back from '../assets/back.jpg';


export default function TysonFuryHighlights() {
  return (
    <div>
      <Header />
      <main className="lg:px-20 px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <img
            src={TysonImage}
            alt="Tyson Fury"
            className="w-full h-auto rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-700 mb-4">
            Tyson Fury’s Career Highlights
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tyson Fury, known as “The Gypsy King,” is one of the most charismatic
            and talented heavyweights in boxing history. From his rise to fame
            to his dominance in the ring, this page takes a look at the most
            memorable moments of his illustrious career.
          </p>
        </section>

        {/* Career Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Career Highlights</h2>
          {/* Highlight 1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              1. The Upset Victory Over Wladimir Klitschko (2015)
            </h3>
            <ImageWithCaption
              src={Heavyweight}
              alt="Fury vs Klitschko"
              caption="Fury defeated Klitschko in 2015 to claim the world heavyweight title."
            />
            <p className="text-lg text-gray-600 leading-relaxed">
              In one of the biggest upsets in boxing, Fury defeated long-time
              champion Wladimir Klitschko to win the unified heavyweight titles.
              His tactical brilliance and unorthodox style proved too much for
              Klitschko.
            </p>
          </div>

          {/* Highlight 2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              2. The Trilogy with Deontay Wilder
            </h3>
            <ImageWithCaption
              src={Wilder}
              alt="Fury vs Wilder"
              caption="The Fury-Wilder trilogy showcased some of the most exciting fights in heavyweight history."
            />
            <p className="text-lg text-gray-600 leading-relaxed">
              Fury’s trilogy with Deontay Wilder is the stuff of legends. From
              their dramatic first draw to Fury’s emphatic victories in the
              rematches, these bouts solidified Fury’s place in boxing history.
            </p>
          </div>

          {/* Highlight 3 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              3. Comeback After Mental Health Struggles
            </h3>
            <ImageWithCaption
              src={back}
              alt="Fury comeback"
              caption="Fury’s return to boxing after battling depression is an inspiring story."
            />
            <p className="text-lg text-gray-600 leading-relaxed">
              After stepping away from the sport due to mental health issues,
              Fury made an incredible comeback, proving his resilience and
              inspiring fans around the world.
            </p>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Legacy and Impact</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tyson Fury is more than just a boxing champion. His openness about
            mental health, charismatic personality, and dominance in the ring
            have made him a global icon. He has redefined what it means to be a
            heavyweight champion in the modern era.
          </p>
        </section>

        {/* Fan Zone */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Fan Zone</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-600 mb-4">
              What’s your favorite Tyson Fury moment?
            </p>
            <form>
              <div className="mb-4">
                <input
                  type="radio"
                  id="klitschko"
                  name="favorite"
                  value="Klitschko"
                />
                <label htmlFor="klitschko" className="text-lg text-gray-800 ml-2">
                  Victory over Klitschko
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="radio"
                  id="wilder"
                  name="favorite"
                  value="Wilder"
                />
                <label htmlFor="wilder" className="text-lg text-gray-800 ml-2">
                  Trilogy with Wilder
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="radio"
                  id="comeback"
                  name="favorite"
                  value="Comeback"
                />
                <label htmlFor="comeback" className="text-lg text-gray-800 ml-2">
                  Comeback Story
                </label>
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
      </main>
      <Footer />
    </div>
  );
}
