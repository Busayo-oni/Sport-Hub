import React from 'react';
import Header from './Header';
import Footer from './Footer';
import basketballImage from "../assets/basketball.jpg";

const Basketball = () => {
  return (
    <>
      <Header />
      <img src={basketballImage} alt="Basketball Game" className="h-[80vh] w-full object-cover" />
      <main className="lg:px-20 px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Basketball</h1>
        <p className="text-xl text-gray-600 mb-6">
          Explore the thrilling world of basketball, from iconic NBA games to rising stars, and catch up on the latest updates, stats, and game highlights.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Upcoming Games</h2>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li className="mb-2">
              <strong>Los Angeles Lakers</strong> vs <strong>Golden State Warriors</strong>: December 15, 2024
            </li>
            <li className="mb-2">
              <strong>Milwaukee Bucks</strong> vs <strong>Miami Heat</strong>: December 18, 2024
            </li>
            <li className="mb-2">
              <strong>Boston Celtics</strong> vs <strong>Denver Nuggets</strong>: December 20, 2024
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Player Highlights</h2>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li className="mb-2">
              <strong>LeBron James</strong> reaches 40,000 career points, cementing his legacy as an all-time great.
            </li>
            <li className="mb-2">
              <strong>Giannis Antetokounmpo</strong> achieves a triple-double in back-to-back games.
            </li>
            <li className="mb-2">
              <strong>Victor Wembanyama</strong> continues to impress with a 40-point game as a rookie.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">League Standings</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Team</th>
                <th className="border border-gray-300 p-3 text-left">Wins</th>
                <th className="border border-gray-300 p-3 text-left">Losses</th>
                <th className="border border-gray-300 p-3 text-left">Winning Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Denver Nuggets</td>
                <td className="border border-gray-300 p-3">18</td>
                <td className="border border-gray-300 p-3">5</td>
                <td className="border border-gray-300 p-3">78%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Boston Celtics</td>
                <td className="border border-gray-300 p-3">16</td>
                <td className="border border-gray-300 p-3">7</td>
                <td className="border border-gray-300 p-3">70%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Golden State Warriors</td>
                <td className="border border-gray-300 p-3">15</td>
                <td className="border border-gray-300 p-3">8</td>
                <td className="border border-gray-300 p-3">65%</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Fan Poll</h2>
          <p className="text-lg text-gray-600 mb-4">
            Who do you think will win the NBA Championship this season? Cast your vote below!
          </p>
          <form className="flex flex-col gap-4">
            <label className="flex items-center">
              <input type="radio" name="team" value="Lakers" className="mr-2" /> Los Angeles Lakers
            </label>
            <label className="flex items-center">
              <input type="radio" name="team" value="Nuggets" className="mr-2" /> Denver Nuggets
            </label>
            <label className="flex items-center">
              <input type="radio" name="team" value="Warriors" className="mr-2" /> Golden State Warriors
            </label>
            <label className="flex items-center">
              <input type="radio" name="team" value="Celtics" className="mr-2" /> Boston Celtics
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit Vote
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Join the Discussion</h2>
          <p className="text-lg text-gray-600 mb-4">
            Share your thoughts about the latest games, players, or teams. We'd love to hear from you!
          </p>
          <form className="flex flex-col gap-4">
            <textarea
              placeholder="Enter your comment"
              className="border border-gray-300 p-3 rounded h-32 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit Comment
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Basketball;
