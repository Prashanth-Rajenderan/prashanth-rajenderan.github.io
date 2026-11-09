# Prashanth Rajenderan - Cloud Engineering Command Center

A high-performance personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and configured for seamless static export to **GitHub Pages**.

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Test static build export
npm run build
```

## GitHub Pages Deployment

This repository includes an automated GitHub Actions deployment workflow in `.github/workflows/deploy.yml`.

### Deployment Steps:
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of cloud engineering portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**
3. The workflow will automatically build and publish your portfolio at `https://<your-username>.github.io/<repo-name>/`.
