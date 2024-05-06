import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

const BlogCard = ({ post }: { post: Content.BlogpostDocument }) => {
  return (
    <article>
      <div className="aspect-h-1 aspect-w-1 relative">
        <PrismicNextImage
          field={post.data.featured_image}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3>{post.data.name}</h3>
        {post.data.date_published}
      </div>
    </article>
  );
};

export default BlogCard;
