
# Diabetic Retinopathy Detector

![Banner](https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge)
![License](https://img.shields.io/github/license/Rishi5377/Diabetic-Retinopathy-Detector?style=for-the-badge)

## 🚀 Overview

Diabetic Retinopathy Detector is a cutting-edge web application that leverages Google Gemini AI to analyze retina scan images for signs of Diabetic Retinopathy. Designed for speed, accuracy, and user experience, this tool empowers users to get instant, AI-powered feedback on their eye health.

---

## 🌟 Features

- **AI-Powered Retina Analysis**: Upload retina scans and receive instant, intelligent feedback powered by Gemini AI.
- **Interactive Multi-Step Workflow**: Seamless navigation from welcome, user info, quiz, image upload, to results.
- **Personalized PDF Reports**: Download a professional report summarizing your analysis and recommendations.
- **Risk Level Classification**: Get clear, color-coded risk levels (Low, Medium, High, Critical).
- **Responsive & Modern UI**: Built with React, TypeScript, Vite, and Tailwind CSS for a fast, beautiful experience.
- **Secure API Key Handling**: API keys are managed via environment variables and GitHub Actions secrets.
- **Demo Mode Fallback**: If no API key is provided, the app uses mock data for safe demonstration.

---

## �️ Workflow

1. **Welcome**: Users are greeted and introduced to the tool's capabilities.
2. **User Info**: Collects basic information for personalized analysis.
3. **Quiz**: A brief questionnaire to assess risk factors and health history.
4. **Upload**: Users securely upload their retina scan image.
5. **Analysis**: The AI model analyzes the image and returns a diagnosis, confidence score, risk level, and recommendations.
6. **Results**: Users view their results, download a PDF report, and can start a new assessment.

---

## 📦 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS (CDN)
- **AI Model**: Google Gemini API
- **PDF Generation**: jsPDF
- **Routing**: React Router (HashRouter for GitHub Pages compatibility)
- **Deployment**: GitHub Pages via GitHub Actions

---

## 🔒 Security & Best Practices

- **API Key Protection**: API keys are never committed to the repository. Use GitHub Secrets for deployment.
- **.gitignore**: Ensures sensitive and build files are excluded from version control.
- **Environment Variables**: All secrets are loaded from `.env.local` or GitHub Actions secrets.
- **Demo Mode**: If no API key is present, the app safely falls back to mock data.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Rishi5377/Diabetic-Retinopathy-Detector.git
cd Diabetic-Retinopathy-Detector
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Your Gemini API Key
Create a `.env.local` file:
```
GEMINI_API_KEY=your_actual_api_key_here
```

### 4. Run Locally
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 5. Build for Production
```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

- **Automatic**: Every push to `main` triggers a GitHub Actions workflow that builds and deploys to GitHub Pages.
- **Live Site**: [https://rishi5377.github.io/Diabetic-Retinopathy-Detector/](https://rishi5377.github.io/Diabetic-Retinopathy-Detector/)
- **API Key**: Add your Gemini API key as a secret named `GEMINI_API_KEY` in your repo settings.

---

## 🏆 Why This Project Stands Out

- **State-of-the-Art AI**: Integrates Google Gemini for real medical image analysis.
- **User-Centric Design**: Intuitive, step-by-step workflow for all users.
- **Instant Results**: Get feedback in seconds, not days.
- **Professional Reporting**: Downloadable PDF reports for sharing and record-keeping.
- **Open Source**: Transparent, auditable, and easy to contribute.
- **Secure by Design**: No sensitive data is ever stored or shared.

---

## 🤝 Contributing

Pull requests are welcome! Please:
- Ensure code builds and passes all checks
- Follow TypeScript and React best practices
- Add clear, concise documentation

---

## 📄 License

This project is licensed under the MIT License.

---

## ⚠️ Disclaimer

This tool is for informational and educational purposes only. It does **not** replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical concerns.

---

## 💬 Contact

For questions, feedback, or collaboration:
- GitHub Issues
- [Rishi5377 on GitHub](https://github.com/Rishi5377)

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

Create a `.env` file from the example:

```bash
copy .env.example .env
```

Edit `.env` and add your OpenAI API key:

```
OPENAI_API_KEY=sk-your-actual-api-key-here
```

### 5. Run the Application

```bash
python main.py
```

Or using uvicorn directly:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 6. Access the Application

Open your browser and navigate to:
- **Application**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/health

## API Endpoints

### `GET /`
Renders the main application interface

### `POST /analyze`
Analyzes code and returns feedback

**Request Body:**
```json
{
  "code": "def hello():\n    print('Hello World')",
  "language": "python"
}
```

**Response:**
```json
{
  "success": true,
  "feedback": "Full feedback text...",
  "error_analysis": "No errors detected.",
  "style_suggestions": "Consider adding docstrings...",
  "efficiency_tips": "Code is efficient...",
  "explanations": "This function prints Hello World..."
}
```

### `GET /health`
Returns the health status of the API

## Next Steps

1. ✅ Complete Module 1: Project Scaffolding (You are here!)
2. 🎨 Module 2: Create Frontend UI (HTML, CSS, JS)
3. 🔧 Module 3: Backend Integration & Testing
4. 🚀 Module 4: Deployment & Final Polish

## Development Tips

- Use the `/docs` endpoint to test the API interactively
- Check the health endpoint to verify API key configuration
- Monitor the console for detailed error messages
- The app auto-reloads when you save changes (--reload flag)

## Troubleshooting

**Issue**: "OpenAI API key not configured"
- **Solution**: Make sure you've created a `.env` file and added your API key

**Issue**: Module not found errors
- **Solution**: Ensure virtual environment is activated and dependencies are installed

**Issue**: Port already in use
- **Solution**: Change the port in `main.py` or kill the process using port 8000

## License

MIT License - Built for DS Hackathon 2025

---

Happy Coding! 🎉
