export default function PlayerStats() {
    const stats = [
      { stat: "Aces", player1: 15, player2: 12 },
      { stat: "Double Faults", player1: 3, player2: 4 },
      { stat: "First Serve %", player1: "72%", player2: "68%" },
      { stat: "Winning % on First Serve", player1: "80%", player2: "78%" },
      { stat: "Break Points Won", player1: 5, player2: 3 },
      { stat: "Net Points Won", player1: "15/20 (75%)", player2: "12/18 (67%)" },
      { stat: "Unforced Errors", player1: 25, player2: 28 },
      { stat: "Winners", player1: 42, player2: 38 },
    ];
  
    return (
      <div className="bg-gray-100 rounded-md p-5 shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-5">Player Statistics</h2>
        <table className="w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-3 border border-gray-300">Statistic</th>
              <th className="p-3 border border-gray-300">Player 1</th>
              <th className="p-3 border border-gray-300">Player 2</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <td className="p-3 border border-gray-300">{stat.stat}</td>
                <td className="p-3 border border-gray-300">{stat.player1}</td>
                <td className="p-3 border border-gray-300">{stat.player2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  