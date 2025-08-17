# GitHub Pages Troubleshooting Guide

## Current Issue: Site Not Loading

### Quick Checklist:

1. **Repository Settings:**
   - Go to Settings > Pages
   - Source MUST be set to "GitHub Actions"
   - Repository must be public

2. **Check Actions Status:**
   - Go to Actions tab in your repository
   - Look for "Deploy to GitHub Pages" workflow
   - Check if it's green (success), yellow (running), or red (failed)

3. **Force Rebuild:**
   - Go to Actions tab
   - Click "Deploy to GitHub Pages"
   - Click "Run workflow" > "Run workflow"

### Common Issues & Solutions:

#### Issue 1: Blank White Page
**Cause:** Base path configuration
**Solution:** Updated vite.config.ts with conditional base path

#### Issue 2: 404 Error
**Cause:** GitHub Pages doesn't handle SPA routing
**Solution:** Added 404.html redirect file

#### Issue 3: Assets Not Loading
**Cause:** Incorrect asset paths
**Solution:** Updated index.html to use relative paths

#### Issue 4: Workflow Not Running
**Cause:** Missing permissions or incorrect workflow
**Solution:** Updated workflow with proper permissions

### Manual Steps to Fix:

1. **Download these updated files and push to Git:**
   - `.github/workflows/deploy.yml`
   - `vite.config.ts`
   - `index.html`
   - `public/404.html`

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Fix GitHub Pages deployment configuration"
   git push origin main
   ```

3. **Check Repository Settings:**
   - Settings > Pages > Source = "GitHub Actions"

4. **Wait 5-10 minutes** for deployment

### Expected URL:
https://anilshashii.github.io/Vedatrayi/

### Debug Steps:
1. Check browser console for errors (F12)
2. Check network tab for failed requests
3. Verify Actions workflow completed successfully
4. Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

If still not working, check the Actions tab for specific error messages.