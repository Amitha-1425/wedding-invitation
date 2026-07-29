# How to upload this project to GitHub

Follow one of the two options below.

Option A — Create repo on GitHub website (easy)
- Go to https://github.com and sign in.
- Click **New repository** and name it (for example `wedding-site`).
- Do NOT initialize with README or .gitignore (we already have those locally).
- After creating, GitHub will show commands for pushing an existing repo.

Then run these commands in PowerShell/CMD from this project root:

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/wedding-site.git
git push -u origin main
```

Option B — Use GitHub CLI (if installed)

```powershell
gh auth login
gh repo create your-username/wedding-site --public --source=. --remote=origin --push
```

Git LFS (for large audio/images)
- If you have many MP3s or large images, install Git LFS: https://git-lfs.github.com/
- Then run:

```powershell
git lfs install
git lfs track "*.mp3"
git lfs track "*.wav"
git lfs track "*.png"
git add .gitattributes
git add .
git commit -m "Add files with Git LFS"
git push origin main
```

Windows quick helper
- Double-click `push-to-github.bat` and follow the prompts to initialize, track LFS, commit, and optionally push.

If you'd like, tell me your GitHub repo URL (or give me permission to create it via `gh`) and I can customize the process or provide the exact `git remote add` command for you.
