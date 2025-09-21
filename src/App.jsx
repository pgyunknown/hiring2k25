import React, { useState } from "react";
import { domainsData } from "./data/domains.js";

import HomePage from "./pages/HomePage.jsx";
import DomainsPage from "./pages/DomainsPage.jsx";
import DomainQuestionsPage from "./pages/DomainQuestionsPage.jsx";
import DomainFormPage from "./pages/DomainFormPage.jsx";
import CongratulationsPage from "./pages/CongratulationsPage.jsx";
import BackButton from "./components/BackButton.jsx";

const App = () => {
    const [page, setPage] = useState("home");
    const [selectedDomainId, setSelectedDomainId] = useState(null);
    const [formData, setFormData] = useState(null);

    const handleNavigation = (newPage, domainId = null, data = null) => {
        setPage(newPage);
        if (domainId) setSelectedDomainId(domainId);
        if (data) setFormData(data);
    };

    const goBack = () => {
        // Define the back navigation logic
        if (page === "domains") {
            setPage("home");
        } else if (page === "domainQuestions") {
            setPage("domains");
        } else if (page === "domainForm") {
            setPage("domainQuestions");
        } else if (page === "congratulations") {
            setPage("domainForm");
        }
    };

    const renderPage = () => {
        const domain = domainsData.find((d) => d.id === selectedDomainId);

        
        const PageWrapper = ({ children, className }) => (
            <main
                className={`min-h-screen w-full flex items-center justify-center  font-sans ${className}`}
            >
                {children}
            </main>
        );

        switch (page) {
            case "domains":
                return (
                    <PageWrapper className="bg-[#FDFBF8]">
                        <DomainsPage onNavigate={handleNavigation} />
                    </PageWrapper>
                );

            case "domainQuestions":
                return domain ? (
                    <PageWrapper
                        className={`${domain.theme.darkerBg} overflow-x-hidden`}
                    >
                        <DomainQuestionsPage
                            domain={domain}
                            onNavigate={handleNavigation}
                        />
                    </PageWrapper>
                ) : (
                    <p>Error</p>
                );

            case "domainForm":
                return domain ? (
                    <PageWrapper
                        className={`${domain.theme.darkerBg} overflow-x-hidden`}
                    >
                        <DomainFormPage
                            domain={domain}
                            onNavigate={handleNavigation}
                        />
                    </PageWrapper>
                ) : (
                    <p>Error</p>
                );

            case "congratulations":
                return domain && formData ? (
                    <PageWrapper className="bg-gray-200 overflow-x-hidden">
                        <CongratulationsPage
                            domain={domain}
                            formData={formData}
                        />
                    </PageWrapper>
                ) : (
                    <p>Error</p>
                );

            case "home":
            default:
                return (
                    <PageWrapper className="bg-[#E0F2FE]">
                        <HomePage onNavigate={handleNavigation} />
                    </PageWrapper>
                );
        }
    };

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Nunito:wght@400;600;700;800&display=swap');
                    body { font-family: 'Nunito', sans-serif; }
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
                    .form-radio { appearance: none; background-color: #fff; margin: 0; font: inherit; color: currentColor; width: 1.15em; height: 1.15em; border: 0.15em solid currentColor; border-radius: 50%; transform: translateY(-0.075em); display: grid; place-content: center; }
                    .form-radio::before { content: ""; width: 0.65em; height: 0.65em; border-radius: 50%; transform: scale(0); transition: 120ms transform ease-in-out; box-shadow: inset 1em 1em currentColor; }
                    .form-radio:checked::before { transform: scale(1); }
                `}
            </style>
            {renderPage()}
        </>
    );
};

export default App;
