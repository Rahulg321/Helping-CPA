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
      <div className="big-container flex gap-4">
        <div>
          <h3 className="mb-2">Make Tax Filing Easier and Faster</h3>
          <p>
            Get matched with a seasoned tax expert today who understands your
            unique filing needs.
          </p>
        </div>
        <PrismicNextLink
          field={slice.primary.button_link}
          className="rounded-md bg-mainG px-4 py-6"
        >
          SCHEDULE A FREE CONSULTATION
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default FullWidthFeatured;
