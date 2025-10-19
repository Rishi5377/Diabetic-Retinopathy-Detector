
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { QUIZ_QUESTIONS } from '../constants';

const Quiz: React.FC = () => {
    const { quizAnswers, setQuizAnswers } = useAppContext();
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswer = (answer: 'Yes' | 'No') => {
        const newAnswers = { ...quizAnswers, [currentQuestion]: answer };
        setQuizAnswers(newAnswers);

        if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            navigate('/upload');
        }
    };
    
    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        } else {
            navigate('/user-info');
        }
    }

    const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Risk Assessment Questionnaire</h2>
            <p className="text-center text-slate-500 mb-8">Your answers help provide context for the analysis.</p>

            <div className="mb-6">
                <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700">Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="bg-slate-100 p-8 rounded-lg min-h-[150px] flex items-center justify-center">
                <p className="text-xl text-center font-medium text-slate-700">{QUIZ_QUESTIONS[currentQuestion]}</p>
            </div>

            <div className="mt-8 flex justify-center space-x-6">
                <button
                    onClick={() => handleAnswer('Yes')}
                    className="px-10 py-4 text-lg font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform transform hover:scale-105"
                >
                    Yes
                </button>
                <button
                    onClick={() => handleAnswer('No')}
                    className="px-10 py-4 text-lg font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-transform transform hover:scale-105"
                >
                    No
                </button>
            </div>
            
             <div className="mt-10 flex justify-between">
                <button
                    onClick={handleBack}
                    className="px-6 py-3 bg-slate-200 text-slate-700 font-semibold rounded-md hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 transition duration-150"
                >
                    &larr; Back
                </button>
                {currentQuestion === QUIZ_QUESTIONS.length - 1 && (
                     <button
                        onClick={() => navigate('/upload')}
                        disabled={quizAnswers[currentQuestion] === null}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 disabled:bg-slate-400 disabled:cursor-not-allowed"
                    >
                        Next: Upload Scan &rarr;
                    </button>
                )}
            </div>
        </div>
    );
};

export default Quiz;
