// src/components/PlayerRatings.jsx
export default function PlayerRatings() {
    return (
      <div className="bg-gray-100 lg:w-1/2 w-full rounded-lg shadow-md p-6 text-gray-900">
        <div className=" border-l-[18px] border-blue-700 pl-2">
        <h3 className="text-lg font-semibold text-primary mb-4">Player ratings: Duran changes the game</h3>
        </div>
        
        <div className="mb-4">
          <p>
            <strong>RB Leipzig:</strong> Gulacsi (5), Geertruida (6), Orban (6), Nusa (6), Haidara (6), Openda (8), Siewald (6), Baumgartner (8), Vermeeren (6), Sesko (5); Henrichs (5).
          </p>
          <p>
            <strong>Subs used:</strong> Silva (N/A), Kampl (6).
          </p>
        </div>
        
        <div className="mb-4">
          <p>
            <strong>Aston Villa:</strong> Martinez (5), Cash (6), Carlos (6), Konsa (7), Pau (6), Digne (6), Kamara (6), Tielemans (6), McGinn (8), Rogers (7); Watkins (6).
          </p>
          <p>
            <strong>Subs used:</strong> Duran (9), Maatsen (N/A), Nedeljkovic (6), Barkley (8).
          </p>
        </div>
        
        <p>
          <strong>Player of the match:</strong> Jhon Duran.
        </p>
      </div>
    );
  }
  