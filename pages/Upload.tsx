
import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { analyzeRetinaImage } from '../services/geminiService';

const Upload: React.FC = () => {
    const { uploadedImage, setUploadedImage, startAnalysis, finishAnalysis, isAnalyzing } = useAppContext();
    const navigate = useNavigate();
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isDebugOpen, setIsDebugOpen] = useState(false);
    const [debugMode, setDebugMode] = useState(false);
    const [preprocessMethod, setPreprocessMethod] = useState('rescale_1_255');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
                setUploadedImage(file);
                setPreviewUrl(URL.createObjectURL(file));
                setError(null);
            } else {
                setError("Please upload a valid image file (PNG, JPG, JPEG).");
                setUploadedImage(null);
                setPreviewUrl(null);
            }
        }
    };
    
    const handleAnalyze = async () => {
        if (!uploadedImage) {
            setError("Please upload an image first.");
            return;
        }
        startAnalysis();
        const result = await analyzeRetinaImage(uploadedImage, preprocessMethod);
        finishAnalysis(result);
    };

    const removeImage = () => {
        setUploadedImage(null);
        setPreviewUrl(null);
    };

    const fileInputId = useMemo(() => `retina_uploader_${Date.now()}`, [uploadedImage]);

    const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => e.preventDefault();
    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) {
             if (['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
                setUploadedImage(file);
                setPreviewUrl(URL.createObjectURL(file));
                setError(null);
            } else {
                setError("Please upload a valid image file (PNG, JPG, JPEG).");
            }
        }
    };


    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Upload Retina Scan</h2>
            <p className="text-center text-slate-500 mb-8">Please upload a clear image of your retina scan.</p>
            
            {isAnalyzing ? (
                 <div className="flex flex-col items-center justify-center min-h-[300px] bg-slate-50 rounded-lg">
                    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    <p className="mt-4 text-lg font-semibold text-slate-700">Analyzing Image...</p>
                    <p className="text-sm text-slate-500">This may take a moment.</p>
                </div>
            ) : (
                <>
                    {!previewUrl ? (
                         <label
                            htmlFor={fileInputId}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            className="flex justify-center items-center w-full h-64 px-6 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                        >
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-7 0a4 4 0 011.02-2.731l-1.02-1.02a4 4 0 115.656-5.656l1.02 1.02a4 4 0 012.731 1.02z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8A4 4 0 118 8a4 4 0 018 0z" />
                                </svg>
                                <span className="font-medium text-gray-600">
                                    Drop file to Attach, or <span className="text-blue-600 underline">browse</span>
                                </span>
                            </span>
                            <input type="file" id={fileInputId} accept="image/png, image/jpeg, image/jpg" onChange={handleFileChange} className="hidden" />
                        </label>
                    ) : (
                        <div className="p-4 border border-slate-200 rounded-lg text-center">
                             <p className="font-bold text-green-600 mb-2">Image Uploaded Successfully</p>
                            <img src={previewUrl} alt="Retina scan preview" className="max-h-64 mx-auto rounded-md shadow-md" />
                            <div className="mt-4 text-sm text-slate-600">
                                <p><strong>File Name:</strong> {uploadedImage?.name}</p>
                                <p><strong>File Size:</strong> {(uploadedImage?.size / 1024).toFixed(2)} KB</p>
                            </div>
                        </div>
                    )}
                    
                    {error && <p className="mt-2 text-sm text-center text-red-600">{error}</p>}
                    
                    <div className="mt-6">
                        <details className="bg-slate-50 p-3 rounded-lg">
                            <summary className="font-medium text-slate-600 cursor-pointer">Advanced (Debug Options)</summary>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <label htmlFor="preprocess" className="block text-sm font-medium text-slate-700">Preprocessing Method</label>
                                    <select 
                                        id="preprocess" 
                                        value={preprocessMethod} 
                                        onChange={(e) => setPreprocessMethod(e.target.value)}
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                    >
                                        <option value="rescale_1_255">Rescale 1/255 (Default)</option>
                                        <option value="resnet50">ResNet50 Preprocessing</option>
                                    </select>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className="mt-10 flex justify-between items-center">
                        <button
                            onClick={() => navigate('/quiz')}
                            className="px-6 py-3 bg-slate-200 text-slate-700 font-semibold rounded-md hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 transition duration-150"
                        >
                            &larr; Back
                        </button>
                        <div>
                             {uploadedImage && <button onClick={removeImage} className="px-6 py-3 mr-4 bg-orange-100 text-orange-700 font-semibold rounded-md hover:bg-orange-200">Change Image</button>}
                            <button
                                onClick={handleAnalyze}
                                disabled={!uploadedImage}
                                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 disabled:bg-slate-400 disabled:cursor-not-allowed"
                            >
                                Analyze Now
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Upload;
