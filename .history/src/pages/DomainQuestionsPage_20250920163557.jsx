import React from "react";
import Pokeball from "../components/Pokeball.jsx";

const DomainQuestionsPage = ({ domain, onNavigate }) => {
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
        <main
            className={`min-h-screen w-full ${domain.theme.darkerBg} flex items-center justify-center p-4 font-sans flex-col`}
        >
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
            <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-y-4 animate-fade-in relative">
                <div className="relative w-full flex items-center justify-center p-4 bg-white/80 rounded-2xl">
                    <img
                        src={domain.evolvedImageUrl}
                        alt={domain.name}
                        className="h-24 absolute -left-12 -bottom-8"
                    />
                    <h1
                        className="text-4xl text-center text-white font-pokemon-hollow tracking-[4px]"
                        style={{ WebkitTextStroke: "1px #000000FF" }}
                    >
                        {domain.name}
                    </h1>
                    <img
                        src={domain.imageUrl}
                        alt={domain.name}
                        className="h-20 absolute -right-8 -top-8"
                    />
                </div>
                {/* Intro / CTA button removed as we now show content directly */}
                <div
                    className={`w-full p-6 bg-stone-100/80 rounded-3xl border-4 ${domain.theme.border} relative`}
                >
                    <Pokeball className="top-12 -left-8" />
                    <Pokeball className="bottom-16 -right-10 transform scale-150" />
                    <Pokeball className="bottom-2 -left-6 transform scale-75" />
                    <div className="space-y-4">
                        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                            {domain.content}
                        </p>
                    </div>
                    <div className="text-center mt-6">
                        <button
                            onClick={() => onNavigate("domainForm", domain.id)}
                            className={`px-6 py-2 bg-white ${domain.theme.border} font-fredoka font-semibold rounded-lg border-2 border-gray-300 shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 `}
                        >
                            Claim your card
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DomainQuestionsPage;
