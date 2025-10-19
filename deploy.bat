@echo off
:: === CONFIGURATION ===
set "REPO_PATH=E:\deploy-aviator predictor selling landing page"
set "COMMIT_MSG=Windsurf AI automated push"
set "BUILD_DIR=build"

:: === LOAD ENVIRONMENT VARIABLES ===
if exist "%REPO_PATH%\.env" (
    for /f "usebackq tokens=1,* delims==" %%A in ("%REPO_PATH%\.env") do (
        set "%%A=%%B"
    )
) else (
    echo WARNING: .env file not found.
)

:: === SCRIPT START ===
cd /d "%REPO_PATH%" || (
    echo ERROR: Repo path not found.
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
    echo No changes to commit.
)

echo Pushing via SSH...
git push origin main
if errorlevel 1 (
    echo ERROR: Push failed.
)

:: === NETLIFY DEPLOY ===
where netlify >nul 2>nul
if errorlevel 1 (
    echo ERROR: Netlify CLI not found. Run: npm install -g netlify-cli
    pause
    exit /b
)

if not exist "%BUILD_DIR%" (
    echo ERROR: Build folder '%BUILD_DIR%' not found.
    pause
    exit /b
)

echo Deploying to Netlify...
netlify deploy --prod --dir="%BUILD_DIR%" --auth "%NETLIFY_AUTH_TOKEN%"
if errorlevel 1 (
    echo ERROR: Netlify deploy failed.
)

echo === DONE ===
pause
