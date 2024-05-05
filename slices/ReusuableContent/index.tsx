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
      className="block-space"
    >
      <div className="big-container">
        <h1 className="mb-4">{slice.primary.heading}</h1>
        <p className="mb-8">{slice.primary.tagline}</p>

        {slice.items.map((e, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "mb-12 flex flex-col items-center even:flex-row-reverse md:flex-row",
                {},
              )}
            >
              <div className="aspect-h-1 aspect-w-4 relative basis-1/2">
                <PrismicNextImage
                  field={e.featuredimage}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="basis-1/2">
                <h3 className="mb-2">{e.image_heading}</h3>
                <div className="prose">
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
