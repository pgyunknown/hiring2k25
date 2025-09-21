import React, { useState, useEffect, useRef } from "react";
import Pokeball from "../components/Pokeball.jsx";

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
                const randomId =
                    Math.floor(Math.random() * countData.count) + 1;

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
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/25`
                );
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
        alert(
            "In a real app, this would save the card as an image! You would need a library like html2canvas for this functionality."
        );
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
                <img
                    src="./meriise.png"
                    alt="MERIISE Foundation Logo"
                    className="mx-auto h-32 object-contain mt-[-50px] mr-[30px]"
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

                    <h2 className="text-xl font-bold text-gray-800">
                        Congratulations
                    </h2>
                    <p className="text-gray-600 mb-4">
                        You're selected for priority list
                    </p>

                    <div
                        ref={cardRef}
                        className="w-full aspect-[3/4] bg-[#1d1d1d] rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden shadow-2xl"
                    >
                        {loading || !pokemon ? (
                            <div className="text-white flex items-center justify-center h-full">
                                Loading your Pokémon...
                            </div>
                        ) : (
                            <>
                                <div className="relative flex justify-between items-start">
                                    {/* Big faded ID in the background */}
                                    <p className="absolute left-3 top-3 text-4xl md:text-5xl font-bold text-white/40 font-pokemon-hollow tracking-[6px] z-[20]">
                                        #{String(pokemon.id).padStart(4, "0")}
                                    </p>
                                    {/* Vertical Pokémon name on the right, above the image */}
                                    <p
                                        className="absolute right-3 top-1/2 translate-y-20 font-pokemon-hollow z-[200] text-4xl md:text-5xl font-bold text-white capitalize tracking-widest"
                                        style={{ writingMode: "vertical-rl" }}
                                    >
                                        {pokemon.name}
                                    </p>
                                </div>
                                <img
                                    src={pokemon.image}
                                    alt={pokemon.name}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-28 w-3/4 h-auto z-[201]"
                                />
                                <div className="z-10">
                                    <h3 className="text-3xl font-bold text-white capitalize">
                                        {formData.name || "Trainer"}
                                    </h3>
                                    <p className="text-sm text-blue-300">USN</p>
                                    <p className="text-lg font-semibold text-white">
                                        {domain.name}
                                    </p>
                                </div>
                                <img
                                    src="./meriise.png"
                                    alt="Small Logo"
                                    className="absolute bottom-4 right-4 h-8 w-auto opacity-80"
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
