import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://yayosanchez.github.io/api-react-rick-morty",
  plugins: [react()],
})
