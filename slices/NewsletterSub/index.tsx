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
      <div className="big-container border-l-4 border-l-mainY px-4 py-8 text-white">
        <span className="mb-2 text-xl font-semibold">PARO NEWSLETTER</span>
        <h2 className="mb-3">Get the Latest News & Insights from Paro</h2>
        <p className="mb-2">
          Subscribe to get tips, success stories, business resources and more.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
};

export default NewsletterSub;
