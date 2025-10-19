
import React from 'react';
import { useLocation } from 'react-router-dom';

const STEPS = [
    { path: '/user-info', label: 'Patient Info' },
    { path: '/quiz', label: 'Questionnaire' },
    { path: '/upload', label: 'Upload Scan' },
    { path: '/results', label: 'Analysis Results' }
];

const StepIndicator: React.FC = () => {
    const location = useLocation();
    const activeIndex = STEPS.findIndex(step => step.path === location.pathname);

    return (
        <nav aria-label="Progress">
            <ol role="list" className="flex items-center">
                {STEPS.map((step, stepIdx) => (
                    <li key={step.label} className={`relative ${stepIdx !== STEPS.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
                        {stepIdx <= activeIndex ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-blue-600" />
                                </div>
                                <div className="relative flex h-8 w-8 items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700">
                                    <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">{step.label}</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                     <div className={`h-0.5 w-full ${stepIdx === activeIndex + 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                                </div>
                                <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                                     <span className={`h-2.5 w-2.5 rounded-full ${stepIdx === activeIndex + 1 ? 'bg-blue-600' : 'bg-transparent group-hover:bg-gray-300'}`} aria-hidden="true" />
                                    <span className="sr-only">{step.label}</span>
                                </div>
                            </>
                        )}
                         <span className={`absolute -bottom-6 text-xs font-medium ${stepIdx <= activeIndex ? 'text-blue-600' : 'text-gray-500'}`}>{step.label}</span>
                    </li>
                ))}
            </ol>
        </nav>
    );
};


export default StepIndicator;
