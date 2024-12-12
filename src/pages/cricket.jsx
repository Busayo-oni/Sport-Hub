import React from 'react';
import Header from './Header';
import Footer from './Footer';
import cricketImage from "../assets/cricket.webp";

const Cricket = () => {
  return (
    <>
      <Header />
      <img src={cricketImage} alt="Cricket Match" className="h-[80vh] w-full object-cover" />
      <main className="lg:px-20 px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Cricket</h1>
        <p className="text-xl text-gray-600 mb-6">
          Follow thrilling cricket tournaments, player records, and the latest action from the cricketing world. From nail-biting matches to player milestones, we've got it all covered.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Upcoming Tournaments</h2>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li className="mb-2">
              <strong>ICC Cricket World Cup 2025</strong>: Witness the world's best teams compete for the ultimate prize.
            </li>
            <li className="mb-2">
              <strong>Asia Cup</strong>: The battle for dominance among the top Asian cricket teams.
            </li>
            <li className="mb-2">
              <strong>IPL 2025</strong>: The most-watched cricket league with thrilling matches and star players.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Recent Records</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Player</th>
                <th className="border border-gray-300 p-3 text-left">Achievement</th>
                <th className="border border-gray-300 p-3 text-left">Match</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Virat Kohli</td>
                <td className="border border-gray-300 p-3">Fastest 10,000 ODI runs</td>
                <td className="border border-gray-300 p-3">India vs Australia</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Babar Azam</td>
                <td className="border border-gray-300 p-3">Highest T20I score by a captain</td>
                <td className="border border-gray-300 p-3">Pakistan vs South Africa</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Mitchell Starc</td>
                <td className="border border-gray-300 p-3">Fastest 5-wicket haul in World Cup</td>
                <td className="border border-gray-300 p-3">Australia vs New Zealand</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Fan Poll</h2>
          <p className="text-lg text-gray-600 mb-4">
            Who do you think will win the ICC Cricket World Cup 2025? Cast your vote below!
          </p>
          <form className="flex flex-col gap-4">
            <label className="flex items-center">
              <input type="radio" name="team" value="India" className="mr-2" /> India
            </label>
            <label className="flex items-center">
              <input type="radio" name="team" value="Australia" className="mr-2" /> Australia
            </label>
            <label className="flex items-center">
              <input type="radio" name="team" value="England" className="mr-2" /> England
            </label>
            <label className="flex items-center">
              <input type="radio" name="team" value="Pakistan" className="mr-2" /> Pakistan
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
            Share your thoughts about the latest matches, tournaments, or players. We'd love to hear from you!
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

export default Cricket;
