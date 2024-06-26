import BlogCard from "@/components/BlogCard";
import BlogPostsIndex from "@/components/BlogPostsIndex";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `BlogIndex`.
 */
export type BlogIndexProps = SliceComponentProps<Content.BlogIndexSlice>;

/**
 * Component for "BlogIndex" Slices.
 */
const BlogIndex = ({ slice }: BlogIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </div>
          }
        >
          <BlogPostsIndex />
        </Suspense>
      </div>
    </section>
  );
};

export default BlogIndex;
