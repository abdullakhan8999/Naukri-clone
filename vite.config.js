import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { BASE_URL } from "./src/Constants/BaseURl.js";
const BASE_URL = "https://crm-backend-system-employee-hiring.onrender.com";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": BASE_URL
    }
  },
  plugins: [react()],
})
