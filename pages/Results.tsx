
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { generatePdf } from '../utils/pdfGenerator';
import { RISK_LEVEL_DETAILS } from '../constants';

const Results: React.FC = () => {
    const { analysisResult, userInfo, resetApp } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!analysisResult) {
            navigate('/upload');
        }
    }, [analysisResult, navigate]);

    if (!analysisResult) {
        return <div className="text-center">Loading results...</div>;
    }

    const { diagnosis, confidence, riskLevel, recommendations, rawPrediction } = analysisResult;
    const riskDetails = RISK_LEVEL_DETAILS[riskLevel] || RISK_LEVEL_DETAILS.Unknown;

    const handleDownloadReport = () => {
        generatePdf(userInfo, analysisResult);
    };

    return (
        <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">Analysis Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
                <div className="bg-slate-100 p-6 rounded-lg">
                    <p className="text-sm font-medium text-slate-500">Diagnosis</p>
                    <p className="text-2xl font-bold text-slate-800">{diagnosis}</p>
                </div>
                <div className="bg-slate-100 p-6 rounded-lg">
                    <p className="text-sm font-medium text-slate-500">Confidence</p>
                    <p className="text-2xl font-bold text-blue-600">{confidence.toFixed(2)}%</p>
                </div>
                <div className={`p-6 rounded-lg bg-opacity-20 ${riskDetails.color.replace('text-', 'bg-')}`}>
                    <p className={`text-sm font-medium ${riskDetails.color}`}>{riskDetails.title}</p>
                    <p className={`text-2xl font-bold ${riskDetails.color}`}>{riskDetails.icon} {riskLevel}</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Recommendations</h3>
                <p className="text-slate-600 leading-relaxed">{recommendations}</p>
            </div>
            
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 rounded-r-lg mb-8">
                <p className="font-bold">Important Disclaimer</p>
                <p>This AI-generated analysis is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
            </div>

             {rawPrediction && (
                 <details className="bg-slate-50 p-3 rounded-lg mb-8">
                    <summary className="font-medium text-slate-600 cursor-pointer">Raw Debug Information</summary>
                    <pre className="mt-4 p-4 bg-slate-800 text-white rounded-md text-xs overflow-x-auto">
                        {JSON.stringify(rawPrediction, null, 2)}
                    </pre>
                 </details>
             )}


            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                 <button
                    onClick={handleDownloadReport}
                    className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-bold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Download Report (PDF)
                </button>
                <button
                    onClick={resetApp}
                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
                >
                    Start New Assessment
                </button>
            </div>
        </div>
    );
};

export default Results;
