import React from 'react';

const Pokeball = ({ className }) => (
    <img 
        src="./pokeball.png" 
        alt="Pokeball" 
        className={`absolute w-12 h-12 ${className}`} 
        onError={(e) => { e.target.style.display = 'none'; }}
    />
);

export default Pokeball;
