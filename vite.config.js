import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

// GitHub Pages project site: https://USERNAME.github.io/REPO_NAME/
const repoName =
  process.env.GITHUB_REPOSITORY?.split('/')[1] || pkg.name

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : `/${repoName}/`,
}))
