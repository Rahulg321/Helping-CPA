import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `ReusuableContent`.
 */
export type ReusuableContentProps =
  SliceComponentProps<Content.ReusuableContentSlice>;

/**
 * Component for "ReusuableContent" Slices.
 */
const ReusuableContent = ({ slice }: ReusuableContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-large"
    >
      <div className="big-container">
        <div className="narrow-container mb-6 text-pretty">
          <h2 className="mb-4 text-center md:mb-6">{slice.primary.heading}</h2>
          <span className="block text-center md:text-lg">
            {slice.primary.tagline}
          </span>
        </div>

        {slice.items.map((e, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "mb-12 flex flex-col items-center gap-4 md:flex-row md:even:flex-row-reverse",
              )}
            >
              <div className="p-4 md:p-6 lg:p-8">
                <PrismicNextImage
                  field={e.featuredimage}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2">{e.image_heading}</h3>
                <div className="prose prose-sm prose-p:text-sm md:prose-p:text-lg">
                  <PrismicRichText field={e.image_content} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReusuableContent;
