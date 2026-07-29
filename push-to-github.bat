@echo off
REM Push-to-GitHub helper for Windows
REM Run this from the project root: double-click or run in PowerShell/CMD

echo Preparing repository for GitHub upload...

REM Initialize git if needed
git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
  echo Initializing git repository...
  git init
) else (
  echo Git repository already initialized.
)

REM Install Git LFS (if available) and track common media
git lfs install >nul 2>&1
echo Tracking common media types with Git LFS (if installed)...
git lfs track "*.mp3" >nul 2>&1
git lfs track "*.wav" >nul 2>&1
git lfs track "*.ogg" >nul 2>&1
git lfs track "*.png" >nul 2>&1
git lfs track "*.jpg" >nul 2>&1

REM Stage gitattributes if created
if exist .gitattributes (
  git add .gitattributes
)

echo Adding files to commit...
git add .

set COMMITMSG=Initial commit
git commit -m "%COMMITMSG%" >nul 2>&1
if errorlevel 1 (
  echo Nothing to commit or commit failed.
) else (
  echo Committed with message: %COMMITMSG%
)

echo.
echo To push to GitHub, you can either:
echo 1) Create a repo on GitHub and supply its HTTPS URL below
echo 2) Use GitHub CLI: run `gh repo create` beforehand to create & push

set /p REMOTEURL=Enter GitHub remote URL (leave blank to use https://github.com/Amitha-1425/wedding-invitation.git): 
if "%REMOTEURL%"=="" (
  set REMOTEURL=https://github.com/Amitha-1425/wedding-invitation.git
)

echo Using remote: %REMOTEURL%
git remote add origin %REMOTEURL% 2>nul
git branch -M main
git push -u origin main
if errorlevel 1 (
  echo Push failed. Check your credentials, remote URL, or run the script again.
) else (
  echo Push successful.
)

echo Done.
pause