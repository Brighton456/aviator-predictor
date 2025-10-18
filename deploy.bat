@echo off
:: === CONFIGURATION ===
set "REPO_PATH=E:\deploy-aviator predictor selling landing page"
set "COMMIT_MSG=Windsurf AI automated push"
set "ENV_FILE=%REPO_PATH%\.env"
set "BUILD_DIR=build"  :: Change this if your publish folder is different

:: === LOAD ENVIRONMENT VARIABLES ===
if exist "%ENV_FILE%" (
    for /f "usebackq tokens=1,* delims==" %%A in ("%ENV_FILE%") do (
        set "%%A=%%B"
    )
) else (
    echo WARNING: .env file not found at %ENV_FILE%
)

:: === SCRIPT START ===
echo Navigating to repo folder...
cd /d "%REPO_PATH%"
if errorlevel 1 (
    echo ERROR: Repo path not found. Check REPO_PATH.
    pause
    exit /b
)

echo Pulling latest changes...
git pull origin main --rebase

echo Staging changes...
git add .

echo Committing...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo No changes to commit or commit failed.
)

echo Pushing via SSH...
git push origin main
if errorlevel 1 (
    echo ERROR: Push failed. Check SSH setup or repo permissions.
)

:: === NETLIFY DEPLOY ===
where netlify >nul 2>nul
if errorlevel 1 (
    echo ERROR: Netlify CLI not found. Install it with: npm install -g netlify-cli
    pause
    exit /b
)

echo Deploying to Netlify...
netlify deploy --prod --dir=%BUILD_DIR% --auth %NETLIFY_AUTH_TOKEN%
if errorlevel 1 (
    echo ERROR: Netlify deploy failed. Check CLI setup or build folder.
)

echo === DONE ===
pause
