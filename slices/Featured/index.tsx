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
      <div className="flex flex-col items-center gap-8 rounded-lg bg-mainG p-8 text-white md:p-12 lg:flex-row lg:justify-between">
        <div className="space-y-2">
          <h3 className="">{slice.primary.heading}</h3>
          <p className="text-sm md:text-base">{slice.primary.tagline}</p>
        </div>
        <div>
          <PrismicNextLink
            field={slice.primary.button_link}
            className="rounded-md bg-mainY p-4 text-sm lg:text-base"
          >
            {slice.primary.button_label}
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default Featured;
