
import React from "react";

const HomePage = ({ onNavigate }) => {
    return (

        <main className="min-h-screen w-full bg-pink-100 flex items-center justify-center p-4">
            
            
            <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-y-10 text-center animate-fade-in">
                
                <img
                    src="./meriise.png"
                    alt="MERIISE Foundation Logo"
                    
                    className="mx-auto h-32 sm:h-40 object-contain "
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                            "https://placehold.co/300x100/E0F2FE/0ea5e9?text=MERIISE+FOUNDATION";
                    }}
                />

                <div className="py-2">
                    <h3 className="font-fredoka text-2xl sm:text-3xl font-semibold text-gray-700 tracking-wide">
                        Trainers be Ready
                    </h3>
                </div>

                <div className="flex items-center justify-center ">
                    <div className="inline-block">

                        <h2 className="font-pokemon-solid text-5xl sm:text-6xl tracking-tight leading-none text-center [-webkit-text-stroke:3px_#316eb5] text-[#ffca02] text-shadow:-3px_6px_0px_#000000E1 -pb-6">
                            WE ARE
                        </h2>

                        
                        <div className="flex items-end">
                            <h1 className="font-pokemon-solid text-[80px] sm:text-[100px] md:text-[120px] text-pokemon-yellow text-stroke-blue text-inner-shadow tracking-wider leading-[0.8] [-webkit-text-stroke:4px_#316eb5] text-[#ffca02] [text-shadow:_0_0_5px_#000000E1_inset]">
                                HIRING
                            </h1>
                            <img
                                src="./pikasit.png"
                                alt="A happy Pikachu"
                                
                                className="relative -left-4 sm:-left-6 h-24 sm:h-28 translate-y-2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => onNavigate("domains")}
                    className="mt-2 w-48 sm:w-52 bg-yellow-400 text-gray-900 font-fredoka font-semibold text-2xl py-3 px-4 rounded-xl border-[3px] border-black shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:bg-yellow-500"
                >
                    Apply Now
                </button>
            </div>
        </main>
    );
};

export default HomePage;

