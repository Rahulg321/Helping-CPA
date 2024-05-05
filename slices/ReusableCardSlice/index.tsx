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
      className="block-space-large bg-lightG"
    >
      <div className="big-container">
        <div className="mb-8 text-center">
          <h2 className="mb-4">{slice.primary.heading}</h2>
          <p>{slice.primary.tagline}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {slice.items.map((e, index) => {
            return (
              <ActionCard
                key={index}
                heading={e.card_heading}
                content={e.card_content}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReusableCardSlice;
