import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'pizzeria-mamma-mia'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/` 
})