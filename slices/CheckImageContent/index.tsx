import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { FaCheckCircle } from "react-icons/fa";

/**
 * Props for `CheckImageContent`.
 */
export type CheckImageContentProps =
  SliceComponentProps<Content.CheckImageContentSlice>;

/**
 * Component for "CheckImageContent" Slices.
 */
const CheckImageContent = ({ slice }: CheckImageContentProps): JSX.Element => {
  const rightImage = slice.primary.right_image;
  const greenBackground = slice.primary.green_background;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("block-space", {
        "bg-mainG text-white": greenBackground === true,
      })}
    >
      <div className="big-container">
        <h1></h1>
        <p></p>
        <div
          className={clsx("flex flex-col gap-4 md:flex-row", {
            "md:flex-row-reverse": rightImage === true,
          })}
        >
          <div className="aspect-h-1 aspect-w-6 relative basis-1/3">
            <PrismicNextImage
              field={slice.primary.featured_image}
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="basis-2/3 px-4 py-2">
            <span
              className={clsx(
                "mb-4 inline-block rounded-full border-4 border-mainG p-2 font-semibold",
                {
                  "border-mainY": greenBackground === true,
                },
              )}
            >
              {slice.primary.tag}
            </span>
            <h2 className="mb-4">{slice.primary.heading}</h2>
            <div
              className={clsx("prose mb-4 w-full max-w-none", {
                "prose-p:text-white": greenBackground === true,
              })}
            >
              <PrismicRichText field={slice.primary.content} />
            </div>
            <div>
              {slice.items.map((e, index) => {
                return (
                  <div key={index} className="mb-4 flex items-start gap-2">
                    <div className="text-2xl text-mainG">
                      <FaCheckCircle />
                    </div>
                    <div
                      className={clsx(
                        "prose w-full max-w-none prose-a:text-mainG",
                        {
                          "prose-p:text-white prose-ul:text-white":
                            greenBackground === true,
                        },
                      )}
                    >
                      <PrismicRichText field={e.check_content} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckImageContent;
