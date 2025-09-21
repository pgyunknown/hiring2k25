import React, { useState } from "react";
import { domainsData } from "../data/domains.js";
import DomainCard from "../components/DomainCard.jsx";

const DomainsPage = ({ onNavigate }) => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  return (
    <main className="min-h-screen w-full bg-[#FDFBF8] flex items-center justify-center p-4 font-sans flex-col">
      <img
        src="./meriise.png"
        alt="MERIISE Foundation Logo"
        className="mx-auto h-32  object-contain mt-[-50px] mr-[30px]"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/300x100/E0F2FE/0ea5e9?text=MERIISE+FOUNDATION";
        }}
      />
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-y-6 animate-fade-in">
        <h2 className=" font-pokemon-solid text-5xl md:text-7xl tracking-[5px] text-center [-webkit-text-stroke:3px_#316eb5] mb-[-50px] text-[#ffca02] [text-shadow: -3px_8px_0.9px_#000000E1] place-self-center p-4">
          Domains
        </h2>
        <div className="w-full flex flex-col gap-y-5">
          {domainsData.map((domain) => (
            <DomainCard
              key={domain.id}
              data={domain}
              isExpanded={expandedCardId === domain.id}
              onToggle={() =>
                setExpandedCardId((prevId) =>
                  prevId === domain.id ? null : domain.id
                )
              }
              onApply={() => onNavigate("domainQuestions", domain.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default DomainsPage;
