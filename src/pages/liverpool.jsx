import React from "react";
import Ben from "../assets/ben.jpg";
import Header from "./Header";
import salah from "../assets/salah.jpg";
import Hero from "../assets/hero2.png";
import salah2 from "../assets/salah2.jpg";
import ImageWithCaption from "./widthcaption";
import PlayerRatings from "./playerRating";
import MatchStats from "./matchStat";
import Footer from "./Footer";

const Liverpool = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <img src={Hero} alt="Liverpool Hero" className="w-full" />

      {/* Main Content */}
      <div className="px-8 md:px-32 py-10">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-700 leading-tight">
          Girona 0-1 Liverpool: Mohamed Salah penalty after VAR overturn puts Reds on brink of Champions League last 16
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl pt-4 leading-relaxed">
          Match report as Mohamed Salah penalty preserves Liverpool's 100 per cent start to new Champions League format
          after Donny van de Beek is penalised for foul on Luis Diaz; Liverpool have won their opening six matches of a
          European campaign for the second time in their history.
        </p>

        {/* Author Section */}
        <div className="flex items-center gap-3 py-7">
          <img src={Ben} alt="Ben Grounds" className="w-16 h-16 rounded-full" />
          <div>
            <b className="text-lg text-blue-700 font-semibold">Ben Grounds</b>
            <p className="text-sm text-blue-500">@Ben_Islington</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-6">Tuesday 10 December 2024 22:36, UK</p>

        {/* Image with Caption */}
        <ImageWithCaption
          src={salah}
          alt="Mohamed Salah celebrates after scoring a penalty"
          caption="Mohamed Salah has now scored the joint-most penalties for Liverpool in the Champions League, level with Steven Gerrard."
        />

        {/* Content Section */}
        <h2 className="text-3xl font-semibold text-gray-600 mt-8 mb-4">
          Liverpool all but qualified for the last 16 of the Champions League.
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
          The result means that for only the second time in the club's history, Liverpool have won their opening six
          matches of a European campaign. In Liverpool's last outing against Newcastle, Arne Slot's side failed to win
          for only the third time in 21 matches under the Dutchman.
        </p>

        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mt-6">
          They arrived in Girona knowing another win would move them ever closer to securing a place in the last-16
          draw as one of the seeded teams. They cemented their position at the top of the standings after Donny van de
          Beek was penalised for a foul on Luis Diaz inside the box only after VAR intervened.
        </p>

        {/* Another Image with Caption */}
        <ImageWithCaption
          src={salah2}
          alt="Salah's Performance Stats"
          caption="No player has been involved in more goals in Europe's big five leagues this season across all competitions than Mohamed Salah (28 - 16 goals, 12 assists)."
        />

        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mt-6">
          Salah kept his composure to convert his spot-kick past Paulo Gazzaniga to keep Liverpool perfect. The Egypt
          international became the 11th man to reach 50 Champions League goals, overtaking Zlatan Ibrahimovic and Kylian
          Mbappe with Thierry Henry (51) and Thomas Muller (54) now in his sights.
        </p>

        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mt-6">
          Having missed from the spot a fortnight ago against Real Madrid, there was no mistake this time when presented
          with the opportunity in the 63rd minute to extend an impressive record of scoring in 11 of his last 16
          matches.
        </p>

        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mt-6 mb-10">
          It had up to that point been a somewhat laboured performance from the Premier League leaders with Alisson
          making good saves to deny Bryan Gil and Arnaut Danjuma on his return to the side.
        </p>

        {/* Player Ratings */}
        <PlayerRatings />

        {/* Closing Content */}
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mt-8">
          Twenty of Liverpool's last 23 goals have now come after the break, and they may already have enough points to
          guarantee a top-eight finish - depending on other results in matchweek six.
        </p>

        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mt-6 mb-10">
          Slot's side return to European action in January at home to Lille, when they can mathematically secure a
          last-16 tie against a side to have come through the play-offs.
        </p>

        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-10">
          Meanwhile, Girona are staring at the prospect of elimination following a fifth defeat in their opening six
          games.
        </p>

        {/* Match Stats */}
        <MatchStats />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Liverpool;
