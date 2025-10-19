# Diabetic Retinopathy Detector 🩺

An AI-powered web app that analyzes retina scan images for Diabetic Retinopathy using the **Gemini API**.

## 🚀 Features

- Upload retina scans and get AI-powered analysis
- Interactive quiz to assess DR knowledge
- Generate downloadable PDF reports
- Risk level classification (Low, Medium, High, Critical)
- Multi-step workflow with progress tracking

---

## 📦 Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **React Router** for navigation
- **Tailwind CSS** (CDN)
- **jsPDF** for PDF generation
- **Google Gemini AI** for image analysis

---

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js** v20+ and **npm** v10+
- **Gemini API Key** ([get one here](https://aistudio.google.com/))

### Local Development

1. **Clone the repository**:
   ```powershell
   git clone https://github.com/<your-username>/<repo-name>.git
   cd "<repo-name>"
   ```

2. **Install dependencies**:
   ```powershell
   npm install
   ```

3. **Create `.env.local` file** (at project root):
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Run the dev server**:
   ```powershell
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

5. **Build for production**:
   ```powershell
   npm run build
   ```
   The `dist/` folder will contain the production build.

6. **Preview the production build**:
   ```powershell
   npm run preview
   ```

---

## 🌐 Deploying to GitHub Pages

### Method 1: Automated via GitHub Actions (Recommended)

This repo includes a `.github/workflows/deploy.yml` workflow that auto-deploys on every push to `main`.

**Steps**:
1. **Create a new GitHub repository** and push your code
2. **Go to repo Settings** → **Secrets and variables** → **Actions**
3. **Add a new secret**: `GEMINI_API_KEY` with your Gemini API key
4. **Enable GitHub Pages**:
   - Go to **Settings** → **Pages**
   - Source: **GitHub Actions**
5. **Push to `main`** branch; the workflow will auto-build and deploy

⚠️ **Security Warning**: The API key will be bundled in the client-side JS. For production use:
- Use a backend proxy server to hide your API key
- Or restrict the API key to specific domains in Google Cloud Console

### Method 2: Manual Deployment

```powershell
# Build the project
npm run build

# Deploy the dist folder to GitHub Pages (you can use gh-pages package)
npm install -g gh-pages
gh-pages -d dist
```

---

## 🔐 Environment Variables

| Variable         | Description                  |
|------------------|------------------------------|
| `GEMINI_API_KEY` | Your Google Gemini API key   |

---

## 📄 Available Scripts

| Command         | Description                           |
|-----------------|---------------------------------------|
| `npm run dev`   | Start Vite dev server (port 3000)    |
| `npm run build` | TypeScript compile + production build |
| `npm run preview` | Preview the production build        |

---

## ❓ FAQ

### Can browsers understand TypeScript?

**No**, browsers only understand JavaScript. TypeScript is a **development tool** that provides type safety. The build process (via `tsc` and Vite) transpiles TypeScript into standard JavaScript before deployment.

When you run `npm run build`:
1. `tsc` checks for TypeScript errors
2. `vite build` bundles everything into optimized JavaScript/CSS/HTML
3. The `dist/` folder contains only browser-ready files

### What is Vite?

Vite is a modern build tool that:
- Provides fast hot-module replacement during development
- Bundles and optimizes code for production
- Handles TypeScript, JSX, CSS, and assets automatically

---

## 🤝 Contributing

Pull requests welcome! Please ensure:
- Code builds without errors (`npm run build`)
- Keep the codebase type-safe

---

## 📝 License

MIT License - see LICENSE file for details

---

## ⚠️ Disclaimer

This tool is for educational purposes only. It does **not** replace professional medical diagnosis. Always consult a qualified healthcare provider for medical concerns.
