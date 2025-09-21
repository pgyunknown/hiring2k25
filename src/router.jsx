import React, { useState, useEffect } from 'react';
import { domainsData } from '/src/data/domains.js';

// Page Components
import HomePage from '/src/pages/HomePage.jsx';
import DomainsPage from '/src/pages/DomainsPage.jsx';
import DomainQuestionsPage from '/src/pages/DomainQuestionsPage.jsx';
import DomainFormPage from '/src/pages/DomainFormPage.jsx';
import CongratulationsPage from '/src/pages/CongratulationsPage.jsx';

const App = () => {
    // We now store the entire page state in a single object
    const [currentState, setCurrentState] = useState({
        page: 'home',
        domainId: null,
        formData: null,
    });

    // This effect sets up the listener for the browser's back button.
    useEffect(() => {
        const handlePopState = (event) => {
            // When the user clicks back, the browser provides the previous state.
            // We update our component to match it.
            if (event.state) {
                setCurrentState(event.state);
            }
        };

        // Add the event listener when the component mounts
        window.addEventListener('popstate', handlePopState);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []); // The empty array ensures this effect runs only once.

    const handleNavigation = (newPage, domainId = null, data = null) => {
        const newState = {
            page: newPage,
            // Carry over the domainId if it's not explicitly changed
            domainId: domainId || currentState.domainId, 
            formData: data,
        };
        
        // Push the new state into the browser's history stack
        window.history.pushState(newState, '');
        // Update the component's state to render the new page
        setCurrentState(newState);
    };

    const renderPage = () => {
        const { page, domainId, formData } = currentState;
        const domain = domainsData.find(d => d.id === domainId);

        const PageWrapper = ({ children, className }) => (
            <main className={`min-h-screen w-full flex items-center justify-center p-4 font-sans ${className}`}>
                {children}
            </main>
        );

        switch (page) {
            case 'domains':
                return <PageWrapper className="bg-[#FDFBF8]"><DomainsPage onNavigate={handleNavigation} /></PageWrapper>;
            
            case 'domainQuestions':
                return domain ? <PageWrapper className={`${domain.theme.darkerBg} overflow-x-hidden`}><DomainQuestionsPage domain={domain} onNavigate={handleNavigation} /></PageWrapper> : <p>Error</p>;
            
            case 'domainForm':
                return domain ? <PageWrapper className={`${domain.theme.darkerBg} overflow-x-hidden`}><DomainFormPage domain={domain} onNavigate={handleNavigation} /></PageWrapper> : <p>Error</p>;
            
            case 'congratulations':
                 return domain && formData ? <PageWrapper className="bg-gray-200 overflow-x-hidden"><CongratulationsPage domain={domain} formData={formData} /></PageWrapper> : <p>Error</p>;
            
            case 'home':
            default:
                return <PageWrapper className="bg-[#E0F2FE]"><HomePage onNavigate={handleNavigation} /></PageWrapper>;
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

