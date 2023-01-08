import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: false
    }
  },
  site: "https://ajcwebdev.com",
  integrations: [
    mdx({}),
    tailwind({ config: { applyBaseStyles: false } }),
    sitemap()
  ]
})