// import React, { useState } from "react";
// import Pokeball from "../components/Pokeball.jsx";

// const DomainFormPage = ({ domain, onNavigate }) => {
//     const [formData, setFormData] = useState({
//         name: "",
//         usn: "",
//         branch: "",
//         talents: "",
//         projects: "",
//     });

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prev) => ({ ...prev, [id]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onNavigate("congratulations", domain.id, formData);
//     };

//     if (!domain) {
//         return (
//             <div className="text-center">
//                 <h1 className="text-2xl font-bold">Domain not found!</h1>
//                 <button
//                     onClick={() => onNavigate("domains")}
//                     className="mt-4 px-6 py-2 bg-gray-200 rounded-lg"
//                 >
//                     Back to Domains
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <main
//             className={`min-h-screen w-full ${domain.theme.darkerBg} flex items-center justify-center p-4 font-sans`}
//         >
//             <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-y-4 animate-fade-in relative">
//                 <img
//                     src="./meriise.png"
//                     alt="MERIISE Foundation Logo"
//                     className="mx-auto h-20 object-contain"
//                     onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src =
//                             "https://placehold.co/300x100/E0F2FE/0ea5e9?text=MERIISE+FOUNDATION";
//                     }}
//                 />
//                 <div className="relative w-full flex items-center justify-center p-4 bg-white/50 rounded-2xl">
//                     <img
//                         src={domain.evolvedImageUrl}
//                         alt={domain.name}
//                         className="h-24 absolute -left-12 -bottom-8"
//                     />
//                     <h1
//                         className="text-4xl font-bold text-white"
//                         style={{ WebkitTextStroke: "2px #5f5f5f" }}
//                     >
//                         {domain.name}
//                     </h1>
//                     <img
//                         src={domain.imageUrl}
//                         alt={domain.name}
//                         className="h-20 absolute -right-8 -top-8"
//                     />
//                 </div>
//                 <button className="px-8 py-2 bg-gray-800 text-white font-semibold rounded-full text-lg shadow-lg">
//                     Fill this form
//                 </button>
//                 <div
//                     className={`w-full p-6 bg-stone-100/80 rounded-3xl border-4 ${domain.theme.border} relative`}
//                 >
//                     <Pokeball className="top-12 -left-8" />
//                     <Pokeball className="bottom-16 -right-10 transform scale-150" />
//                     <Pokeball className="bottom-2 -left-6 transform scale-75" />
//                     <form
//                         onSubmit={handleSubmit}
//                         className="space-y-3 text-gray-800 font-semibold"
//                     >
//                         {Object.keys(formData).map((key) => (
//                             <div key={key}>
//                                 <label htmlFor={key} className="capitalize">
//                                     {key === "usn"
//                                         ? "USN"
//                                         : key.replace(/([A-Z])/g, " $1")}
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id={key}
//                                     value={formData[key]}
//                                     onChange={handleChange}
//                                     required={key === "name" || key === "usn"}
//                                     className="w-full p-1.5 rounded-md border-2 border-gray-400 focus:border-gray-600 outline-none"
//                                 />
//                             </div>
//                         ))}
//                         <div className="text-center pt-3">
//                             <button
//                                 type="submit"
//                                 className="px-6 py-2 bg-white text-gray-800 font-bold rounded-lg shadow-md border-2 border-gray-300"
//                             >
//                                 Generate your card
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default DomainFormPage;

import React, { useState } from "react";
import Pokeball from "../components/Pokeball.jsx";

// ✅ Firebase imports
// import { getDatabase, ref, set } from "../../firebase/database";
// import { app } from "../../Firebase.jsx";

import { getDatabase, ref, set } from "../../Firebase.jsx";
import { app } from "../../Firebase.jsx";

// ✅ Initialize Realtime Database
const db = getDatabase(app);

const DomainFormPage = ({ domain, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    branch: "",
    talents: "",
    projects: "",
  });

  // ✅ Handle form input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // ✅ Helper function to save student data
  const saveStudentData = async (data) => {
    try {
      await set(ref(db, "students/" + data.usn), data);
      console.log("✅ Data saved successfully!");
    } catch (error) {
      console.error("❌ Error saving data:", error);
    }
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveStudentData(formData); // Save to Firebase
    onNavigate("congratulations", domain.id, formData); // Navigate after save
  };

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
        <div className="relative w-full flex items-center justify-center p-4 bg-white/50 rounded-2xl">
          <img
            src={domain.evolvedImageUrl}
            alt={domain.name}
            className="h-24 absolute -left-12 -bottom-8"
          />
          <h1
            className="text-4xl font-bold text-white"
            style={{ WebkitTextStroke: "2px #5f5f5f" }}
          >
            {domain.name}
          </h1>
          <img
            src={domain.imageUrl}
            alt={domain.name}
            className="h-20 absolute -right-8 -top-8"
          />
        </div>
        <button className="px-8 py-2 bg-gray-800 text-white font-semibold rounded-full text-lg shadow-lg">
          Fill this form
        </button>
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
                  {key === "usn" ? "USN" : key.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  id={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required={key === "name" || key === "usn"}
                  className="w-full p-1.5 rounded-md border-2 border-gray-400 focus:border-gray-600 outline-none"
                />
              </div>
            ))}
            <div className="text-center pt-3">
              <button
                type="submit"
                className="px-6 py-2 bg-white text-gray-800 font-bold rounded-lg shadow-md border-2 border-gray-300"
              >
                Generate your card
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DomainFormPage;
