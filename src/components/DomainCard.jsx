import React from 'react';

const DomainCard = ({ data, isExpanded, onToggle, onApply }) => {
    // Add a guard clause to prevent crashing if the data prop is not passed.
    if (!data) {
        return null; // or render a loading/error state
    }

    const { name, description, imageUrl, theme } = data;

    return (
        <div 
            onClick={onToggle}
            className="relative w-full max-w-sm mx-auto cursor-pointer pt-8" // Add padding-top for the Pokemon
        >
            {/* Main Card Body - This is now in the normal document flow */}
            <div className={`
                relative w-full bg-stone-100 
                border-2 border-gray-400 rounded-3xl
                overflow-hidden 
                transition-all duration-500 ease-in-out
            `}>
                {/* Diagonal Color Background */}
                <div 
                    className={`absolute top-0 right-0 h-full ${theme.bg} 
                    transition-all duration-500 ease-in-out
                    ${isExpanded ? 'w-full' : 'w-1/2'}
                    `}
                    // This style animates the clip-path to create the "fill" effect
                    style={{ 
                        clipPath: isExpanded 
                            ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' 
                            : 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' 
                    }}
                />

                {/* Content */}
                <div className="p-4 relative z-10">
                    {/* Title container - now centered when collapsed */}
                    <div className={`h-12 font-fredoka font-medium translate-y-2 transition-all duration-300 ${!isExpanded ? 'text-left' : 'text-left'}`}>
                        <h2 className="text-3xl  text-gray-800">
                            {name}
                        </h2>
                    </div>
                    
                    {/* Collapsible Section using CSS Grid for smooth height transition */}
                    <div className={`
                        grid transition-[grid-template-rows] duration-500 ease-in-out
                        ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                    `}>
                        <div className="overflow-hidden">
                            {/* This container ensures the text and button don't go behind the Pokemon */}
                            <div className="w-[55%]"> 
                                <p className="text-sm text-white leading-tight pt-2 font-semibold tracking-wide">
                                    {description}
                                </p>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevents the card from toggling
                                        onApply();
                                    }}
                                    className={`
                                        mt-4 mb-2 px-6 py-1 rounded-lg text-lg 
                                        text-gray-800 bg-white  border-2 border-black
                                        shadow-[3px_3px_0px_#000]
                                        hover:shadow-[1px_1px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5
                                        transition-all duration-150 font-fredoka font-semibold
                                    `}
                                >
                                    know more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Pokémon Image */}
            <img 
                src={imageUrl} 
                alt={name}
                className={`
                    absolute z-20 object-contain drop-shadow-lg
                    transition-all duration-500 ease-in-out
                    ${isExpanded ? 
                        'w-40 h-40 top-1/2 right-1 -translate-y-1/2 translate-x-5' : 
                        'w-32 h-32 top-0 right-1 translate-x-6'}
                `}
            />
        </div>
    );
};

export default DomainCard;

