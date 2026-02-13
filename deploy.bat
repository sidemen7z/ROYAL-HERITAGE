@echo off
echo Deploying Royal Heritage to GitHub...

REM Initialize git if not already initialized
if not exist .git (
    git init
)

REM Add all files
git add .

REM Commit with timestamp
git commit -m "Deploy: Royal Heritage Website"

REM Add remote if not exists
git remote add origin https://github.com/sidemen7z/ROYAL-HERITAGE.git 2>nul

REM Push to GitHub
git branch -M main
git push -u origin main --force

echo.
echo ✅ Deployed to GitHub successfully!
echo.
echo 📦 Now deploy to Vercel:
echo    1. Go to https://vercel.com
echo    2. Import repository: sidemen7z/ROYAL-HERITAGE
echo    3. Click Deploy
echo.
pause
