import React from "react";

export default function MatchStats() {
  const stats = [
    { name: "Goals", home: 0, away: 1 },
    { name: "Shots", home: 13, away: 15 },
    { name: "Shots on target", home: 5, away: 7 },
    { name: "Possession", home: "37.6%", away: "62.4%" },
    { name: "Successful passes", home: 304, away: 553 },
    { name: "Long passes", home: 36, away: 29 },
    { name: "Corners won", home: 5, away: 8 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-10 w-full lg:w-1/2 text-gray-900">
      <h3 className="text-lg font-semibold text-primary mb-4">Story of the match in stats</h3>
      
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-lg font-bold">Girona</h4>
        <div className="flex items-center text-lg font-bold space-x-2">
          <span>0</span>
          <span>-</span>
          <span>1</span>
        </div>
        <h4 className="text-lg font-bold">Liverpool</h4>
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
