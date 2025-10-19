
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
    const navigate = useNavigate();

    return (
         <div className="text-center p-8 flex flex-col items-center justify-center min-h-[50vh] bg-slate-50 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <h1 className="text-4xl font-extrabold text-slate-800 mb-4">AI-Powered Retinopathy Detector</h1>
            <p className="max-w-2xl text-lg text-slate-600 mb-8">
                Get a preliminary analysis of your retina scan for signs of Diabetic Retinopathy. This tool uses advanced AI to provide a quick assessment.
            </p>
            
            <div className="w-full max-w-lg mb-8 text-left space-y-4">
                 <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 font-bold">1</div>
                    <p className="ml-4 text-slate-700"><strong>Enter Your Information:</strong> Provide some basic details for your report.</p>
                </div>
                 <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 font-bold">2</div>
                    <p className="ml-4 text-slate-700"><strong>Answer a Brief Questionnaire:</strong> A few simple questions about your health history.</p>
                </div>
                 <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 font-bold">3</div>
                    <p className="ml-4 text-slate-700"><strong>Upload Your Retina Scan:</strong> Securely upload your image for AI analysis.</p>
                </div>
            </div>

            <button
                onClick={() => navigate('/user-info')}
                className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
                Get Started
            </button>
            <p className="mt-6 text-sm text-slate-500">
                This is an informational tool and not a substitute for professional medical advice.
            </p>
        </div>
    );
};

export default Welcome;
