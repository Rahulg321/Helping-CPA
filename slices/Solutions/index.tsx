import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Solutions`.
 */
export type SolutionsProps = SliceComponentProps<Content.SolutionsSlice>;

/**
 * Component for "Solutions" Slices.
 */
const Solutions = ({ slice }: SolutionsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <h1>{slice.primary.heading}</h1>
      </div>
    </section>
  );
};

export default Solutions;
