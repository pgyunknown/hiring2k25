import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full p-6 text-center">
      <div className="flex flex-col items-center gap-y-1">
        

        <p className="text-sm text-gray-500 font-mono tracking-wider">
          Hard Coded, Vibe Designed
        </p>
        <p className="text-lg font-bold font-fredoka text-gray-800 tracking-wide">
          Developed by Team DigiTech
        </p>


        <a
          href="https://www.meriise.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-md text-gray-700 hover:text-blue-600 transition-colors"
        >
          ME-RIISE Foundation
        </a>
      </div>
    </footer>
  )
}
