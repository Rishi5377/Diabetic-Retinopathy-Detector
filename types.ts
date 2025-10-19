
export interface UserInfo {
  name: string;
  age: number | '';
  email: string;
}

export type QuizAnswers = { [key: number]: 'Yes' | 'No' | null };

export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Critical' | 'Unknown';

export interface AnalysisResult {
  diagnosis: string;
  confidence: number;
  riskLevel: RiskLevel;
  recommendations: string;
  rawPrediction?: any;
}

export type AppStep = 'welcome' | 'userInfo' | 'quiz' | 'upload' | 'results';

export interface AppContextType {
  step: AppStep;
  userInfo: UserInfo;
  quizAnswers: QuizAnswers;
  uploadedImage: File | null;
  analysisResult: AnalysisResult | null;
  isAnalyzing: boolean;
  setUserInfo: (info: UserInfo) => void;
  setQuizAnswers: (answers: QuizAnswers) => void;
  setUploadedImage: (file: File | null) => void;
  setAnalysisResult: (result: AnalysisResult | null) => void;
  startAnalysis: () => void;
  finishAnalysis: (result: AnalysisResult) => void;
  resetApp: () => void;
}
