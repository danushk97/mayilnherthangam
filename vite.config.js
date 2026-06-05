import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set to your GitHub repo name for Pages deploy.
// Site URL: https://YOUR_USERNAME.github.io/REPO_NAME/
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'anniversary-site'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : `/${repoName}/`,
}))
