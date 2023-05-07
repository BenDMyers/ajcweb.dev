## Introduction

> Astro Theme Cactus is a simple, opinionated starter built with the Astro framework. Use it to create an easy-to-use blog or website. You can view a [live demo](https://astro-theme-cactus.netlify.app/) hosted on Netlify with the original starter project. Made with Astro, TypeScript, TailwindCSS, and MDX.

[Create a new repo](https://github.com/chrismwilliams/astro-theme-cactus/generate) from this template.

## Commands

Replace pnpm with your choice of npm or yarn

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm i`       | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally, before deploying |

## Frontmatter

Property and description (* required)

- `title` (*) - Used as the text link to the post, the h1 on the posts' page, and the pages' title property
- `description` (*) - Similar to above, used as the seo description property
- `publishDate` (*) - To change the date format/locale, currently **en-US**, update/pass the **locale** arg to function **getLocaleTime**, found in `src/util.ts`.
- `layout` - Import [Markdown Layouts](https://docs.astro.build/en/core-concepts/layouts/#markdown-layouts). `src/layouts/BlogPost.astro` theme is used as a wrapper for all blog posts.
- `tags` - Tags are optional. Any new tag(s) will be shown in `domain.com/posts` + `domain.com/tags`, and generate the page(s) `domain.com/tags/[yourTag]`
- `image` - Blog cover art
- `canonicalURL` - [Canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) for blog posts

```markdown
---
canonicalURL: "https://ajcwebdev.com/2023/00/00/"
title: ""
description: ""
publishDate: "2023-00-00"
tags: [ "", "", "", "" ]
image: ""
layout: "@/layouts/BlogPost"
---
```

## Deploy

[Astro docs](https://docs.astro.build/en/guides/deploy/) has a great section and breakdown of how to deploy your own Astro site on various platforms and their idiosyncrasies. By default the site will be built (see Commands section above) to a `/dist` directory.

### Cloudflare

Site is deployed on Netlify and uses [Cloudflare Redirects](https://developers.cloudflare.com/pages/platform/redirects/).

## Acknowledgment

This theme is inspired by [Hexo Theme Cactus](https://github.com/probberechts/hexo-theme-cactus). Licensed under the MIT License, Copyright © 2022.

## Configuration

Astro configuration.

```js
// astro.config.mjs

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
```

Post interface.

```ts
// src/util.ts

interface Post {
	canonicalURL: string
	title: string
	description: string
	publishDate: Date
	tags?: string[]
	image: string
	layout: string
}
```

Site meta.

```astro
<!-- src/layouts/Base.astro -->

type SiteMeta = {
	title: string
	description?: string
	image?: string
	canonicalURL?: string
	publishDate?: string
}

const siteMeta = {
  title: "ajcwebdev",
  description: "Web developer, writer, speaker, and advocate",
	canonicalURL: "https://ajcwebdev.com",
  githubUrl: "https://github.com/ajcwebdev/ajcweb.dev",
	publishDate: "2022-11-14",
	image: "https://github.com/ajcwebdev/social-cards/blob/main/background-html.png?raw=true",
	github: "https://github.com/ajcwebdev",
  twitter: "https://twitter.com/ajcwebdev"
}
```