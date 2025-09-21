import React from "react";

const Header = () => (
    <div className="w-full text-center py-4">
        <img
            src="./meriise.png"
            alt="MERIISE Foundation Logo"
            className="mx-auto h-24 md:h-32 object-contain"
            onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                    "https://placehold.co/300x100/E0F2FE/0ea5e9?text=MERIISE+FOUNDATION";
            }}
        />
    </div>
);

export default Header;
