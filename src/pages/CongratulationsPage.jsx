import React, { useState } from "react";

// Placeholder components to resolve import errors as they are in separate files.
const Pokeball = ({ className = "" }) => (
    <div className={`absolute w-12 h-12 rounded-full bg-white border-4 border-black overflow-hidden flex flex-col items-center justify-center ${className}`}>
        <div className="w-full h-1/2 bg-red-500"></div>
        <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-black"></div>
    </div>
);

const BackButton = ({ onClick }) => (
    <button onClick={onClick} className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </button>
);

// Mock Firebase setup since the actual file is not provided
const app = {}; // This should be your initialized Firebase app
const getDatabase = () => ({});
const ref = () => ({});
const set = async () => console.log("Data sent to mock DB");
const db = getDatabase(app);
// End Mock Firebase setup


const DomainFormPage = ({ domain, onNavigate }) => {
    const [formData, setFormData] = useState({
        name: "",
        usn: "",
        branch: "",
        talents: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const saveStudentData = async (data) => {
        try {
            await set(ref(db, "students/" + data.usn), data);
            console.log("✅ Data saved successfully!");
        } catch (error) {
            console.error("❌ Error saving data:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveStudentData(formData);
        onNavigate("congratulations", domain.id, formData);
    };

    const goBack = () => onNavigate("domainQuestions");

    if (!domain) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-bold">Domain not found!</h1>
                <button
                    onClick={() => onNavigate("domains")}
                    className="mt-4 px-6 py-2 bg-gray-200 rounded-lg"
                >
                    Back to Domains
                </button>
            </div>
        );
    }

    return (
        <main
            className={`min-h-screen w-full ${domain.theme.darkerBg} flex items-center justify-center p-4 font-sans`}
        >
            <BackButton onClick={goBack} />
            <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-y-4 animate-fade-in relative">
                <img
                    src="./meriise.png"
                    alt="MERIISE Foundation Logo"
                    className="mx-auto h-20 object-contain"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                            "https://placehold.co/300x100/E0F2FE/0ea5e9?text=MERIISE+FOUNDATION";
                    }}
                />
                <div className="relative w-full flex items-center justify-center p-4 bg-white/50 rounded-2xl mb-5">
                    <img
                        src={domain.evolvedImageUrl}
                        alt={domain.name}
                        className="h-24 font-pokemon-hollow absolute -left-12 -bottom-8"
                    />
                    <h1
                        className="text-4xl text-center text-white font-pokemon-hollow tracking-[4px]"
                        style={{ WebkitTextStroke: "1px #000000FF" }}
                    >
                        {domain.name}
                    </h1>
                    <img
                        src={domain.imageUrl}
                        alt={domain.name}
                        className="h-20 absolute -right-8 -top-8"
                    />
                </div>
                <div
                    className={`w-full p-6 bg-stone-100/80 rounded-3xl border-4 ${domain.theme.border} relative`}
                >
                    <Pokeball className="top-12 -left-8" />
                    <Pokeball className="bottom-16 -right-10 transform scale-150" />
                    <Pokeball className="bottom-2 -left-6 transform scale-75" />
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-3 text-gray-800 font-semibold"
                    >
                        {Object.keys(formData).map((key) => (
                            <div key={key}>
                                <label htmlFor={key} className="capitalize">
                                    {key === "usn"
                                        ? "USN"
                                        : key.replace(/([A-Z])/g, " $1")}
                                </label>
                                <input
                                    type="text"
                                    id={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                        // This logic makes every field required EXCEPT for 'talents'
                                    required={key !== 'talents'}
                                    className="w-full p-1.5 rounded-md border-2 border-gray-400 focus:border-gray-600 outline-none"
                                />
                            </div>
                        ))}
                        <div className="text-center pt-3">
                            <button
                                type="submit"
                                className={`px-6 py-2 bg-white ${domain.theme.border} font-fredoka font-semibold rounded-lg border-2 border-gray-300 shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 `}
                            >
                                get your pass
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default DomainFormPage;

