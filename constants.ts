
import { RiskLevel } from './types';

export const QUIZ_QUESTIONS = [
  "Have you been diagnosed with Type 1 or Type 2 diabetes?",
  "Has it been more than a year since your last comprehensive eye exam?",
  "Do you experience blurry vision, floaters, or dark spots in your vision?",
  "Have you had difficulty controlling your blood sugar levels recently?",
  "Do you have high blood pressure or kidney disease in addition to diabetes?",
  "Does your vision fluctuate, sometimes clear and other times blurry?"
];

export const CLASS_LABELS = ["No DR", "Mild", "Moderate", "Severe", "Proliferative DR"];

export const RISK_LEVEL_DETAILS: { [key in RiskLevel]: { color: string; icon: string; title: string } } = {
    Low: { color: 'text-green-600', icon: '✅', title: 'Low Risk' },
    Medium: { color: 'text-blue-600', icon: 'ℹ️', title: 'Mild Risk' },
    High: { color: 'text-orange-600', icon: '⚠️', title: 'Moderate Risk' },
    Critical: { color: 'text-red-600', icon: '🚨', title: 'High Risk' },
    Unknown: { color: 'text-gray-600', icon: '❓', title: 'Unknown' },
};
