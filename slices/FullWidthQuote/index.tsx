import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FullWidthQuote`.
 */
export type FullWidthQuoteProps =
  SliceComponentProps<Content.FullWidthQuoteSlice>;

/**
 * Component for "FullWidthQuote" Slices.
 */
const FullWidthQuote = ({ slice }: FullWidthQuoteProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="narrow-container">
        <blockquote className="my-4 border-l-4 border-gray-700 bg-gray-100 p-4 italic">
          <p className="text-gray-800">{slice.primary.quote}</p>
          <footer className="mt-2 font-semibold text-gray-600">
            {slice.primary.author}
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default FullWidthQuote;
