import CustomButton from "@/components/CustomButton";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `ImageContent`.
 */
export type ImageContentProps = SliceComponentProps<Content.ImageContentSlice>;

/**
 * Component for "ImageContent" Slices.
 */
const ImageContent = ({ slice }: ImageContentProps): JSX.Element => {
  const darkBackground = slice.primary.dark_background;
  const needButton = slice.primary.need_button;
  const rightImage = slice.primary.right_image;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("block-space-large bg-enhanceAi text-white", {
        "bg-mainB": darkBackground === true,
      })}
    >
      <div className="big-container">
        <div
          className={clsx("flex flex-col items-center gap-12 md:flex-row", {
            "md:flex-row-reverse": rightImage === true,
          })}
        >
          <div className="basis-1/3">
            <PrismicNextImage field={slice.primary.featured_image} />
          </div>
          <div className="basis-2/3">
            <h2 className="mb-6">{slice.primary.heading}</h2>
            <div
              className={clsx(
                "prose mb-8 w-full max-w-none text-pretty prose-p:text-white",
                {
                  "prose-ul:text-white": darkBackground === true,
                },
              )}
            >
              <PrismicRichText field={slice.primary.content} />
            </div>
            <PrismicNextLink
              field={slice.primary.button_link}
              className="bg-mainG px-6 py-4"
            >
              {slice.primary.button_label}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageContent;
