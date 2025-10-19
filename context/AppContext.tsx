
import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInfo, QuizAnswers, AnalysisResult, AppContextType } from '../types';
import { QUIZ_QUESTIONS } from '../constants';

const initialUserInfo: UserInfo = { name: '', age: '', email: '' };
const initialQuizAnswers: QuizAnswers = QUIZ_QUESTIONS.reduce((acc, _, index) => {
    acc[index] = null;
    return acc;
}, {} as QuizAnswers);

const initialState: Omit<AppContextType, 'setUserInfo' | 'setQuizAnswers' | 'setUploadedImage' | 'setAnalysisResult' | 'startAnalysis' | 'finishAnalysis' | 'resetApp'> = {
    step: 'welcome',
    userInfo: initialUserInfo,
    quizAnswers: initialQuizAnswers,
    uploadedImage: null,
    analysisResult: null,
    isAnalyzing: false,
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [userInfo, setUserInfo] = useState<UserInfo>(initialState.userInfo);
    const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>(initialState.quizAnswers);
    const [uploadedImage, setUploadedImage] = useState<File | null>(initialState.uploadedImage);
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(initialState.analysisResult);
    const [isAnalyzing, setIsAnalyzing] = useState<boolean>(initialState.isAnalyzing);
    
    const navigate = useNavigate();

    const startAnalysis = useCallback(() => {
        setIsAnalyzing(true);
    }, []);
    
    const finishAnalysis = useCallback((result: AnalysisResult) => {
        setAnalysisResult(result);
        setIsAnalyzing(false);
        navigate('/results');
    }, [navigate]);

    const resetApp = useCallback(() => {
        setUserInfo(initialUserInfo);
        setQuizAnswers(initialQuizAnswers);
        setUploadedImage(null);
        setAnalysisResult(null);
        setIsAnalyzing(false);
        navigate('/');
    }, [navigate]);

    return (
        <AppContext.Provider value={{
            step: 'welcome',
            userInfo,
            quizAnswers,
            uploadedImage,
            analysisResult,
            isAnalyzing,
            setUserInfo,
            setQuizAnswers,
            setUploadedImage,
            setAnalysisResult,
            startAnalysis,
            finishAnalysis,
            resetApp,
        }}>
            {children}
        </AppContext.Provider>
    );
};
