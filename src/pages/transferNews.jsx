import React from 'react';
import Header from './Header';
import Footer from './Footer';
import image5 from "../assets/transfer.jpg";
import NewsletterForm from './newSlater';


const TransferNews = () => {
  return (
    <>
      <Header />
      <img src={image5} alt="Transfer image" className='lg:h-[80vh] h-[50vh] w-full ' />
      <main className="lg:px-20 px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Transfer News</h1>
        <p className="text-xl text-gray-600 mb-6">
          Stay updated with the latest football transfers, player movements, and club announcements. From breaking deals to rumors, we bring you all the action from the transfer window.
        </p>

        <section className="mb-10">-
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Breaking Transfer Updates</h2>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li className="mb-2">
              <strong>Kylian Mbappe</strong> officially joins Real Madrid in a record-breaking deal worth €200M.
            </li>
            <li className="mb-2">
              <strong>Declan Rice</strong> completes his move to Arsenal for £100M.
            </li>
            <li className="mb-2">
              <strong>Victor Osimhen</strong> linked with a potential move to Manchester United.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Top Transfer Rumors</h2>
          <p className="text-lg text-gray-600 mb-4">
            The transfer rumor mill is buzzing with speculation:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li className="mb-2">Chelsea eyeing <strong>Joao Felix</strong> for a January loan deal.</li>
            <li className="mb-2">Barcelona interested in <strong>Bernardo Silva</strong>.</li>
            <li className="mb-2">Inter Milan targeting <strong>Harry Kane</strong> as a key summer signing.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Confirmed Transfers</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Player</th>
                <th className="border border-gray-300 p-3 text-left">From</th>
                <th className="border border-gray-300 p-3 text-left">To</th>
                <th className="border border-gray-300 p-3 text-left">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Jude Bellingham</td>
                <td className="border border-gray-300 p-3">Borussia Dortmund</td>
                <td className="border border-gray-300 p-3">Real Madrid</td>
                <td className="border border-gray-300 p-3">€120M</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Lionel Messi</td>
                <td className="border border-gray-300 p-3">PSG</td>
                <td className="border border-gray-300 p-3">Inter Miami</td>
                <td className="border border-gray-300 p-3">Free</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Cristiano Ronaldo</td>
                <td className="border border-gray-300 p-3">Manchester United</td>
                <td className="border border-gray-300 p-3">Al-Nassr</td>
                <td className="border border-gray-300 p-3">Free</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Get Notified</h2>
          <p className="text-lg text-gray-600 mb-4">
            Subscribe to our newsletter to stay updated with the latest football transfer news.
          </p>
          <NewsletterForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TransferNews;
