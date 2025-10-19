
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Welcome from './pages/Welcome';
import UserInfo from './pages/UserInfo';
import Quiz from './pages/Quiz';
import Upload from './pages/Upload';
import Results from './pages/Results';
import Header from './components/Header';
import StepIndicator from './components/StepIndicator';

const AppContent: React.FC = () => {
    const location = useLocation();
    const showHeaderAndSteps = location.pathname !== '/';

    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-800">
            {showHeaderAndSteps && <Header />}
            <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8">
                 {showHeaderAndSteps && <StepIndicator />}
                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 sm:p-10 mt-6">
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/user-info" element={<UserInfo />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/upload" element={<Upload />} />
                        <Route path="/results" element={<Results />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
}

const App: React.FC = () => {
    return (
        <HashRouter>
            <AppProvider>
                <AppContent />
            </AppProvider>
        </HashRouter>
    );
};

export default App;