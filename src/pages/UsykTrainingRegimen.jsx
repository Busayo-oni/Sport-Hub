import React from 'react';
import Header from './Header';
import Footer from './Footer';
import usykImage from "../assets/usykImage.jpg";

const UsykTrainingRegimen = () => {
  return (
    <>
      <Header />
      <img src={usykImage} alt="Oleksandr Usyk Training" className="h-[80vh] w-full object-cover" />
      <main className="lg:px-20 px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">A Look at Usyk’s Training Regimen</h1>
        <p className="text-xl text-gray-600 mb-6">
          How does Oleksandr Usyk prepare for the biggest fights of his career? Dive into the world of the world heavyweight champion’s rigorous training schedule and the secrets behind his unmatched fitness.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Daily Routine</h2>
          <p className="text-lg text-gray-600 mb-4">
            Oleksandr Usyk follows a disciplined routine that ensures his mind and body are at peak performance. His day starts with a 6:00 AM cardio session, often a mix of road running and swimming, followed by a healthy, high-protein breakfast.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li className="mb-2">Morning: Road running for endurance or swimming for full-body fitness.</li>
            <li className="mb-2">Afternoon: Strength training and sparring sessions to hone his boxing skills.</li>
            <li className="mb-2">Evening: Recovery activities like yoga or massages to prevent injuries.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Strength and Conditioning</h2>
          <p className="text-lg text-gray-600 mb-4">
            Usyk focuses on explosive strength, which is critical for his speed and power in the ring. His workouts include:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li className="mb-2"><strong>Weightlifting:</strong> High-intensity sessions with deadlifts, squats, and bench presses.</li>
            <li className="mb-2"><strong>Plyometrics:</strong> Exercises like box jumps to improve agility and explosiveness.</li>
            <li className="mb-2"><strong>Core Training:</strong> Stability exercises that enhance his balance and punching power.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Diet and Nutrition</h2>
          <p className="text-lg text-gray-600 mb-4">
            To maintain his weight class and maximize his energy, Usyk adheres to a strict diet:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li className="mb-2">High-protein meals, including chicken, fish, and eggs.</li>
            <li className="mb-2">Complex carbohydrates like quinoa and sweet potatoes for sustained energy.</li>
            <li className="mb-2">Fresh fruits and vegetables to ensure adequate vitamins and minerals.</li>
            <li className="mb-2">Hydration is key, with a focus on water and electrolyte-rich drinks.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Mental Preparation</h2>
          <p className="text-lg text-gray-600 mb-4">
            Usyk believes that mental strength is just as important as physical fitness. He dedicates time to meditation, visualization, and working with a sports psychologist to prepare for the high-pressure environment of championship fights.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Your Thoughts?</h2>
          <p className="text-lg text-gray-600 mb-4">
            What do you think about Usyk’s training regimen? Share your thoughts or let us know how you train for your own fitness goals!
          </p>
          <form className="flex flex-col gap-4">
            <textarea
              placeholder="Share your thoughts"
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

export default UsykTrainingRegimen;
