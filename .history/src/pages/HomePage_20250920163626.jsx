import React from "react";

const HomePage = ({ onNavigate }) => (
  <main className="min-h-screen w-full bg-[#E0F2FE] flex flex-col p-4 lg:p-8">
    {/* Logo */}
    <div className="w-full text-center mb-6 lg:mb-10">
      <img
        src="./meriise.png"
        alt="MERIISE Foundation Logo"
        className="mx-auto h-40 lg:h-52 object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/300x100/E0F2FE/0ea5e9?text=MERIISE+FOUNDATION";
        }}
      />
    </div>

    {/* Center Content */}
    <div className="flex-grow flex items-center justify-center">
      <div className="w-full max-w-sm lg:max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-16 text-center lg:text-left animate-fade-in">
        {/* Left Section - Heading */}
        <div className="py-2 rounded-lg">
          <h3 className="font-fredoka text-2xl lg:text-4xl font-semibold text-gray-700 tracking-wide">
            Trainers be Ready
          </h3>
        </div>

        {/* Middle Section - Title */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="inline-block">
            {/* Top Text */}
            <h2 className="font-pokemon-solid text-5xl md:text-7xl lg:text-8xl tracking-[0] leading-[45px] lg:leading-[60px] text-center lg:text-left [-webkit-text-stroke:3px_#316eb5] mb-[-20px] text-[#ffca02] [text-shadow: -3px_8px_0.9px_#000000E1] -mb-12 ml-4 lg:ml-0">
              WE ARE
            </h2>

            {/* Bottom Line */}
            <div className="flex items-end -mt-4 lg:-mt-8">
              <h1 className="font-pokemon-solid text-7xl md:text-[150px] lg:text-[200px] text-pokemon-yellow text-stroke-blue text-inner-shadow tracking-wider leading-[0.8] [-webkit-text-stroke:4px_#316eb5] text-[#ffca02] [text-shadow:_0_0_5px_#000000E1_inset]">
                HIRING
              </h1>
              <img
                src="./pikasit.png"
                alt="A happy Pikachu"
                className="relative -left-8 h-28 md:h-32 lg:h-44 translate-y-3 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Button */}
        <div className="mt-6 lg:mt-20">
          <button
            onClick={() => onNavigate("domains")}
            className="w-48 lg:w-60 bg-yellow-400 text-gray-900 font-bold text-2xl lg:text-3xl py-3 lg:py-4 px-6 rounded-xl border-[3px] border-black shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:bg-yellow-500 font-mono"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </main>
);

export default HomePage;
