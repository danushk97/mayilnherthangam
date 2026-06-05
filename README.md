# One Year With You — Anniversary Site

A romantic React site for your first anniversary, with your love letter, photo gallery, and a song — deployable to GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to preview.

## Add your photos & song

1. **Photos** — Drop your images into `public/photos/` (e.g. `photo-1.jpg`, `photo-2.jpg`).
2. **Song** — Place your audio file at `public/music/our-song.mp3`.
3. **Names & files** — Edit `src/config.js` for names and file paths.
4. **Text & translations** — Edit `src/i18n/translations.js` for English and French copy (photo captions, letter, UI labels).

The site defaults to **English** with an **EN / FR** toggle in the top-right corner. The chosen language is saved in the browser.

## Deploy to GitHub Pages

### 1. Create a GitHub repo

```bash
git init
git add .
git commit -m "Add anniversary site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Update the base path

In `vite.config.js`, change `anniversary-site` to match your repo name:

```js
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'YOUR_REPO_NAME'
```

### 3. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` will build and deploy automatically

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Manual deploy (alternative)

```bash
npm run deploy
```

This uses the `gh-pages` package to push the `dist` folder. You'll still need to enable Pages and set the source to the `gh-pages` branch.

## Project structure

```
public/
  photos/     ← your images
  music/      ← your song
src/
  config.js   ← names, photos, song settings
  components/ ← Hero, Letter, Gallery, MusicPlayer
```
