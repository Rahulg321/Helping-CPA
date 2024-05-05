import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FullWidthFeatured`.
 */
export type FullWidthFeaturedProps =
  SliceComponentProps<Content.FullWidthFeaturedSlice>;

/**
 * Component for "FullWidthFeatured" Slices.
 */
const FullWidthFeatured = ({ slice }: FullWidthFeaturedProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-lightB text-white"
    >
      <div className="big-container flex flex-col gap-4 md:flex-row">
        <div>
          <h3 className="mb-2 uppercase">{slice.primary.heading}</h3>
          <p>{slice.primary.tagline}</p>
        </div>
        <PrismicNextLink
          field={slice.primary.button_link}
          className="rounded-md bg-mainG px-4 py-6 uppercase"
        >
          {slice.primary.button_label}
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default FullWidthFeatured;
