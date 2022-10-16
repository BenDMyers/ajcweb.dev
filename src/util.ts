import type { MDXInstance, Page } from "astro";

type Theme = "light" | "dark";

interface IElement {
	readonly as?: keyof HTMLElementTagNameMap;
}

type SiteMeta = {
	title: string;
	description?: string;
	image?: string;
};

interface Post {
	title: string;
	description: string;
	publishDate?: Date;
	image: string;
	tags?: string[];
}

export type {
	MDXInstance,
	Page,
	Theme,
	IElement,
	SiteMeta,
	Post,
};

export function sortMDByDate(posts: MDXInstance<Post>[] = []) {
	return posts.sort(
		(a, b) =>
			new Date(b.frontmatter.publishDate).valueOf() -
			new Date(a.frontmatter.publishDate).valueOf()
	);
}

// This function expects the @arg posts to be sorted by sortMDByDate()
export function getPreviousAndNextPosts(
	currentSlug: string,
	posts: MDXInstance<Post>[] = []
) {
	const index = posts.findIndex(({ url }) => url === currentSlug);
	return {
		prev: posts[index + 1] ?? null,
		next: posts[index - 1] ?? null,
	};
}

export function getAllTags(posts: MDXInstance<Post>[] = []) {
	const allTags = new Set<string>();
	posts.forEach((post) => {
		post.frontmatter.tags?.map((tag) => allTags.add(tag.toLowerCase()));
	});
	return [...allTags];
}

export function getAllTagsWithCount(posts: MDXInstance<Post>[] = []): {
	[key: string]: number;
} {
	return posts.reduce((prev, post) => {
		const currTags = { ...prev };
		post.frontmatter.tags?.forEach(function (tag) {
			currTags[tag] = (currTags[tag] || 0) + 1;
		});
		return currTags;
	}, {});
}

export function elementHasClass(element: HTMLElement, className: string) {
	return element.classList.contains(className);
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
	};
	return new Intl.DateTimeFormat(locale, formatOptions).format(date);
}

const siteMeta = {
  title: "ajcwebdev",
  description: "Web developer, writer, speaker, and advocate",
  lang: "en-US",
  ogLocale: "en_US",
  githubUrl: "https://github.com/ajcwebdev/ajcweb.dev",
  themeColorLight: "#fafafa",
  themeColorDark: "#1d1f21",
}

export default siteMeta