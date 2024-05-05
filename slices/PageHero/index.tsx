import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PageHero`.
 */
export type PageHeroProps = SliceComponentProps<Content.PageHeroSlice>;

/**
 * Component for "PageHero" Slices.
 */
const PageHero = ({ slice }: PageHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-gradient-to-r from-[#313B79] to-[#181127] text-white"
    >
      <div className="big-container">
        <div className="flex items-center">
          <div className="basis-2/3 text-balance px-6 py-4">
            <span className="tracking mb-4 block">{slice.primary.tag}</span>
            <h1 className="mb-4">{slice.primary.heading}</h1>
            <h4>{slice.primary.tagline}</h4>
          </div>
          <div className="aspect-h-1 aspect-w-4 basis-1/3">
            <PrismicNextImage
              fill
              field={slice.primary.hero_image}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
