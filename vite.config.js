import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 /*  server : {
    fs : {
      allow : [".."]
    }
  }, */
  plugins: [react()],
});
