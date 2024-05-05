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
      className="block-space-large bg-vercel bg-mainB text-white"
    >
      <div className="big-container">
        <div className="grid grid-cols-3">
          <div className="col-span-2 text-balance">
            <h1 className="mb-4 font-semibold">{slice.primary.heading}</h1>
            <span className="text-2xl">{slice.primary.tagline}</span>
            <button className="mt-4 block border-4 border-mainG px-4 py-4 text-lg text-mainG text-white">
              Schedule A Consultation
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
