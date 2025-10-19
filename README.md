# Real-time Code Feedback Assistant 🚀

An AI-powered web application that provides instant feedback on Python code snippets, including error detection, style suggestions, efficiency tips, and concept explanations.

## Features

- 🔍 **Error Analysis**: Identifies syntax errors, runtime errors, and logical bugs
- 🎨 **Style Suggestions**: Provides code style and best practices recommendations
- ⚡ **Efficiency Tips**: Suggests performance and optimization improvements
- 📚 **Concept Explanations**: Explains complex programming concepts

## Tech Stack

- **Backend**: FastAPI (Python)
- **AI Model**: OpenAI GPT-3.5-turbo / GPT-4
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Modern CSS with responsive design

## Project Structure

```
DS Hackathon/
├── backend/                  # Backend modules (future expansion)
├── frontend/
│   ├── static/
│   │   ├── css/             # Stylesheets
│   │   └── js/              # JavaScript files
│   └── templates/           # HTML templates
├── main.py                  # Main FastAPI application
├── requirements.txt         # Python dependencies
├── .env                     # Environment variables (create from .env.example)
├── .env.example            # Example environment variables
└── README.md               # This file
```

## Setup Instructions

### 1. Clone or Navigate to the Project

```bash
cd "c:\Users\lenovo\DS Hackathon"
```

### 2. Create Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate
```

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
