import React from "react";

export default function MatchStats() {
  const stats = [
    { name: "Goals", home: 2, away: 3 },
    { name: "Shots", home: 17, away: 19 },
    { name: "Shots on target", home: 6, away: 8 },
    { name: "Possession", home: "46.7%", away: "53.3%" },
    { name: "Successful passes", home: 380, away: 436 },
    { name: "Long passes", home: 39, away: 24 },
    { name: "Corners won", home: 5, away: 7 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-10 w-full lg:w-1/2 text-gray-900">
      <h3 className="text-lg font-semibold text-primary mb-4">Story of the match in stats</h3>
      
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-lg font-bold">RB Leipzig</h4>
        <div className="flex items-center text-lg font-bold space-x-2">
          <span>2</span>
          <span>-</span>
          <span>3</span>
        </div>
        <h4 className="text-lg font-bold">Aston Villa</h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button className="py-2 px-4 bg-primary text-white rounded-lg font-medium">General</button>
        <button className="py-2 px-4 bg-gray-200 text-gray-800 rounded-lg font-medium">Defensive</button>
      </div>

      <div className="mt-6 space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-1 ">
            <div className="flex justify-between text-sm">
              <span>{stat.home}</span>
              <span className="text-gray-600">{stat.name}</span>
              <span>{stat.away}</span>
            </div>
            <div className="relative h-2 bg-blue-900 rounded-full">
              <div
                className="absolute h-2 bg-blue-500 rounded-full"
                style={{
                  width: `${
                    typeof stat.home === "number" && typeof stat.away === "number"
                      ? (stat.home / (stat.home + stat.away)) * 100
                      : 50
                  }%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
