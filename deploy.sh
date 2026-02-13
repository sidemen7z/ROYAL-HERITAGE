#!/bin/bash

echo "🚀 Deploying Royal Heritage to GitHub..."

# Initialize git if not already initialized
if [ ! -d .git ]; then
    git init
fi

# Add all files
git add .

# Commit with timestamp
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Add remote if not exists
if ! git remote | grep -q origin; then
    git remote add origin https://github.com/sidemen7z/ROYAL-HERITAGE.git
fi

# Push to GitHub
git branch -M main
git push -u origin main --force

echo "✅ Deployed to GitHub successfully!"
echo "📦 Now deploy to Vercel:"
echo "   1. Go to https://vercel.com"
echo "   2. Import repository: sidemen7z/ROYAL-HERITAGE"
echo "   3. Click Deploy"
