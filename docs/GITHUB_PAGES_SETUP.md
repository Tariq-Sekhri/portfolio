# Fix blank page / 404 on GitHub Pages

Your site is still serving **source code** instead of the **built** app. Do this:

## 1. Use GitHub Actions for deployment

1. Open your repo: **https://github.com/Tariq-Sekhri/portfolio**
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** choose **"GitHub Actions"** (not "Deploy from a branch").
4. Save. You don’t need to pick a branch or folder.

## 2. Run the workflow (if it hasn’t run yet)

1. Open the **Actions** tab.
2. Click **"Deploy to GitHub Pages"** in the left sidebar.
3. If you see **"Run workflow"**, click it and run on `master`.
4. Wait for the workflow to finish (green checkmark).
5. The first time, you may need to approve the **`github-pages`** environment (GitHub will show a prompt).

## 3. Open the correct URL

The app is served under the repo name, not at the root:

- **Correct:** **https://tariq-sekhri.github.io/portfolio/**
- Wrong: https://tariq-sekhri.github.io/ (root will not load the app)

Use the correct URL and, if needed, hard refresh (Ctrl+Shift+R) or try in an incognito window.

---

**Why:** The built app lives in the `dist/` folder. The workflow builds it and deploys that. If Pages is set to “Deploy from a branch”, it serves the repo as-is (including raw `index.html` that points to `/src/main.tsx`), which causes the 404.
