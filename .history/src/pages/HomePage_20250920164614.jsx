import React from "react";

const HomePage = ({ onNavigate }) => (
  <main className="min-h-screen w-full bg-[#E0F2FE] flex flex-col p-4 sm:p-6 md:p-8">
    <div className="w-full text-center">
      <img
        src="./meriise.png"
        alt="MERIISE Foundation Logo"
        className="mx-auto h-32 sm:h-36 md:h-40 lg:h-48 object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/300x100/E0F2FE/0ea5e9?text=MERIISE+FOUNDATION";
        }}
      />
    </div>

    <div className="flex-grow flex items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex flex-col items-center gap-y-6 sm:gap-y-8 md:gap-y-10 text-center animate-fade-in">
        <div className="py-4 rounded-lg">
          <h3 className="font-fredoka text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 tracking-wide">
            Trainers be Ready
          </h3>
        </div>
        <div className="flex items-center justify-center lg:mb-10">
          <div className="inline-block">
            {/* Top Text: "WE ARE" */}
            <h2 className="font-pokemon-solid text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0] leading-[35px] sm:leading-[40px] md:leading-[45px] lg:leading-[50px] text-center [-webkit-text-stroke:2px_#316eb5] sm:[-webkit-text-stroke:3px_#316eb5] mb-[-15px] sm:mb-[-18px] md:mb-[-20px] lg:mb-[-22px] text-[#ffca02] [text-shadow: -2px_6px_0.9px_#000000E1] sm:[text-shadow: -3px_8px_0.9px_#000000E1] place-self-start -mb-8 sm:-mb-10 md:-mb-12 lg:-mb-14 ml-2 sm:ml-3 md:ml-4">
              WE ARE
            </h2>

            {/* Bottom line: "HIRING" + Pikachu */}
            <div className="flex items-end -mt-3 sm:-mt-4 md:-mt-4">
              <h1 className="font-pokemon-solid text-5xl sm:text-6xl md:text-7xl lg:text-[120px] xl:text-[150px] text-pokemon-yellow text-stroke-blue text-inner-shadow tracking-wider leading-[0.8] [-webkit-text-stroke:3px_#316eb5] sm:[-webkit-text-stroke:4px_#316eb5] text-[#ffca02] [text-shadow:_0_0_5px_#000000E1_inset]">
                HIRING
              </h1>
              <img
                src="./pikasit.png"
                alt="A happy Pikachu"
                className="relative -left-4 sm:-left-6 md:-left-8 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 translate-y-2 sm:translate-y-3 md:translate-y-3 object-contain"
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate("domains")}
          className="w-40 sm:w-44 md:w-48 lg:w-52 bg-yellow-400 text-gray-900 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-3 md:py-3 lg:py-4 px-4 sm:px-5 md:px-6 lg:px-8 rounded-lg sm:rounded-xl md:rounded-xl border-[2px] sm:border-[3px] md:border-[3px] border-black shadow-[4px_4px_0_0_#000] sm:shadow-[5px_5px_0_0_#000] md:shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:bg-yellow-500 font-mono"
        >
          Apply
        </button>
      </div>
    </div>
  </main>
);

export default HomePage;
