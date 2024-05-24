import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { GrDocumentText } from "react-icons/gr";

/**
 * Props for `QuoteContent`.
 */
export type QuoteContentProps = SliceComponentProps<Content.QuoteContentSlice>;

/**
 * Component for "QuoteContent" Slices.
 */
const QuoteContent = ({ slice }: QuoteContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-large bg-[#F1F5F9]"
    >
      <div className="big-container">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-6">
          <div className="">
            <span className="mb-4 flex items-center gap-4 text-xl text-mainG">
              <GrDocumentText />
              {slice.primary.tag}
            </span>
            <h3 className="mb-4">{slice.primary.heading}</h3>
            <p>{slice.primary.tagline}</p>
          </div>
          <div className="p-4">
            <div className="border-b-2 border-t-2 border-mainG py-4">
              <blockquote className="text-lg">{slice.primary.quote}</blockquote>
              <span>{slice.primary.author}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteContent;
