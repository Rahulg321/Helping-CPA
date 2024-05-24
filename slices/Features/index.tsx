import FeatureCard from "@/components/FeatureCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PiLightningAFill } from "react-icons/pi";
import { IoIosRibbon } from "react-icons/io";
import { FaHandPointer } from "react-icons/fa";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <div className="text-center">
          <h2 className="mb-4">{slice.primary.heading}</h2>
          <p>{slice.primary.tagline}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {slice.items.map((e, index) => {
            return (
              <FeatureCard
                key={index}
                icon={<PiLightningAFill />}
                heading={e.card_heading}
                description={e.card_description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
