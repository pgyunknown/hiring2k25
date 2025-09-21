import React from "react";

const HomePage = ({ onNavigate }) => (
  <main className="min-h-screen w-full bg-[#E0F2FE] flex flex-col p-4">
    <div className="w-full text-center">
      <img
        src="./meriise.png"
        alt="MERIISE Foundation Logo"
        className="mx-auto h-40 object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/300x100/E0F2FE/0ea5e9?text=MERIISE+FOUNDATION";
        }}
      />
    </div>

    <div className="flex-grow flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-y-8 text-center animate-fade-in">
        <div className="py-2 rounded-lg">
          <h3 className="font-fredoka text-2xl font-semibold text-gray-700 tracking-wide">
            Trainers be Ready
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <div className="inline-block ">
            {/* Top Text: "WE ARE" */}
            <h2 className=" font-pokemon-solid text-5xl md:text-7xl tracking-[0] leading-[45px] text-center [-webkit-text-stroke:3px_#316eb5] mb-[-20px] text-[#ffca02] [text-shadow: -3px_8px_0.9px_#000000E1] place-self-start -mb-12 ml-4 ">
              WE ARE
            </h2>

            {/* Bottom line: "HIRING" + Pikachu */}
            <div className="flex items-end -mt-4">
              <h1 className="font-pokemon-solid text-7xl md:text-[150px] text-pokemon-yellow text-stroke-blue text-inner-shadow tracking-wider leading-[0.8] [-webkit-text-stroke:4px_#316eb5] text-[#ffca02] [text-shadow:_0_0_5px_#000000E1_inset]">
                HIRING
              </h1>
              <img
                src="./pikasit.png"
                alt="A happy Pikachu"
                className="relative -left-8 h-28  md:h-32 translate-y-3 object-contain"
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate("domains")}
          className="w-48 bg-yellow-400 text-gray-900 font-bold text-2xl py-3 px-6 rounded-xl border-[3px] border-black shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:bg-yellow-500 font-mono"
        >
          Apply
        </button>
      </div>
    </div>
  </main>
);

export default HomePage;
