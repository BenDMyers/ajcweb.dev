interface SiteConfig {
  canonicalURL: string
	author: string
	title: string
	description: string
  githubUrl: string
  publishDate: string
  image: string
	lang: string
	ogLocale: string
	themeColorLight: string
	themeColorDark: string
	date: {
		locale: string | string[] | undefined
		options: Intl.DateTimeFormatOptions
	}
}

export const siteConfig: SiteConfig = {
  canonicalURL: "https://ajcwebdev.com/",
	author: "Anthony Campolo",
	title: "ajcwebdev",
	description: "Web developer, writer, speaker, and advocate. Developer Advocate at Edgio and Redwood. Host of JavaScript Jam and the FSJam Podcast.",
  githubUrl: "https://github.com/ajcwebdev/ajcweb.dev",
	publishDate: "2022-11-14",
	image: "https://github.com/ajcwebdev/social-cards/blob/main/background-html.png?raw=true",
	lang: "en-US",
	ogLocale: "en_US",
	themeColorLight: "#fafafa",
	themeColorDark: "#1d1f21",
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
}