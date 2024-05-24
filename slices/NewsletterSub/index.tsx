import NewsletterForm from "@/components/NewsletterForm";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NewsletterSub`.
 */
export type NewsletterSubProps =
  SliceComponentProps<Content.NewsletterSubSlice>;

/**
 * Component for "NewsletterSub" Slices.
 */
const NewsletterSub = ({ slice }: NewsletterSubProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-mainG"
    >
      <div className="big-container space-y-4 border-l-4 border-l-mainY pl-4 text-white">
        <span className=" text-lg font-semibold">PARO NEWSLETTER</span>
        <h2 className="">Get the Latest News & Insights from Paro</h2>
        <p className="">
          Subscribe to get tips, success stories, business resources and more.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
};

export default NewsletterSub;
