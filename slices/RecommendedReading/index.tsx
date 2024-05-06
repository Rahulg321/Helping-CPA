import { TestimonialStar } from "@/components/TestimonialCard";
import { Content, KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { GrArticle } from "react-icons/gr";

/**
 * Props for `RecommendedReading`.
 */
export type RecommendedReadingProps =
  SliceComponentProps<Content.RecommendedReadingSlice>;

/**
 * Component for "RecommendedReading" Slices.
 */
const RecommendedReading = ({
  slice,
}: RecommendedReadingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <div className="mb-12 flex items-center justify-center gap-2">
          <div>
            <TestimonialStar />
          </div>
          <h2>Recommended Reading</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {slice.items.map((e, index) => {
            return (
              <div className="p-4">
                <FeaturedArticle
                  heading={e.article_heading}
                  des={e.article_description}
                  articleLink={e.article_link}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecommendedReading;

type FeaturedArticleProps = {
  heading: KeyTextField;
  des: KeyTextField;
  articleLink: LinkField;
};

function FeaturedArticle({ heading, des, articleLink }: FeaturedArticleProps) {
  return (
    <article className="">
      <div className="mb-4 flex items-center gap-4">
        <div className="text-4xl text-mainG">
          <GrArticle />
        </div>
        <span className="text-2xl tracking-wide ">CASE STUDY</span>
      </div>
      <div>
        <h4 className="mb-2">{heading}</h4>
        <p className="mb-2">{des}</p>
        <PrismicNextLink field={articleLink} className="text-xl text-mainG">
          Read More
        </PrismicNextLink>
      </div>
    </article>
  );
}
