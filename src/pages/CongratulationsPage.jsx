import React, { useState, useEffect, useRef } from "react";
import Pokeball from "../components/Pokeball.jsx";
import { exportComponentAsPNG } from "react-component-export-image";

const CongratulationsPage = ({ domain, formData, onNavigate }) => {
    const [pokemon, setPokemon] = useState(null);
    const [pokemonImageBase64, setPokemonImageBase64] = useState(null);
    const [logoImageBase64, setLogoImageBase64] = useState(null);
    const [loading, setLoading] = useState(true);
    const cardRef = useRef(null);

    const toBase64 = async (url) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        } catch (error) {
            console.error(`Error converting image to Base64: ${url}`, error);
            return null;
        }
    };

    useEffect(() => {
        const fetchAndPrepareAssets = async () => {
            setLoading(true);
            try {
                const logoPromise = toBase64("./meriise.png");

                let pokemonId = 25; 

                try {
                   
                    const controller = new AbortController();
                    const timeoutId = setTimeout(
                        () => controller.abort(),
                        3000
                    );

                    const countResponse = await fetch(
                        "https://pokeapi.co/api/v2/pokemon-species/?limit=1",
                        { signal: controller.signal }
                    );
                    clearTimeout(timeoutId);

                    if (countResponse.ok) {
                        const countData = await countResponse.json();
                        // Avoid extremely high IDs that might not exist
                        const safeCount = Math.min(countData.count, 900);
                        pokemonId = Math.floor(Math.random() * safeCount) + 1;
                    }
                } catch (error) {
                    console.log("Using fallback Pokémon ID:", pokemonId);
                }

                
                const pokemonController = new AbortController();
                const pokemonTimeoutId = setTimeout(
                    () => pokemonController.abort(),
                    5000
                );

                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
                    { signal: pokemonController.signal }
                );
                clearTimeout(pokemonTimeoutId);

                const data = await response.json();
                const imageUrl =
                    data.sprites.other["official-artwork"].front_default;

                
                const [pokemonBase64, logoBase64] = await Promise.all([
                    toBase64(imageUrl),
                    logoPromise,
                ]);

                setPokemonImageBase64(pokemonBase64);
                setLogoImageBase64(logoBase64);
                setPokemon({ id: data.id, name: data.name });
            } catch (error) {
                console.error("Failed to fetch assets:", error);

                
                try {
                    const logoBase64 = await toBase64("./meriise.png");
                    setLogoImageBase64(logoBase64);

                     
                    const response = await fetch(
                        "https://pokeapi.co/api/v2/pokemon/25"
                    );
                    const data = await response.json();
                    const imageUrl =
                        data.sprites.other["official-artwork"].front_default;
                    const pokemonBase64 = await toBase64(imageUrl);

                    setPokemonImageBase64(pokemonBase64);
                    setPokemon({ id: data.id, name: data.name });
                } catch (finalError) {
                    
                    setPokemon({ id: 25, name: "pikachu" });
                    setLogoImageBase64("./meriise.png"); 
                }
            } finally {
                setLoading(false);
            }
        };
        fetchAndPrepareAssets();
    }, []);

    const handleSave = () => {
        exportComponentAsPNG(cardRef, {
            fileName: `${formData?.name || "trainer"}-card.png`,
            html2CanvasOptions: {
                scale: 3, 
                useCORS: true, 
                allowTaint: true,
                backgroundColor: null, 
                logging: false,
            },
        });
    };

    if (!domain) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-bold">Domain not found!</h1>
                <button
                    onClick={() => onNavigate("domains")}
                    className="mt-4 px-6 py-2 bg-gray-200 rounded-lg"
                >
                    Back to Domains
                </button>
            </div>
        );
    }

    return (
        <main className="min-h-screen w-full bg-[#FDFBF8] flex items-center justify-center p-4 font-sans flex-col">
            <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-y-5 text-center animate-fade-in">
                <img
                    src="./meriise.png"
                    alt="MERIISE Foundation Logo"
                    className="mx-auto h-32 object-contain"
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
                        You have been added to the priority list
                    </p>

                    <div
                        ref={cardRef}
                        className="w-full aspect-[3/4] bg-[#e4ddfc] rounded-2xl p-4 relative overflow-hidden shadow-2xl"
                    >
                        {loading ||
                        !pokemon ||
                        !pokemonImageBase64 ||
                        !logoImageBase64 ? (
                            <div className="text-black flex items-center justify-center h-full">
                                Generating your card...
                            </div>
                        ) : (
                            <>
                            
                                <p className="absolute left-3 top-3 text-4xl md:text-5xl font-black text-black/60 font-poppins  tracking-[2px] z-0">
                                    #{String(pokemon.id).padStart(4, "0")}
                                </p>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center z-0">
                                    {pokemon.name
                                        .split("")
                                        .map((char, index) => (
                                            <span
                                                key={index}
                                                className="font-pokemon-hollow text-4xl md:text-5xl text-black/60 capitalize tracking-widest leading-[103%]"
                                            >
                                                {char}
                                            </span>
                                        ))}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <img
                                        src={pokemonImageBase64}
                                        alt={pokemon.name}
                                        className="max-w-full max-h-full object-contain z-10"
                                    />
                                </div>
                                <div className="absolute bottom-4 left-4 text-left z-20">
                                    <h3 className="text-3xl -mb-2 font-fredoka font-bold text-black capitalize">
                                        {formData.name || "Trainer"}
                                    </h3>
                                    <p className="text-lg font-fredoka text-black uppercase tracking-wider mt-1">
                                        {formData.usn || "N/A"}
                                    </p>
                                    <p className="text-md -mt-1 font-fredoka text-black ">
                                        {domain.name}
                                    </p>
                                </div>
                                <img
                                    src={logoImageBase64}
                                    alt="Small Logo"
                                    className="absolute top-4 right-1 -mt-5 h-12 w-auto opacity-80 z-20"
                                />
                            </>
                        )}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        *Don’t forget your copy for Hiring
                    </p>
                    <button
                        onClick={handleSave}
                        className={`px-6 py-2 bg-white ${domain.theme.border} font-fredoka font-semibold rounded-lg border-2 shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 mt-3`}
                    >
                        download
                    </button>
                    <p className="font-bold text-gray-700 mt-3">
                        Catch you at the Hiring Drive
                    </p>
                </div>
            </div>
        </main>
    );
};

export default CongratulationsPage;
