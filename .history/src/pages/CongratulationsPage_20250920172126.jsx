// import React, { useState, useEffect, useRef } from "react";

// // The Pokeball component is now defined inside this file to resolve the import error.
// const Pokeball = ({ className = "" }) => (
//   <div
//     className={`absolute w-12 h-12 rounded-full bg-white border-4 border-black overflow-hidden flex flex-col items-center justify-center ${className}`}
//   >
//     <div className="w-full h-1/2 bg-red-500"></div>
//     <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-black"></div>
//   </div>
// );

// const CongratulationsPage = ({ domain, formData }) => {
//   const [pokemon, setPokemon] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const fetchRandomPokemon = async () => {
//       setLoading(true);
//       try {
//         // Fetching a list of all pokemon to get a truly random one up to Gen 9
//         const countResponse = await fetch(
//           "https://pokeapi.co/api/v2/pokemon-species/?limit=1"
//         );
//         const countData = await countResponse.json();
//         const randomId = Math.floor(Math.random() * countData.count) + 1;

//         const response = await fetch(
//           `https://pokeapi.co/api/v2/pokemon/${randomId}`
//         );
//         if (!response.ok) throw new Error("Pokemon not found!");
//         const data = await response.json();
//         setPokemon({
//           id: data.id,
//           name: data.name,
//           image: data.sprites.other["official-artwork"].front_default,
//         });
//       } catch (error) {
//         console.error("Failed to fetch Pokémon:", error);
//         // Fetch a default as fallback (Pikachu)
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/25`);
//         const data = await response.json();
//         setPokemon({
//           id: data.id,
//           name: data.name,
//           image: data.sprites.other["official-artwork"].front_default,
//         });
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRandomPokemon();
//   }, []);

//   const handleSave = () => {
//     if (cardRef.current && typeof html2canvas === "function") {
//       // Check if html2canvas is loaded
//       html2canvas(cardRef.current, {
//         useCORS: true, // Important for external images like the Pokémon
//         backgroundColor: null, // Use transparent background
//       }).then((canvas) => {
//         const link = document.createElement("a");
//         link.download = `${formData.name || "trainer"}-card.png`;
//         link.href = canvas.toDataURL("image/png");
//         link.click();
//       });
//     } else {
//       console.error(
//         "html2canvas is not loaded. Make sure to include it in your index.html"
//       );
//       alert("Could not save the card. The required library is missing.");
//     }
//   };

//   if (!domain) {
//     return (
//       <div className="text-center">
//         <h1 className="text-2xl font-bold">Domain not found!</h1>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen w-full bg-gray-200 flex items-center justify-center p-4 font-sans">
//       <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-y-5 text-center animate-fade-in">
//         <img
//           src="./meriise.png"
//           alt="MERIISE Foundation Logo"
//           className="mx-auto h-32 object-contain mt-[-50px] mr-[30px]"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src =
//               "https://placehold.co/300x100/E0F2FE/0ea5e9?text=MERIISE+FOUNDATION";
//           }}
//         />
//         <div
//           className={`w-full p-6 bg-stone-100 rounded-3xl border-4 border-gray-400 relative`}
//         >
//           <Pokeball className="top-8 -left-8" />
//           <Pokeball className="bottom-24 -right-10 transform scale-150" />
//           <Pokeball className="bottom-2 -left-6 transform scale-75" />

//           <h2 className="text-xl font-bold text-gray-800">Congratulations</h2>
//           <p className="text-gray-600 mb-4">
//             You're selected for priority list
//           </p>

//           <div
//             ref={cardRef}
//             className="w-full aspect-[3/4] bg-[#1d1d1d] rounded-2xl p-4 relative overflow-hidden shadow-2xl"
//           >
//             {loading || !pokemon ? (
//               <div className="text-white flex items-center justify-center h-full">
//                 Loading your Pokémon...
//               </div>
//             ) : (
//               <>
//                 {/* Background elements */}
//                 <p className="absolute left-3 top-3 text-4xl md:text-5xl font-bold text-white/40 font-pokemon-hollow tracking-[6px] z-[20]">
//                   #{String(pokemon.id).padStart(4, "0")}
//                 </p>
//                 <p
//                   className="absolute right-3 top-1/2 translate-y-20 font-pokemon-hollow z-[200] text-4xl md:text-5xl font-bold text-white capitalize tracking-widest"
//                   style={{ writingMode: "vertical-rl" }}
//                 >
//                   {pokemon.name}
//                 </p>

//                 {/* --- FIX START --- */}
//                 {/* Centered content block for image and details */}
//                 <div className="absolute inset-0 pt-8 flex flex-col items-center justify-start z-[201]">
//                   {/* Image container with max height */}
//                   <div className="w-full h-1/2 flex items-center justify-center">
//                     <img
//                       src={pokemon.image}
//                       alt={pokemon.name}
//                       crossOrigin="anonymous"
//                       className="max-w-full max-h-full object-contain"
//                     />
//                   </div>

//                   {/* Details block, with margin-top to create space */}
//                   <div className="text-center mt-4">
//                     <h3 className="text-3xl font-bold text-white capitalize">
//                       {formData.name || "Trainer"}
//                     </h3>
//                     {/* USN without a label */}
//                     <p className="text-lg font-semibold text-white uppercase tracking-wider mt-1">
//                       {formData.usn || "N/A"}
//                     </p>
//                     <p className="text-md font-semibold text-white mt-1">
//                       {domain.name}
//                     </p>
//                   </div>
//                 </div>
//                 {/* --- FIX END --- */}

//                 {/* MERIISE Logo */}
//                 <img
//                   src="./meriise.png"
//                   alt="Small Logo"
//                   className="absolute bottom-4 right-4 h-8 w-auto opacity-80 z-[202]"
//                 />
//               </>
//             )}
//           </div>
//           <p className="text-xs text-gray-500 mt-2">
//             *Please bring a digital copy of this to the Auditions
//           </p>
//           <button
//             onClick={handleSave}
//             className="mt-4 px-6 py-2 bg-white text-gray-800 font-fredoka font-semibold rounded-lg shadow-md border-2 border-gray-300"
//           >
//             Click to save this
//           </button>
//           <p className="font-bold text-gray-700 mt-3">
//             See you soon at the Auditions
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default CongratulationsPage;

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

  const handleSave = () => {
    if (cardRef.current && typeof html2canvas === "function") {
      // Check if html2canvas is loaded
      html2canvas(cardRef.current, {
        useCORS: true, // Important for external images like the Pokémon
        backgroundColor: null, // Use transparent background
      }).then((canvas) => {
        const link = document.createElement("a");
        link.download = `${formData.name || "trainer"}-card.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    } else {
      console.error(
        "html2canvas is not loaded. Make sure to include it in your index.html"
      );
      alert("Could not save the card. The required library is missing.");
    }
  };

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
        {/* --- FIX START --- */}
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
        {/* --- FIX END --- */}
        <div
          className={`w-full p-6 bg-stone-100 rounded-3xl border-4 border-gray-400 relative`}
        >
          <Pokeball className="top-8 -left-8" />
          <Pokeball className="bottom-24 -right-10 transform scale-150" />
          <Pokeball className="bottom-2 -left-6 transform scale-75" />

          <h2 className="text-xl font-bold text-gray-800">Congratulations</h2>
          <p className="text-gray-600 mb-4">
            You're selected for priority list
          </p>

          <div
            ref={cardRef}
            className="w-full aspect-[3/4] bg-[#1d1d1d] rounded-2xl p-4 relative overflow-hidden shadow-2xl"
          >
            {loading || !pokemon ? (
              <div className="text-white flex items-center justify-center h-full">
                Loading your Pokémon...
              </div>
            ) : (
              <>
                {/* Background elements */}
                <p className="absolute left-3 top-3 text-4xl md:text-5xl font-bold text-white/40 font-pokemon-hollow tracking-[6px] z-[20]">
                  #{String(pokemon.id).padStart(4, "0")}
                </p>
                <p
                  className="absolute right-3 top-1/2 translate-y-20 font-pokemon-hollow z-[200] text-4xl md:text-5xl font-bold text-white capitalize tracking-widest"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {pokemon.name}
                </p>

                {/* Centered content block for image and details */}
                <div className="absolute inset-0 pt-8 flex flex-col items-center justify-start z-[201]">
                  {/* Image container with max height */}
                  <div className="w-full h-1/2 flex items-center justify-center">
                    <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      crossOrigin="anonymous"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Details block, with margin-top to create space */}
                  <div className="text-center mt-4">
                    <h3 className="text-3xl font-bold text-white capitalize">
                      {formData.name || "Trainer"}
                    </h3>
                    {/* USN without a label */}
                    <p className="text-lg font-semibold text-white uppercase tracking-wider mt-1">
                      {formData.usn || "N/A"}
                    </p>
                    <p className="text-md font-semibold text-white mt-1">
                      {domain.name}
                    </p>
                  </div>
                </div>

                {/* MERIISE Logo */}
                <img
                  src="./meriise.png"
                  alt="Small Logo"
                  className="absolute bottom-4 right-4 h-8 w-auto opacity-80 z-[202]"
                />
              </>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            *Please bring a digital copy of this to the Auditions
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
