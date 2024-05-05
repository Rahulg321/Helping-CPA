import ActionCard from "@/components/ActionCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ReusableCardSlice`.
 */
export type ReusableCardSliceProps =
  SliceComponentProps<Content.ReusableCardSliceSlice>;

/**
 * Component for "ReusableCardSlice" Slices.
 */
const ReusableCardSlice = ({ slice }: ReusableCardSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <h2>{slice.primary.heading}</h2>
        <p>{slice.primary.tagline}</p>

        {slice.items.map((e, index) => {
          return <ActionCard key={index} />;
        })}
      </div>
    </section>
  );
};

export default ReusableCardSlice;
