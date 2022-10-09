export const styles = {
  baseLayoutContainer: "sm:grid sm:grid-cols-[3fr_1fr] sm:gap-x-10 sm:items-start",
  title: "title mb-2",
  dateAndTags: "flex flex-col sm:gap-y-2 md:flex-row md:items-center md:gap-y-0 md:divide-x md:divide-textColor",
  postDate: "pr-2",
  tagsContainer: "flex items-center md:pl-2",
  postTagsList: "flex items-center ml-1 gap-x-2",
  tagLink: "inline-block cactus-link",
  blogPostContent: "mt-8 prose prose-sm prose-cactus prose-headings:font-semibold prose-headings:before:text-accent prose-headings:before:absolute prose-headings:before:-ml-4 prose-th:before:content-none",
  tocAside: "invisible hidden text-right sm:sticky sm:top-20 sm:block sm:visible",
  tocHeader: "font-semibold",
  tocUnorderedList: "mt-4 text-xs space-y-2",
  tocHeading: "line-clamp-2 hover:text-accent",
  postPreviewTitle: "inline-block cactus-link line-clamp-1",
  postPreviewDate: "min-w-[120px] text-gray-500",
  postPreviewDesc: "block italic line-clamp-3 mt-4 mb-4",
  coverImage: "mt-4"
}