import React from "react";
import { domainsData } from "../data/domains.js";

const BackButton = ({ onClick, domainId }) => {
    const domain = domainsData.find((d) => d.id === domainId);

    return (
        <button
            onClick={onClick}
            className="absolute top-4 left-4 z-50 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-black
                                        shadow-[3px_3px_0px_#000]
                                        hover:shadow-[1px_1px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5
                                        transition-all duration-150 flex items-center justify-center"
            aria-label="Go back to the previous page"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
    );
};

export default BackButton;
