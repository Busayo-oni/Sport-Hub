import Header from '../pages/Header';
import Footer from '../pages/Footer';
import ImageWithCaption from './widthcaption';
import PlayerStats from './PlayerStats'; // Assume you have this component
import image1 from '../assets/alcaraz1.jpg';
import image2 from '../assets/alcaraz2.webp';
import image3 from '../assets/alcaraz3.jpg';

export default function CarlosAlcaraz() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="p-6 bg-gray-50 flex-grow">
        {/* Hero Section */}
        <section className="relative mb-12">
          <img
            src={image1}
            alt="Carlos Alcaraz celebrating a victory"
            className="w-full h-72 object-cover rounded-lg shadow-lg"
          />
          <h1 className="absolute bottom-6 left-6 text-white text-4xl font-bold drop-shadow-lg">
            The Rise of Carlos Alcaraz
          </h1>
        </section>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            A New Star in the World of Tennis
          </h2>
          <p className="text-lg text-gray-700 leading-7">
            Carlos Alcaraz has taken the tennis world by storm with his
            incredible talent, determination, and sportsmanship. At just 20
            years old, he has already achieved milestones that many players
            dream of throughout their careers. From his humble beginnings in
            Murcia, Spain, to dominating the ATP circuit, Alcaraz is poised to
            be the face of tennis for years to come.
          </p>
        </section>

        {/* Achievements Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWithCaption
              src={image2}
              alt="Carlos Alcaraz winning the US Open"
              caption="Carlos Alcaraz celebrates his first Grand Slam title at the 2022 US Open."
            />
            <div>
              <ul className="list-disc text-lg text-gray-700 space-y-4 pl-5">
                <li>
                  Became the youngest ATP World No. 1 in September 2022 after
                  winning the US Open.
                </li>
                <li>
                  Won multiple ATP Masters 1000 titles, including Miami and
                  Madrid.
                </li>
                <li>
                  Known for his thrilling five-set matches, particularly against
                  legends like Novak Djokovic and Rafael Nadal.
                </li>
                <li>
                  Captured fans’ hearts with his relentless energy and
                  charismatic smile.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            The Journey of a Champion
          </h2>
          <p className="text-lg text-gray-700 leading-7">
            Born in El Palmar, Murcia, Carlos Alcaraz started playing tennis at
            a young age under the guidance of his father. His natural talent and
            hard work quickly set him apart, and he joined the prestigious Juan
            Carlos Ferrero Academy at just 15 years old. Under Ferrero’s
            mentorship, Alcaraz honed his skills, focusing on his aggressive
            baseline game and mental toughness.
          </p>
          <p className="text-lg text-gray-700 leading-7 mt-4">
            Alcaraz’s breakthrough year came in 2021 when he won his first ATP
            title in Umag and reached the quarterfinals of the US Open, where he
            defeated top-ranked players in thrilling matches. Since then, he has
            consistently climbed the ranks, becoming a formidable opponent for
            the sport’s biggest names.
          </p>
        </section>

        {/* Player Stats Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Player Stats</h2>
          <PlayerStats
            stats={{
              "Current Ranking": "World No. 2",
              "Grand Slam Titles": 1,
              "ATP Titles": 12,
              "Age": 20,
              "Nationality": "Spain",
              "Height": "6'1\" (185 cm)",
            }}
          />
        </section>

        {/* Future Outlook */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            The Future of Tennis
          </h2>
          <p className="text-lg text-gray-700 leading-7">
            As Alcaraz continues to evolve his game, many experts predict he
            will dominate the tennis world for the next decade. His ability to
            adapt to different surfaces, combined with his physical and mental
            endurance, makes him a well-rounded and versatile player. With
            endorsements from global brands and a growing fan base, Carlos
            Alcaraz is not just a tennis player – he’s a global phenomenon.
          </p>
        </section>

        {/* Closing Image */}
        <section>
          <ImageWithCaption
            src={image3}
            alt="Carlos Alcaraz at a press conference"
            caption="Carlos Alcaraz addresses the media after a thrilling victory."
          />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
