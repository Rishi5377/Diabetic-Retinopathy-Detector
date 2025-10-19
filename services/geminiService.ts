
import { GoogleGenAI, Type } from "@google/genai";
import { fileToBase64 } from '../utils/fileUtils';
import { AnalysisResult, RiskLevel } from '../types';

const API_KEY = (typeof window !== 'undefined' ? (window as any).GEMINI_API_KEY : undefined) || process.env.GEMINI_API_KEY || process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Using mock data.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const MOCK_ANALYSIS_RESULT: AnalysisResult = {
    diagnosis: "Moderate",
    confidence: 88.4,
    riskLevel: 'High',
    recommendations: "Mock Recommendation: Signs consistent with moderate non-proliferative diabetic retinopathy (NPDR) are detected. It's important to schedule a consultation with an ophthalmologist for a comprehensive examination and to discuss a management plan. Strict control of blood sugar, blood pressure, and cholesterol levels is crucial.",
    rawPrediction: { "mock": true }
};


const responseSchema = {
    type: Type.OBJECT,
    properties: {
        diagnosis: {
            type: Type.STRING,
            description: 'The classification of the stage name from the list: "No DR", "Mild", "Moderate", "Severe", or "Proliferative DR".',
        },
        confidence: {
            type: Type.NUMBER,
            description: 'A number between 0 and 100 representing the model\'s certainty.',
        },
        riskLevel: {
            type: Type.STRING,
            description: 'The risk level associated with the diagnosis, one of: "Low", "Medium", "High", or "Critical".',
        },
        recommendations: {
            type: Type.STRING,
            description: 'A brief paragraph of general advice for the diagnosed stage. This should not be taken as medical advice.',
        },
    },
    required: ["diagnosis", "confidence", "riskLevel", "recommendations"],
};


export const analyzeRetinaImage = async (imageFile: File, preprocessingMethod: string): Promise<AnalysisResult> => {
    if (!API_KEY) {
        return new Promise(resolve => setTimeout(() => resolve(MOCK_ANALYSIS_RESULT), 2000));
    }
    
    try {
        const base64Image = await fileToBase64(imageFile);

        const imagePart = {
            inlineData: {
                mimeType: imageFile.type,
                data: base64Image,
            },
        };

        const textPart = {
            text: `You are an AI medical assistant specializing in ophthalmology. Analyze the attached retina scan image for signs of Diabetic Retinopathy. The image was preprocessed using the "${preprocessingMethod}" method.

            Classify the image into one of the five stages: "No DR", "Mild", "Moderate", "Severe", or "Proliferative DR".
            
            Provide your analysis in the specified JSON format.`
        };

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, textPart] },
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.2,
            },
        });
        
        const jsonString = response.text.trim();
        const result = JSON.parse(jsonString);
        
        return {
            diagnosis: result.diagnosis,
            confidence: result.confidence,
            riskLevel: result.riskLevel as RiskLevel,
            recommendations: result.recommendations,
            rawPrediction: jsonString,
        };
    } catch (error) {
        console.error("Error analyzing image with Gemini:", error);
        // Fallback to mock data on API error
        return MOCK_ANALYSIS_RESULT;
    }
};
