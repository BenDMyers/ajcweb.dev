import type { MDXInstance, Page } from "astro"

interface IElement {
	readonly as?: keyof HTMLElementTagNameMap
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
	IElement,
	Post,
}

// export function sortMDByDate(posts: CollectionEntry<"post">[] = []) {
// 	return posts.sort(
// 		(a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
// 	)
// }

export function sortMDByDate(posts: MDXInstance<Post>[] = []) {
	return posts.sort(
		(a, b) =>
			new Date(b.frontmatter.publishDate).valueOf() -
			new Date(a.frontmatter.publishDate).valueOf()
	)
}

// export function getFormattedDate(
// 	date: string | number | Date,
// 	options?: Intl.DateTimeFormatOptions
// ) {
// 	if (typeof options !== "undefined") {
// 		return new Date(date).toLocaleDateString(siteConfig.date.locale, {
// 			...(siteConfig.date.options as Intl.DateTimeFormatOptions),
// 			...options,
// 		})
// 	}
// 	return dateFormat.format(new Date(date))
// }

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