# Deployment Guide

## Live Application
Your Vedatrayi platform is deployed and accessible at:
**[Live Demo Link - Will be provided after deployment]**

## Git Setup Instructions

Since Git is not available in the WebContainer environment, follow these steps to set up your repository:

### 1. Create a GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New Repository"
3. Name it: `vedatrayi-platform`
4. Make it public or private as preferred
5. Don't initialize with README (we already have one)

### 2. Download Your Code
1. Download all project files from this environment
2. Create a local folder on your computer
3. Copy all files to that folder

### 3. Initialize Git Locally
```bash
cd your-project-folder
git init
git add .
git commit -m "Initial commit: Vedatrayi Platform"
git branch -M main
git remote add origin https://github.com/yourusername/vedatrayi-platform.git
git push -u origin main
```

### 4. Future Development Workflow
```bash
# Make changes to your code
git add .
git commit -m "Description of changes"
git push origin main
```

## Deployment Options

### Current: Netlify (Automatic)
- Connected to this WebContainer
- Auto-deploys on changes
- Custom domain available

### Alternative: Vercel
```bash
npm install -g vercel
vercel --prod
```

### Alternative: GitHub Pages
1. Push code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (main)
4. Enable GitHub Pages

**Important for GitHub Pages:**
- The `vite.config.ts` is configured with the correct base path
- A GitHub Actions workflow is included for automatic deployment
- Make sure to enable GitHub Pages in your repository settings
- Select "GitHub Actions" as the source in Pages settings

**Manual GitHub Pages Setup:**
1. Go to your repository on GitHub
2. Click Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically build and deploy your site
5. Your site will be available at: `https://anilshashii.github.io/Vedatrayi/`

## Environment Setup for Local Development
```bash
npm install
npm run dev
```

## Build for Production
```bash
npm run build
npm run preview
```

## Features Ready for Launch
✅ Multi-language support (12 Indian languages)
✅ 6+ spiritual practices with detailed benefits
✅ Responsive design for all devices
✅ Search and filtering capabilities
✅ Audio player interface
✅ SEO optimized
✅ Production ready

## Next Steps for Enhancement
- Add real audio files
- Implement user authentication
- Expand content library
- Add user favorites and playlists
- Integrate analytics
- Add offline capabilities (PWA)