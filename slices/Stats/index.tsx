import StatCircle from "@/components/StatCircle";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Stats`.
 */
export type StatsProps = SliceComponentProps<Content.StatsSlice>;

/**
 * Component for "Stats" Slices.
 */
const Stats = ({ slice }: StatsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-large bg-mainB"
    >
      <div className="big-container text-white">
        <div className="mb-8 text-center">
          <h1 className="mb-4">{slice.primary.heading}</h1>
          <p>{slice.primary.tagline}</p>
        </div>
        <div className="mb-12 flex flex-col gap-4 md:flex-row">
          {slice.items.map((e, index) => {
            return (
              <StatCircle
                statName={e.circle_heading}
                statNumber={e.circle_number}
                classname="basis-1/2 flex-wrap"
              />
            );
          })}
        </div>
        <div className="text-center">
          <PrismicNextLink
            field={slice.primary.button_link}
            className="rounded-md bg-mainG px-4 py-4 uppercase"
          >
            {slice.primary.button_label}
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default Stats;
