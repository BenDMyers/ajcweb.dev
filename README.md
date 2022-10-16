## Introduction

> Astro Theme Cactus is a simple, opinionated starter built with the Astro framework. Use it to create an easy-to-use blog or website. You can view a [live demo](https://astro-theme-cactus.netlify.app/) hosted on Netlify with the original starter project. Made with Astro, TypeScript, TailwindCSS, and MDX, the starter includes the following features:

- [Astro Image](https://docs.astro.build/en/guides/integrations-guide/image/) integration for optimized images
- [MDX posts](https://docs.astro.build/en/guides/integrations-guide/mdx/) and pagination
- Theming color modes with [Tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/) and [CSS variables](https://docs.astro.build/en/guides/styling/#css-variables)
- [Shiki](https://shiki.matsu.io/) code syntax styling
- Auto-generated [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

[Create a new repo](https://github.com/chrismwilliams/astro-theme-cactus/generate) from this template.

## Commands

Replace pnpm with your choice of npm / yarn

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally, before deploying |

### Frontmatter

Property and description (* required)

- `title` (*) - Used as the text link to the post, the h1 on the posts' page, and the pages' title property
- `description` (*) - Similar to above, used as the seo description property
- `publishDate` (*) - To change the date format/locale, currently **en-US**, update/pass the **locale** arg to function **getLocaleTime**, found in `src/util.ts`.
- `layout` - Import [Markdown Layouts](https://docs.astro.build/en/core-concepts/layouts/#markdown-layouts). `src/layouts/BlogPost.astro` theme is used as a wrapper for all blog posts.
- `tags` - Tags are optional. Any new tag(s) will be shown in `domain.com/posts` + `domain.com/tags`, and generate the page(s) `domain.com/tags/[yourTag]`
- `image` - Blog cover art

```markdown
---
title: 
description: 
publishDate: 2023 12 31
tags: [ "", "", "", "" ]
image: 
layout: "@/layouts/BlogPost"
---
```

## Deploy

[Astro docs](https://docs.astro.build/en/guides/deploy/) has a great section and breakdown of how to deploy your own Astro site on various platforms and their idiosyncrasies. By default the site will be built (see Commands section above) to a `/dist` directory.

## Acknowledgment

This theme is inspired by [Hexo Theme Cactus](https://github.com/probberechts/hexo-theme-cactus). Licensed under the MIT License, Copyright © 2022.