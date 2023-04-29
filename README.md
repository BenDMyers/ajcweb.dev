## Introduction

> Astro Theme Cactus is a simple, opinionated starter built with the Astro framework. Use it to create an easy-to-use blog or website. You can view a [live demo](https://astro-theme-cactus.netlify.app/) hosted on Netlify with the original starter project. Made with Astro, TypeScript, TailwindCSS, and MDX.

[Create a new repo](https://github.com/chrismwilliams/astro-theme-cactus/generate) from this template.

## Commands

Replace pnpm with your choice of npm / yarn

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

### Frontmatter Template

```markdown
---
canonicalURL: "https://ajcwebdev.com/2023/12/31/"
title: ""
description: ""
publishDate: "2023-12-31"
tags: [ "", "", "", "" ]
image: ""
layout: "@/layouts/BlogPost"
---
```

`_redirects`.

```
/2023/01/09/a-first-look-at-trpc /a-first-look-at-trpc
/2023/01/09/a-first-look-at-trpc /trpc
/2022/11/20/a-first-look-at-solidstart /a-first-look-at-solidstart
/2022/08/13/a-first-look-at-create-t3-app /a-first-look-at-create-t3-app
/2022/08/02/does-remix-scale /does-remix-scale
/2022/06/12/a-first-look-at-ipfs /a-first-look-at-ipfs
/2022/03/05/storing-nft-information-off-chain-with-fauna /storing-nft-information-off-chain-with-fauna
/2022/03/04/a-first-look-at-ethers-and-hardhat /a-first-look-at-ethers-and-hardhat
/2022/02/01/query-a-mongodb-database-with-prisma-and-railway /query-a-mongodb-database-with-prisma-and-railway
/2021/11/27/a-first-look-at-astro /a-first-look-at-astro
/2021/11/22/what-is-partial-hydration-and-why-is-everyone-talking-about-it /what-is-partial-hydration-and-why-is-everyone-talking-about-it
/2021/11/10/how-to-display-a-custom-daily-greeting /how-to-display-a-custom-daily-greeting
/2021/11/02/a-first-look-at-oak /a-first-look-at-oak
/2021/10/15/a-first-look-at-nuxt-3 /a-first-look-at-nuxt-3
/2021/10/05/why-am-i-hung-up-on-the-term-fullstack /why-am-i-hung-up-on-the-term-fullstack
/2021/10/04/three-ways-to-deploy-a-serverless-graphql-api /three-ways-to-deploy-a-serverless-graphql-api
/2021/09/27/a-first-look-at-pulumi /a-first-look-at-pulumi
/2021/09/20/a-first-look-at-graphql-helix /a-first-look-at-graphql-helix
/2021/09/15/deploy-a-graphql-server-with-docker-and-fly /deploy-a-graphql-server-with-docker-and-fly
/2021/09/06/a-first-look-at-aws-fargate /a-first-look-at-aws-fargate
/2021/09/02/how-to-deploy-a-docker-container-on-aws-lambda /how-to-deploy-a-docker-container-on-aws-lambda
/2021/09/02/a-first-look-at-serverless-cloud /a-first-look-at-serverless-cloud
/2021/08/25/a-first-look-at-keystonejs /a-first-look-at-keystonejs
/2021/08/08/a-first-look-at-slinkity /a-first-look-at-slinkity
/2021/08/04/a-first-look-at-fly /a-first-look-at-fly
/2021/07/20/a-first-look-at-github-actions /a-first-look-at-github-actions
/2021/07/17/a-first-look-at-postgraphile-with-railway /a-first-look-at-postgraphile-with-railway
/2021/07/12/a-first-look-at-docker /a-first-look-at-docker
/2021/07/11/a-first-look-at-azure-functions /a-first-look-at-azure-functions
/2021/06/10/a-first-look-at-serverless-framework /a-first-look-at-serverless-framework
/2021/06/08/a-first-look-at-react-18-with-vite-and-netlify /a-first-look-at-react-18-with-vite-and-netlify
/2021/05/28/edge-graphql-with-cloudflare-workers /edge-graphql-with-cloudflare-workers
/2021/05/14/a-first-look-at-architect /a-first-look-at-architect
/2021/05/09/a-first-look-at-amplify-with-vite /a-first-look-at-amplify-with-vite
/2021/05/06/a-first-look-at-remix /a-first-look-at-remix
/2021/05/03/a-first-look-at-cloudflare-workers /a-first-look-at-cloudflare-workers
/2021/05/02/a-first-look-at-aws-sam /a-first-look-at-aws-sam
/2021/04/30/a-first-look-at-aws-cdk /a-first-look-at-aws-cdk
/2021/04/21/can-I-use-mongodb-with-prisma-yet /can-I-use-mongodb-with-prisma-yet
/2021/04/08/a-first-look-at-cloudflare-pages /a-first-look-at-cloudflare-pages
/2021/03/25/query-rick-and-morty-graphql-api /query-rick-and-morty-graphql-api
/2021/03/21/generics /generics
/2021/03/12/notes-on-es-modules-with-chantastic /notes-on-es-modules-with-chantastic
/2021/03/05/a-first-look-at-vite /a-first-look-at-vite
/2020/12/12/semantic-github /semantic-github
/2020/11/10/graphql-caching /graphql-caching
/2020/11/06/a-first-look-at-sveltekit /a-first-look-at-sveltekit
/2020/07/24/why-do-so-many-musicians-become-programmers /why-do-so-many-musicians-become-programmers
```

## Deploy

[Astro docs](https://docs.astro.build/en/guides/deploy/) has a great section and breakdown of how to deploy your own Astro site on various platforms and their idiosyncrasies. By default the site will be built (see Commands section above) to a `/dist` directory.

### Cloudflare

Site is deployed on Cloudflare Pages and uses [Cloudflare Redirects](https://developers.cloudflare.com/pages/platform/redirects/).

## Acknowledgment

This theme is inspired by [Hexo Theme Cactus](https://github.com/probberechts/hexo-theme-cactus). Licensed under the MIT License, Copyright © 2022.