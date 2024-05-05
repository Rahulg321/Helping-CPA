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
      className="bg-mainB block-space text-white"
    >
      <div className="big-container">
        <h1>{slice.primary.heading}</h1>
        <span>{slice.primary.tagline}</span>
      </div>
    </section>
  );
};

export default Hero;
