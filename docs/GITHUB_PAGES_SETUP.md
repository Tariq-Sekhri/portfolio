# GitHub Pages setup

The workflow **builds** the app and pushes the result to the **gh-pages** branch. GitHub Pages must serve that branch (the built site), not `master` (the source).

## 1. Run the workflow first (creates gh-pages branch)

1. Open **https://github.com/Tariq-Sekhri/portfolio** → **Actions** tab.
2. Click **Deploy to GitHub Pages** in the left sidebar.
3. Click **Run workflow**, choose **master**, then **Run workflow**.
4. Wait until the run finishes (green check). This creates the **gh-pages** branch with the built site.

## 2. Set Pages to use gh-pages (not master)

1. Go to **Settings** → **Pages**.
2. Under **Build and deployment**:
   - **Source:** **Deploy from a branch**
   - **Branch:** **gh-pages** → **/ (root)**
3. Click **Save**.

## 3. Use the correct URL

- **Correct:** **https://tariq-sekhri.github.io/portfolio/** (with `/portfolio/` and trailing slash)
- Wrong: `https://tariq-sekhri.github.io/` (root does not serve this app)

Hard refresh (Ctrl+Shift+R) or try in incognito if it still looks blank.

---

**Why:** The repo root has source code; `index.html` there points to `/src/main.tsx`, which only exists in dev. The workflow builds the app into `dist/` and pushes that to **gh-pages**. Pages must serve **gh-pages**, not `master`.
