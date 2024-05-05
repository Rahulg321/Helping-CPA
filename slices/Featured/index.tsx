import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Featured`.
 */
export type FeaturedProps = SliceComponentProps<Content.FeaturedSlice>;

/**
 * Component for "Featured" Slices.
 */
const Featured = ({ slice }: FeaturedProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div className="bg-mainG rounded-lg px-14 py-12 items-center text-white flex justify-between">
        <div>
          <h2 className="mb-4">{slice.primary.heading}</h2>
          <p>{slice.primary.tagline}</p>
        </div>
        <div>
          <PrismicNextLink
            field={slice.primary.button_link}
            className="px-6 py-4 bg-mainY"
          >
            {slice.primary.button_label}
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default Featured;
