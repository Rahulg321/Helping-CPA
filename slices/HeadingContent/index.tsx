import RichTextComponent from "@/components/RichTextComponent";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `HeadingContent`.
 */
export type HeadingContentProps =
  SliceComponentProps<Content.HeadingContentSlice>;

/**
 * Component for "HeadingContent" Slices.
 */
const HeadingContent = ({ slice }: HeadingContentProps): JSX.Element => {
  const darkBackground = slice.primary.dark_background;
  const smallWidth = slice.primary.small_width;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("block-space  text-white", {
        "bg-mainB": darkBackground === true,
        "big-container rounded-lg": smallWidth === true,
      })}
    >
      <div className={clsx("narrow-container", {})}>
        <h1 className="mb-12">{slice.primary.heading}</h1>
        <RichTextComponent
          content={slice.primary.content}
          classname="prose-p:text-white prose-headings:underline prose-headings:text-white "
        />
      </div>
    </section>
  );
};

export default HeadingContent;
