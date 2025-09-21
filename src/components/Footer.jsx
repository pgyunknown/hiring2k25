import React from 'react'

export const Footer = () => {
  return (
    // The background class has been removed to make the footer transparent.
    // Text colors are changed to darker shades to be visible on various page backgrounds.
    <footer className="w-full p-6 text-center">
      <div className="flex flex-col items-center gap-y-1">
        
        {/* Using a monospace font to connect with the "Apply" button's style */}
        <p className="text-sm text-gray-500 font-mono tracking-wider">
          Hard Coded, Vibe Designed
        </p>

        {/* The main text is larger and uses a darker color for visibility */}
        <p className="text-lg font-bold font-fredoka text-gray-800 tracking-wide">
           Developed by Team DigiTech
        </p>

        {/* The final line is also a darker shade */}
        <p className="mt-1 text-md text-gray-700">
          Meriise Foundation
        </p>
      </div>
    </footer>
  )
}

