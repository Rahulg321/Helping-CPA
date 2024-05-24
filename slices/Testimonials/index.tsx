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
        <div className="mb-10 space-y-2 text-center">
          <h2 className="">{slice.primary.heading}</h2>
          <p>{slice.primary.tagline}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {slice.items.map((e, index) => {
            return (
              <TestimonialCard name={e.name} review={e.review} key={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
