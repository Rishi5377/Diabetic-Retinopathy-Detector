# 🚀 GitHub Pages Deployment Guide

Your code is now on GitHub! Follow these steps to deploy to GitHub Pages.

## ✅ Step 1: Enable GitHub Pages

1. **Go to your repository**: https://github.com/Rishi5377/Diabetic-Retinopathy-Detector

2. **Click on `Settings`** (top right of repo page)

3. **Scroll down to `Pages`** (left sidebar)

4. **Under "Build and deployment"**:
   - **Source**: Select `GitHub Actions` (NOT "Deploy from a branch")
   
   ![GitHub Pages Source](https://i.imgur.com/XYZ.png)

5. **Click Save**

---

## ✅ Step 2: Add Your Gemini API Key (IMPORTANT!)

### Get Your API Key
1. Go to https://aistudio.google.com/app/apikey
2. Click **"Create API Key"**
3. Copy the key (starts with `AIza...`)

### Add Secret to GitHub
1. Go to your repo: https://github.com/Rishi5377/Diabetic-Retinopathy-Detector
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `GEMINI_API_KEY`
5. Value: Paste your API key
6. Click **"Add secret"**

⚠️ **Without this step, the AI analysis won't work!**

---

## ✅ Step 3: Trigger Deployment

The GitHub Actions workflow will automatically run when you push to `main`. Since we just pushed, let's check:

1. Go to the **Actions** tab in your repo
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Green checkmark ✅ = Success!

**If the workflow hasn't started:**
```powershell
# Make a small change and push again
git commit --allow-empty -m "Trigger deployment"
git push
```

---

## ✅ Step 4: Access Your Live Website

Once deployment completes, your site will be live at:

### 🌐 **https://rishi5377.github.io/Diabetic-Retinopathy-Detector/**

---

## 🔧 Troubleshooting

### Problem: Workflow fails with "npm ci" error
**Solution**: The workflow uses `npm install` (already configured), so this shouldn't happen.

### Problem: Site shows blank page
**Check:**
1. Browser console (F12) for errors
2. Verify the `base: './'` in `vite.config.ts` is set
3. Check that HashRouter is used (not BrowserRouter)

### Problem: API key not working
**Check:**
1. Secret is named exactly `GEMINI_API_KEY` (case-sensitive)
2. Workflow has the env section:
   ```yaml
   env:
     GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
   ```

### Problem: 404 on refresh
**Solution**: Already fixed! We're using `HashRouter` which works with GitHub Pages.

---

## 🔐 Secure Your API Key (Recommended)

After deployment, restrict your API key to prevent abuse:

1. Go to https://console.cloud.google.com/apis/credentials
2. Find your API key, click **Edit**
3. Under **Application restrictions**:
   - Select **HTTP referrers (websites)**
   - Add: `https://rishi5377.github.io/*`
4. Under **API restrictions**:
   - Select **Restrict key**
   - Enable only: **Generative Language API**
5. Click **Save**

Now your key only works on YOUR website! 🔒

---

## 📊 Monitor Your Deployment

### Check Build Logs
1. Go to **Actions** tab
2. Click on the latest workflow run
3. Click on **build** job to see logs
4. Check for any errors

### Test Your Live Site
Visit: https://rishi5377.github.io/Diabetic-Retinopathy-Detector/

Test all features:
- ✅ Welcome page loads
- ✅ User info form works
- ✅ Quiz advances
- ✅ Image upload works
- ✅ AI analysis returns results (if API key is set)
- ✅ PDF download works

---

## 🎉 Success Checklist

- [ ] Code pushed to GitHub ✅ (DONE)
- [ ] GitHub Pages enabled (Source: GitHub Actions)
- [ ] `GEMINI_API_KEY` secret added
- [ ] Workflow runs successfully
- [ ] Live site accessible
- [ ] API key restricted to your domain

---

## 🔄 Making Updates

To update your live site:

```powershell
# 1. Make your changes to the code
# 2. Commit and push
git add .
git commit -m "Update: description of changes"
git push

# 3. Wait 2-3 minutes for auto-deployment
```

Every push to `main` automatically rebuilds and redeploys! 🚀

---

## 📞 Need Help?

Common issues and solutions:
- **Blank page**: Check browser console (F12)
- **API not working**: Verify secret name is exactly `GEMINI_API_KEY`
- **Build fails**: Check Actions logs for error details
- **404 errors**: Ensure HashRouter is used (already done)

---

**Your website will be live at:**
## 🌐 https://rishi5377.github.io/Diabetic-Retinopathy-Detector/

Good luck! 🎊
