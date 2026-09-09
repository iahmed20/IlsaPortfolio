# Portfolio

A plain HTML/CSS/JS portfolio site — no build step, no dependencies. Ready to host on GitHub Pages.

## 1. Fill in your content

Open `index.html` and replace everything in `[brackets]` — your name, bio, projects,
stack, experience, email, and links. Update the `<title>` and meta description too.
Add a real `resume.pdf` next to `index.html` if you're linking to one, or remove that link.

## 2. Push it to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Two options for the repo name:
- `YOUR_USERNAME.github.io` — this becomes your site at the root: `https://YOUR_USERNAME.github.io`
- Any other name, e.g. `portfolio` — this becomes `https://YOUR_USERNAME.github.io/portfolio`

## 3. Turn on GitHub Pages

1. On GitHub, open your repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait a minute or two, then refresh the page — GitHub will show your live URL at the top.

Any future push to `main` redeploys automatically.

## 4. (Optional) Custom domain

In the same **Pages** settings screen, add your domain under **Custom domain**, then
create a `CNAME` record at your DNS provider pointing to `YOUR_USERNAME.github.io`.
GitHub's docs walk through the exact records: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
