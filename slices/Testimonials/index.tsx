import TestimonialCard from "@/components/TestimonialCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <div className="mb-8 text-center">
          <h1 className="mb-4">{slice.primary.heading}</h1>
          <p>{slice.primary.tagline}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
