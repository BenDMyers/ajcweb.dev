---
title: 
description: 
publishDate: 2023 12 31
tags: [ "", "", "", "" ]
image: 
layout: "@/layouts/BlogPost"
---

## Introduction

> Astro Theme Cactus is a simple, opinionated starter built with the Astro framework. Use it to create an easy-to-use blog or website. You can view a [live demo](https://astro-theme-cactus.netlify.app/) hosted on Netlify with the original starter project. Made with Astro, TypeScript, TailwindCSS, and MDX, the starter includes the following features:

- [Astro Image](https://docs.astro.build/en/guides/integrations-guide/image/) integration for optimized images
- [MDX posts](https://docs.astro.build/en/guides/integrations-guide/mdx/) and pagination
- Theming color modes with [Tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/) and [CSS variables](https://docs.astro.build/en/guides/styling/#css-variables)
- [Shiki](https://shiki.matsu.io/) code syntax styling
- Auto-generated [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## Quick start

[Create a new repo](https://github.com/chrismwilliams/astro-theme-cactus/generate) from this template.

## Commands

Replace pnpm with your choice of npm / yarn

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally, before deploying |

## Configure

- Edit config file `src/site-meta.config.ts` for basic site meta data
- Update file `astro.config.mjs` site property with your own domain
- Replace & update files within the `/public` folder:
  - favicon.ico
  - `/images` folder - add your own icon
  - robots.txt - update the Sitemap url to your own domain
  - manifest.webmanifest
- Modify file `src/styles/global.css` with your own light and dark styles
- Create / edit posts for your blog within `src/pages/posts/` with .md file(s)
- Optional:
  - Fonts: This theme sets the body element to the font family `font-mono`, located in the global css file `src/styles/global.css`. You can change fonts by removing the variant `font-mono`, after which TailwindCSS will default to the `font-sans` [font family stack](https://tailwindcss.com/docs/font-family).

## Adding posts

Adding a post is a simple as adding your .mdx file(s) to the `src/pages/posts/` folder, the name of which will be used as the slug/url. The two posts included with this template can be modified, and give you an example of how to structure your posts. [Astro docs](https://docs.astro.build/en/guides/markdown-content/) also has a detailed section on markdown pages.

### Frontmatter

| Property (\* required) | Description                                                                                                                                                                 |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| layout                 | Import [Markdown Layouts](https://docs.astro.build/en/core-concepts/layouts/#markdown-layouts). `src/layouts/BlogPost.astro` theme is used as a wrapper for all blog posts. |
| title \*               | Used as the text link to the post, the h1 on the posts' page, and the pages' title property                                                                                 |
| description \*         | Similar to above, used as the seo description property                                                                                                                      |
| publishDate \*         | To change the date format/locale, currently **en-GB**, update/pass the **locale** arg to function **getLocaleTime**, found in `src/util.ts`.           |
| tags                   | Tags are optional. Any new tag(s) will be shown in `domain.com/posts` + `domain.com/tags`, and generate the page(s) `domain.com/tags/[yourTag]`                 |

## Deploy

[Astro docs](https://docs.astro.build/en/guides/deploy/) has a great section and breakdown of how to deploy your own Astro site on various platforms and their idiosyncrasies.

By default the site will be built (see Commands section above) to a `/dist` directory.

## Acknowledgment

This theme is inspired by [Hexo Theme Cactus](https://github.com/probberechts/hexo-theme-cactus)

## License

Licensed under the MIT License, Copyright © 2022