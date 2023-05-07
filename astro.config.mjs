import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"
import sitemap from "@astrojs/sitemap"
import prefetch from "@astrojs/prefetch"

export default defineConfig({
  site: "https://ajcwebdev.com/",
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: false
    }
  },
  integrations: [
		mdx({}),
		tailwind({ config: { applyBaseStyles: false } }),
    sitemap(),
		image({ serviceEntryPoint: "@astrojs/image/sharp" }),
    prefetch()
  ],
  vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"]
		}
	}
})