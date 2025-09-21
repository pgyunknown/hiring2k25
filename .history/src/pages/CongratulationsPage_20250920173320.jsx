import React, { useState, useEffect, useRef } from "react";

// The Pokeball component is now defined inside this file to resolve the import error.
const Pokeball = ({ className = "" }) => (
  <div
    className={`absolute w-12 h-12 rounded-full bg-white border-4 border-black overflow-hidden flex flex-col items-center justify-center ${className}`}
  >
    <div className="w-full h-1/2 bg-red-500"></div>
    <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-black"></div>
  </div>
);

const CongratulationsPage = ({ domain, formData }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      setLoading(true);
      try {
        // Fetching a list of all pokemon to get a truly random one up to Gen 9
        const countResponse = await fetch(
          "https://pokeapi.co/api/v2/pokemon-species/?limit=1"
        );
        const countData = await countResponse.json();
        const randomId = Math.floor(Math.random() * countData.count) + 1;

        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        if (!response.ok) throw new Error("Pokemon not found!");
        const data = await response.json();
        setPokemon({
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
        });
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
        // Fetch a default as fallback (Pikachu)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/25`);
        const data = await response.json();
        setPokemon({
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchRandomPokemon();
  }, []);

  // --- FIX START ---
  // Updated handleSave to use html2canvas for downloading the card
  const handleSave = () => {
    // First, check if the html2canvas library is available
    if (cardRef.current && typeof html2canvas === "function") {
      html2canvas(cardRef.current, {
        useCORS: true, // Crucial for fetching the external Pokémon image
        backgroundColor: null, // Maintains transparency
        scale: 2, // Increase scale for higher resolution output
      }).then((canvas) => {
        // Create a temporary link element to trigger the download
        const link = document.createElement("a");
        // Set the download filename using the student's name
        link.download = `${formData.name || "trainer"}-card.png`;
        // Convert the canvas to a PNG image data URL
        link.href = canvas.toDataURL("image/png");
        // Programmatically click the link to start the download
        link.click();
      });
    } else {
      // Fallback alert if the library isn't loaded
      console.error(
        "html2canvas is not loaded. Make sure to include it in your index.html"
      );
      alert("Could not save the card. The required library is missing.");
    }
  };
  // --- FIX END ---

  if (!domain) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Domain not found!</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gray-200 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-y-5 text-center animate-fade-in">
        {/* Removed negative margins to keep the logo inside the container flow */}
        <img
          src="./meriise.png"
          alt="MERIISE Foundation Logo"
          className="mx-auto h-32 object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/300x100/E0F2FE/0ea5e9?text=MERIISE+FOUNDATION";
          }}
        />
        <div
          className={`w-full p-6 bg-stone-100 rounded-3xl border-4 border-gray-400 relative`}
        >
          <Pokeball className="top-8 -left-8" />
          <Pokeball className="bottom-24 -right-10 transform scale-150" />
          <Pokeball className="bottom-2 -left-6 transform scale-75" />

          <h2 className="text-xl font-bold text-gray-800">Congratulations</h2>
          <p className="text-gray-600 mb-4">
            You have been add to the priority list
          </p>

          {/* Re-architected the card layout to use Flexbox for proper alignment */}
          <div
            ref={cardRef}
            className="w-full aspect-[3/4] bg-[#1d1d1d] rounded-2xl p-4 relative overflow-hidden shadow-2xl flex flex-col"
          >
            {loading || !pokemon ? (
              <div className="text-white flex items-center justify-center h-full">
                Loading your Pokémon...
              </div>
            ) : (
              <>
                {/* Decorative Background Elements */}
                <p className="absolute left-3 top-3 text-4xl md:text-5xl font-bold text-white/40 font-pokemon-hollow tracking-[6px] z-0">
                  #{String(pokemon.id).padStart(4, "0")}
                </p>
                <p
                  className="absolute right-3 top-1/2 -translate-y-1/2 font-pokemon-hollow text-4xl md:text-5xl font-bold text-white capitalize tracking-widest z-0"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {pokemon.name}
                </p>

                {/* Image Container (Takes up remaining space) */}
                <div className="flex-grow w-full relative flex items-center justify-center">
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    crossOrigin="anonymous" // Important: Allows html2canvas to render the external image
                    className="max-w-full max-h-full object-contain z-10"
                  />
                </div>

                {/* Details Container (Fixed at the bottom) */}
                <div className="flex-shrink-0 text-center z-10 pt-2">
                  <h3 className="text-3xl font-bold text-white capitalize">
                    {formData.name || "Trainer"}
                  </h3>
                  <p className="text-lg font-semibold text-white uppercase tracking-wider mt-1">
                    {formData.usn || "N/A"}
                  </p>
                  <p className="text-md font-semibold text-white mt-1">
                    {domain.name}
                  </p>
                </div>

                {/* MERIISE Logo (Absolute position, on top) */}
                <img
                  src="./meriise.png"
                  alt="Small Logo"
                  className="absolute bottom-4 right-4 h-10 w-auto opacity-80 z-20"
                />
              </>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            *Please bring the copy to the Auditions
          </p>
          <button
            onClick={handleSave}
            className="mt-4 px-6 py-2 bg-white text-gray-800 font-fredoka font-semibold rounded-lg shadow-md border-2 border-gray-300"
          >
            Click to save this
          </button>
          <p className="font-bold text-gray-700 mt-3">
            See you soon at the Auditions
          </p>
        </div>
      </div>
    </main>
  );
};

export default CongratulationsPage;
