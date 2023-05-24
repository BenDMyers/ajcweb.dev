export const MENU_LINKS = [
	{ title: "Home", path: "/" },
	{ title: "About", path: "/about" },
	{ title: "Blog", path: "/posts" },
  { title: "Archive", path: "/archive" },
]

export const SOCIAL_LINKS = {
	github: "https://github.com/ajcwebdev",
	twitter: "https://twitter.com/ajcwebdev",
}

interface IElement {
	readonly as?: keyof HTMLElementTagNameMap;
}

interface PaginationLink {
	url: string;
	text?: string;
	srLabel?: string;
}

type SiteMeta = {
	title: string
	description?: string
	image?: string
  ogImage?: string | undefined
	canonicalURL?: string
	publishDate?: string | undefined
}

export type { IElement, PaginationLink, SiteMeta }