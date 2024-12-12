// src/components/PlayerRatings.jsx
export default function PlayerRatings() {
    return (
      <div className="bg-gray-100 lg:w-1/2 w-full rounded-lg shadow-md p-6 text-gray-900">
        <div className=" border-l-[18px] border-blue-700 pl-2">
        <h3 className="text-lg font-semibold text-primary mb-4">Player ratings</h3>
        </div>
        
        <div className="mb-4">
          <p>
            <strong>Girona:</strong> Gazzaniga (8), Frances (5), Juanpe (6), Krejci (6), Blind (6), van de Beek (5), 
            Romeu (7), Gutierrez (6), Asprilla (7), Gil Salvatierra (6), Danjuma (6).
          </p>
          <p>
            <strong>Subs used:</strong> Stuani (6), Solis (n/a), Martin (n/a), Portu (6).
          </p>
        </div>
        
        <div className="mb-4">
          <p>
            <strong>Liverpool:</strong> Alisson (7), Alexander-Arnold (6), Gomez (6), van Dijk (7), Robertson (7), 
            Gravenberch (8), Jones (6), Salah (7), Szoboszlai (6), Diaz (7), Nunez (5).
          </p>
          <p>
            <strong>Subs used:</strong> Endo (n/a), Gakpo (6), Elliott (6).
          </p>
        </div>
        
        <p>
          <strong>Player of the match:</strong> Ryan Gravenberch.
        </p>
      </div>
    );
  }
  