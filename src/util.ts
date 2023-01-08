import type { MDXInstance, Page } from "astro"

type Theme = "light" | "dark"

interface IElement {
	readonly as?: keyof HTMLElementTagNameMap
}

type SiteMeta = {
	title: string
	description?: string
	image?: string
	canonicalURL?: string
	publishDate?: Date
}

interface Post {
	canonicalURL: string
	title: string
	description: string
	publishDate: Date
	tags?: string[]
	image: string
	layout: string
}

export type {
	MDXInstance,
	Page,
	Theme,
	IElement,
	SiteMeta,
	Post,
}

export function sortMDByDate(posts: MDXInstance<Post>[] = []) {
	return posts.sort(
		(a, b) =>
			new Date(b.frontmatter.publishDate).valueOf() -
			new Date(a.frontmatter.publishDate).valueOf()
	)
}

export function elementHasClass(element: HTMLElement, className: string) {
	return element.classList.contains(className)
}

export function getLocaleTime(
	date: number | Date,
	options: Intl.DateTimeFormatOptions = {},
	locale: string | string[] = "en-US"
) {
	const formatOptions: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "long",
		year: "numeric",
		...options,
	}
	return new Intl.DateTimeFormat(locale, formatOptions).format(date)
}

const siteMeta = {
  title: "ajcwebdev",
  description: "Web developer, writer, speaker, and advocate",
  lang: "en-US",
  ogLocale: "en_US",
	canonicalURL: "https://ajcwebdev.com",
  githubUrl: "https://github.com/ajcwebdev/ajcweb.dev",
  themeColorLight: "#fafafa",
  themeColorDark: "#1d1f21",
	publishDate: "2022-11-14",
	image: "https://github.com/ajcwebdev/social-cards/blob/main/background-html.png?raw=true",
}

export default siteMeta