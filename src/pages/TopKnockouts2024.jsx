import React from 'react';
import Header from './Header';
import Footer from './Footer';
import imageKnockouts from "../assets/knockouts.jpg";

const TopKnockouts2024 = () => {
  return (
    <>
      <Header />
      <img src={imageKnockouts} alt="Top 5 Knockouts of 2024" className="h-[80vh] w-full object-cover" />
      <main className="lg:px-20 px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Top 5 Knockouts of 2024</h1>
        <p className="text-xl text-gray-600 mb-6">
          Relive the most stunning knockouts of the year, featuring some of the biggest names in boxing. These jaw-dropping moments showcase the sheer power and skill of the sport’s finest athletes.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">#1: Tyson Fury's Devastating Uppercut</h2>
          <p className="text-lg text-gray-600 mb-4">
            In a thrilling match against Oleksandr Usyk, Tyson Fury delivered a spectacular uppercut in the 8th round, ending the fight in dramatic fashion. Fans and pundits alike hailed it as one of the greatest knockouts in heavyweight history.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">#2: Amanda Serrano's Left Hook</h2>
          <p className="text-lg text-gray-600 mb-4">
            Amanda Serrano showcased her power with a crushing left hook against Katie Taylor. The knockout solidified her legacy as one of the best in women’s boxing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">#3: Gervonta Davis’ Lightning-Fast Counter</h2>
          <p className="text-lg text-gray-600 mb-4">
            Known for his explosive style, Gervonta Davis stunned his opponent with a lightning-fast counterpunch that left fans in awe.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">#4: Deontay Wilder’s Right Hand</h2>
          <p className="text-lg text-gray-600 mb-4">
            Deontay Wilder proved once again why his right hand is considered the most dangerous weapon in boxing. His knockout in the 4th round against Andy Ruiz Jr. was nothing short of spectacular.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">#5: Canelo Alvarez's Perfect Combination</h2>
          <p className="text-lg text-gray-600 mb-4">
            Canelo Alvarez delivered a masterclass performance, finishing the fight with a flawless combination that left his opponent unable to continue.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Share Your Favorite Moment</h2>
          <form className="flex flex-col gap-4">
            <textarea
              placeholder="Tell us your favorite knockout moment"
              className="border border-gray-300 p-3 rounded h-32 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TopKnockouts2024;
