import Header from "../pages/Header";
import Footer from "../pages/Footer";
import ArticleCard from "../pages/ArticleCard";
import ImageWithCaption from "./widthcaption";
import PlayerStats from "./playerStats";
import image1 from "../assets/tennis-hero.jpg";
import image2 from "../assets/player1.jpg";
import image3 from "../assets/player2.jpg";
import articleImage1 from "../assets/tennis-article1.jpg";
import articleImage2 from "../assets/tennis-article2.webp";

export default function Tennis() {
  return (
    <div className="bg-gray-50">
      <Header />
      {/* Hero Image Section */}
      <div>
        <img src={image1} alt="Tennis Match" className="w-full h-auto" />
      </div>

      {/* Main Content Section */}
      <main className="px-5 md:px-20 py-10">
        {/* Main Title */}
        <h1 className="text-3xl font-semibold text-gray-700">
        Wimbledon 2024: Was Novak Djokovic disrespected by Centre Court crowd? Tennis legends have their say...
        </h1>
        <p className="text-xl py-4 text-gray-600">
        Novak Djokovic felt he was disrespected by the Centre Court at Wimbledon, but what do tennis legends James Blake, Thomas Enqvist, Greg Rusedski and Marcos Baghdatis think? <strong> You can follow updates from Wimbledon by heading to our live blog or live scores page       </strong> </p>
        <p className="text-gray-500 text-md pb-4">Sunday 12 December 2024 10:00, UK</p>

        {/* Highlight Section */}
        <ImageWithCaption
          src={image2}
          alt="Novak Djokovic in action during Wimbledon 2024"
          caption="Novak Djokovic keeps playing the tune as he continues he quest for a record-equalling eighth Wimbledon title
"
        />
        <h2 className="text-3xl font-bold mt-10 mb-6">Match Highlights</h2>
        <p className="text-xl text-gray-600">
          Novak Djokovic claimed his record-breaking 25th Grand Slam title after defeating Carlos Alcaraz in a five-set thriller. The Serbian star showcased his experience and composure, rallying back from a two-set deficit to win the final.
        </p>
        <p className="text-xl text-gray-600 pt-4">
          Carlos Alcaraz, the young sensation, put up a valiant fight and displayed glimpses of brilliance throughout the match. Despite the loss, the Spaniard continues to prove he is the future of tennis.
        </p>

        {/* Player Performance Section */}
        <section className="py-10">
          <h2 className="text-3xl font-semibold text-gray-700">Player Performances</h2>
          <ImageWithCaption
            src={image3}
            alt="Carlos Alcaraz during the Wimbledon final"
            caption="Carlos Alcaraz during the Wimbledon final"
          />
          <p className="text-xl pt-4 text-gray-600">
            Novak Djokovic delivered a masterclass in resilience and strategy, particularly in the final set where his serving accuracy was unmatched. Alcaraz, on the other hand, dazzled the crowd with his incredible court coverage and aggressive shot-making.
          </p>
          <p className="text-xl pt-4 text-gray-600">
            Both players pushed each other to the limit, with long rallies, deft drop shots, and remarkable passing winners. Fans were treated to one of the best Wimbledon finals in recent memory.
          </p>
        </section>

        {/* Related Articles Section */}
        <h2 className="text-3xl font-bold mt-10 mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard
            image={articleImage1}
            title="Top 10 Moments in Wimbledon History"
            excerpt="Relive the most iconic moments in Wimbledon history, from Federer vs Nadal to Serena Williams' dominance."
            date="Dec 12, 2024"
            link="/WimbledonHistory" 
          />
          <ArticleCard
            image={articleImage2}
            title="The Rise of Carlos Alcaraz"
            excerpt="Explore the journey of Carlos Alcaraz, the young star taking the tennis world by storm."
            date="Dec 10, 2024"
            link="/CarlosAlcaraz"
          />
        </div>

        {/* Player Stats Section */}
        <section className="py-10">
          <h2 className="text-3xl font-semibold text-gray-700">Match Statistics</h2>
          <PlayerStats />
        </section>

        {/* Conclusion */}
        <h1 className="text-3xl font-semibold text-gray-700 mt-10">
          Djokovic Proves His Greatness Once Again
        </h1>
        <p className="text-xl pt-4 text-gray-600">
          Novak Djokovic has further solidified his position as one of the greatest tennis players of all time. With his 25th Grand Slam title, the Serbian maestro continues to set records and inspire generations of tennis fans worldwide.
        </p>
        <p className="text-xl pt-4 text-gray-600 mb-10">
          Carlos Alcaraz, despite falling short in the final, has proven that he belongs on the biggest stage. The tennis world eagerly awaits more epic battles between these two incredible athletes.
        </p>
      </main>
      <Footer />
    </div>
  );
}
