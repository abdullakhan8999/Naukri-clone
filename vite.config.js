import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { BASE_URL } from "./src/Constants/BaseURl.js";
const BASE_URL = "http://localhost:8080";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": BASE_URL
    }
  },
  plugins: [react()],
})
