@echo off
setlocal ENABLEDELAYEDEXPANSION

:: === CONFIGURATION ===
set "REPO_PATH=E:\deploy-aviator predictor selling landing page"
set "COMMIT_MSG=Windsurf AI automated push"
set "ENV_FILE=%REPO_PATH%\.env"
set "BUILD_DIR=dist"
set "FUNCTIONS_DIR=functions"

:: === LOAD ENVIRONMENT VARIABLES (optional) ===
if exist "%ENV_FILE%" (
    for /f "usebackq tokens=1,* delims==" %%A in ("%ENV_FILE%") do (
        set "K=%%A"
        set "V=%%B"
        if not "!K!"=="" if not "!K:~0,1!"=="#" set "!K!=!V!"
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
    exit /b 1
)

:: Pull latest
echo Pulling latest changes...
git pull origin main --rebase
if errorlevel 1 (
    echo WARNING: git pull failed or nothing to pull.
)

echo Building project...
call npm run build
if errorlevel 1 (
    echo ERROR: build failed.
    pause
    exit /b 1
)

:: Stage + commit + push (SSH remote assumed)
echo Staging changes...
git add -A

echo Committing...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo No changes to commit or commit failed.
)

echo Pushing via SSH...
git push origin main
if errorlevel 1 (
    echo ERROR: Push failed. Check SSH setup or repo permissions.
    pause
    exit /b 1
)

:: === NETLIFY DEPLOY ===
where netlify >nul 2>nul
if errorlevel 1 (
    echo ERROR: Netlify CLI not found. Install it with: npm install -g netlify-cli
    pause
    exit /b 1
)

:: Optionally link to a specific site if NETLIFY_SITE_ID is present
if defined NETLIFY_SITE_ID (
    echo Linking to Netlify site ID %NETLIFY_SITE_ID% ...
    netlify link --id %NETLIFY_SITE_ID%
    if errorlevel 1 (
        echo ERROR: netlify link failed. Ensure the Site ID is correct or run `netlify link` once manually.
        pause
        exit /b 1
    )
) else (
    echo Skipping linking (NETLIFY_SITE_ID not set). Assuming project is already linked. If not, run: netlify link
)

:: Set environment variables on Netlify if present
if defined PAYHERO_USERNAME (
    echo Setting PAYHERO_USERNAME on Netlify...
    netlify env:set PAYHERO_USERNAME "%PAYHERO_USERNAME%"
)
if defined PAYHERO_API_PASSWORD (
    echo Setting PAYHERO_API_PASSWORD on Netlify...
    netlify env:set PAYHERO_API_PASSWORD "%PAYHERO_API_PASSWORD%"
)
if defined PAYHERO_CHANNEL_ID (
    echo Setting PAYHERO_CHANNEL_ID on Netlify...
    netlify env:set PAYHERO_CHANNEL_ID "%PAYHERO_CHANNEL_ID%"
)

:: Deploy (functions picked up from netlify.toml)
echo Deploying to Netlify from %BUILD_DIR% with functions in %FUNCTIONS_DIR% ...
netlify deploy --prod --dir="%BUILD_DIR%" --functions "%FUNCTIONS_DIR%"
if errorlevel 1 (
    echo ERROR: Netlify deploy failed. Check CLI setup, site link, or build folder.
    pause
    exit /b 1
)

echo === DEPLOYMENT COMPLETE ===
pause
endlocal