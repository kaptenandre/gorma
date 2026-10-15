import { defineConfig } from "astro/config";

// Fully static: deploys as-is on Vercel or Netlify, no CMS, no server.
export default defineConfig({
  site: "https://www.gormaofficial.com",
  output: "static",
});
