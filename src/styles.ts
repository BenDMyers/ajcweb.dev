// src/index.astro
export const p = "mb-4"
export const header = "mb-6 title"
export const recentPosts = "mb-4 text-xl title"
export const indexPostPreviewList = "flex flex-wrap items-center gap-x-2 [&_q]:w-full"
export const unorderedList24 = "space-y-24"

// src/pages/about/index.astro
export const aboutHeader = "title"
export const aboutHeader2 = "text-xl title"
export const aboutHeader3 = "my-4 text-xl title"
export const link = "inline-block cactus-link"
export const listNoBullets = "my-4 space-y-4 sm:space-y-2"
export const listWithBullets = "my-4 space-y-4 sm:space-y-2 list-disc list-inside"

// src/components/BlogPostPreview.astro
export const postPreviewTitle = "inline-block cactus-link line-clamp-1 text-xl"
export const postPreviewDate = "min-w-[120px] text-gray-500 text-xl"
export const postPreviewDesc = "block italic line-clamp-3 mt-4 mb-4 text-lg"
export const coverImage = "mt-4"

// src/layouts/Base.astro
export const footerContainer = "flex flex-wrap items-center sm:items-center gap-x-4"
export const footerText = "text-base"
export const footerList = "flex items-center flex-1 sm:flex-initial"
export const footerSVG = "w-6 h-6"
export const span = "sr-only"
export const skip = "focus:fixed focus:top-1.5 focus:left-1 sr-only focus:not-sr-only"
export const icons = "inline-block p-2 sm:hover:text-link"

// src/layouts/BlogPost.astro
export const baseLayoutContainer = "sm:grid sm:grid-cols-[3fr_1fr] sm:gap-x-10 sm:items-start"
export const postTitle = "title mb-2"
export const dateAndTags = "flex flex-col sm:gap-y-2 md:flex-row md:items-center md:gap-y-0 md:divide-x md:divide-textColor"
export const postPreviewList = "flex flex-wrap items-center gap-x-2 [&_q]:w-full mb-8"
export const postDate = "pr-2"
export const tagsContainer = "flex items-center md:pl-2"
export const postTagsList = "flex items-center ml-1 gap-x-2"
export const blogPostContent = "mt-8 prose prose-sm prose-cactus prose-headings:font-semibold prose-headings:before:text-accent prose-headings:before:absolute prose-headings:before:-ml-4 prose-th:before:content-none"
export const tocAside = "invisible hidden text-right sm:sticky sm:top-20 sm:block sm:visible"
export const tocHeader = "font-semibold"
export const tocUnorderedList = "mt-4 text-xs space-y-2"
export const tocHeading = "line-clamp-2 hover:text-accent"