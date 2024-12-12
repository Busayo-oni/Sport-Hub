import Header from "../pages/Header";
import Footer from "../pages/Footer";
import ArticleCard from "../pages/ArticleCard";
import image1 from "../assets/salah.jpg";
import image2 from "../assets/hero1.png";
import image3 from "../assets/teilemans.jpg";
import image5 from "../assets/transfer.jpg";
import ImageWithCaption from "./widthcaption";
import image4 from "../assets/Ross.jpg";
import MatchStats from "./matchStat2";
import PlayerRatings from "./playerRating2";

export default function Football() {
  return (
    <div className="bg-gray-50">
      <Header />
      <div>
        <img src={image2} alt="Match Image" className="w-full h-auto" />
      </div>
      <main className="px-5 md:px-20 py-10">
        <h1 className="text-3xl font-semibold text-gray-700">
          RB Leipzig vs Aston Villa LIVE! Champions League team news, updates, match commentary, score and report
        </h1>
        <p className="text-xl py-4 text-gray-600">
          Match report as Aston Villa beat RB Leipzig in the Champions League; John McGinn, Jhon Duran and Ross Barkley scored for Unai Emery's side after Leipzig battled back on two occasions; Villa climb into third while Leipzig are still without a point
        </p>
        <p className="text-gray-500 text-md pb-4">Wednesday 11 December 2024 08:51, UK</p>

        <ImageWithCaption
          src={image3}
          alt="Aston Villa forward Jhon Duran scored another stunner in the Champions League"
          caption="Aston Villa forward Jhon Duran scored another stunner in the Champions League"
        />

        <h2 className="text-3xl font-bold mb-6">Football</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard
            image={image1}
            title="Girona 0-1 Liverpool:"
            excerpt="Girona 0-1 Liverpool: Mohamed Salah penalty after VAR overturn puts Reds on brink of Champions League last 16"
            date="Dec 10, 2024"
            link="/liverpool"
          />
          <ArticleCard
          image={image5}
            title="Transfer News"
            excerpt="Stay updated with the latest football transfers."
            date="Dec 9, 2024"
            link="/TransferNews"
          />
        </div>

        <section className="py-10">
          <h1 className="text-3xl font-semibold text-gray-700">
            Aston Villa secured a late 3-2 win against RB Leipzig after Ross Barkley and Jhon Duran impressed off the bench.
          </h1>
          <p className="text-xl pt-4 text-gray-600">
            Duran kick-started his outing with a long-range effort in the second half (52) before Barkley won the game in the 85th-minute - but Unai Emery has once again called for patience from his young forward following another strong cameo.
          </p>
          <p className="text-xl pt-4 mb-10 text-gray-600">
            "Sometimes he is very impatient," Emery told Amazon Prime after Duran scored and saw a second goal disallowed. "He was fantastic today and he has massive potential. Tactically he is improving."
          </p>
          <ImageWithCaption
            src={image4}
            alt="Ross Barkley secured a late win for Aston Villa"
            caption="Ross Barkley secured a late win for Aston Villa"
          />
        </section>

        <section className="py-10">
          <h1 className="text-3xl font-semibold text-gray-700">How Villa secured a crucial win</h1>
          <p className="text-xl pt-4 text-gray-600">
            John McGinn got Villa off to a flying start inside three minutes after guiding the ball past Peter Gulacsi and his side looked to be totally in control of the fixture, until a rare error from Emiliano Martinez gifted Leipzig an equaliser.
          </p>
          <p className="text-xl pt-4 text-gray-600">
            The Villa keeper allowed the ball to bounce in the penalty area, where Lois Openda was waiting, and could only watch as the striker rounded him and slotted the ball into an empty net.
          </p>
          <div className="p-7 bg-gray-100 rounded-md mt-8">
            <div className="border-l-4 border-blue-700 pl-4">
              <h1 className="text-2xl font-semibold text-gray-700">Team news: Duran dropped</h1>
            </div>
            <ul className="list-disc ml-8 mt-4">
              <li className="text-xl text-gray-600">
                John McGinn got Villa off to a flying start inside three minutes after guiding the ball past Peter Gulacsi and his side looked to be totally in control of the fixture, until a rare error from Emiliano Martinez gifted Leipzig an equaliser.
              </li>
            </ul>
          </div>
        </section>

        <PlayerRatings />
        <MatchStats />
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Fan Poll</h2>
          <p className="text-lg text-gray-600 mb-4">Who do you think will win the Champions League this season?</p>
          <form className="bg-gray-100 p-6 rounded-lg shadow">
            <div className="mb-4">
              <input type="radio" id="liverpool" name="team" value="Liverpool" />
              <label htmlFor="liverpool" className="text-lg text-gray-800 ml-2">Liverpool</label>
            </div>
            <div className="mb-4">
              <input type="radio" id="realMadrid" name="team" value="Real Madrid" />
              <label htmlFor="realMadrid" className="text-lg text-gray-800 ml-2">Real Madrid</label>
            </div>
            <div className="mb-4">
              <input type="radio" id="manCity" name="team" value="Manchester City" />
              <label htmlFor="manCity" className="text-lg text-gray-800 ml-2">Manchester City</label>
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
