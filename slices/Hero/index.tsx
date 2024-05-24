import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-large bg-vercel min-h-[70dvh] bg-mainB text-white"
    >
      <div className="narrow-container">
        <div className="text-pretty">
          <h1 className="text-5xl font-semibold leading-snug">
            {slice.primary.heading}
          </h1>
          <p className="text-xl">{slice.primary.tagline}</p>
          <button className="mt-6 border-4 border-mainG p-4 text-mainG text-white">
            Schedule A Consultations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
