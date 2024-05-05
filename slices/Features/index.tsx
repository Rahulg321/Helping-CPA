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
          <FeatureCard
            icon={<PiLightningAFill />}
            heading="Pre-vetted, U.S.-based Experts"
            description="Only 2% of candidates pass our strict six-step vetting process. You’ll never waste time considering people who aren’t up to the job."
          />
          <FeatureCard
            icon={<IoIosRibbon />}
            heading="Lightning-fast Matching"
            description="Avoid weeks sifting through resumes and working out arrangements. Just tell us what you need, and we’ll find the exact right talent and terms."
          />
          <FeatureCard
            icon={<FaHandPointer />}
            heading="“Plug and Play” Onboarding"
            description="Paro experts know your software and the latest industry advancements, so they can jump in with minimal training to deliver immediate value."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
