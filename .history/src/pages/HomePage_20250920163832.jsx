import React from "react";

const HomePage = ({ onNavigate }) => (
  // The main container now centers the entire content block vertically and horizontally
  <main className="min-h-screen w-full bg-[#E0F2FE] flex items-center justify-center p-4 lg:p-8">
    {/* A single content container for better spacing control */}
    <div className="w-full max-w-sm lg:max-w-3xl xl:max-w-4xl mx-auto flex flex-col items-center gap-y-6 lg:gap-y-8 text-center animate-fade-in">
      <img
        src="./meriise.png"
        alt="MERIISE Foundation Logo"
        className="mx-auto h-40 lg:h-48 object-contain" // Increased logo height on large screens
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/300x100/E0F2FE/0ea5e9?text=MERIISE+FOUNDATION";
        }}
      />

      <div className="py-2 rounded-lg">
        {/* Larger text for the subtitle on large screens */}
        <h3 className="font-fredoka text-2xl lg:text-4xl font-semibold text-gray-700 tracking-wide">
          Trainers be Ready
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <div className="inline-block ">
          {/* Top Text: "WE ARE" */}
          {/* Increased font size and adjusted negative margin for large screens */}
          <h2 className=" font-pokemon-solid text-5xl md:text-7xl lg:text-8xl tracking-[0] leading-[45px] text-center [-webkit-text-stroke:3px_#316eb5] mb-[-20px] lg:mb-[-25px] text-[#ffca02] [text-shadow: -3px_8px_0.9px_#000000E1] place-self-start -mb-12 lg:-mb-16 ml-4 ">
            WE ARE
          </h2>

          {/* Bottom line: "HIRING" + Pikachu */}
          <div className="flex items-end -mt-4">
            {/* Significantly larger font size and text stroke for large screens */}
            <h1 className="font-pokemon-solid text-7xl md:text-[150px] lg:text-[220px] text-pokemon-yellow text-stroke-blue text-inner-shadow tracking-wider leading-[0.8] [-webkit-text-stroke:4px_#316eb5] lg:[-webkit-text-stroke:5px_#316eb5] text-[#ffca02] [text-shadow:_0_0_5px_#000000E1_inset]">
              HIRING
            </h1>
            <img
              src="./pikasit.png"
              alt="A happy Pikachu"
              // Increased image size and adjusted position for large screens
              className="relative -left-8 h-28 md:h-32 lg:h-52 lg:-left-12 translate-y-3 object-contain"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => onNavigate("domains")}
        // Added top margin to give the button more space
        className="w-48 lg:w-60 mt-4 bg-yellow-400 text-gray-900 font-bold text-2xl lg:text-3xl py-3 px-6 rounded-xl border-[3px] border-black shadow-[6px_6px_0_0_#000] lg:shadow-[8px_8px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:bg-yellow-500 font-mono"
      >
        Apply
      </button>
    </div>
  </main>
);

export default HomePage;
