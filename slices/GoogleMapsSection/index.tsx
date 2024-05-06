import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GoogleMapsSection`.
 */
export type GoogleMapsSectionProps =
  SliceComponentProps<Content.GoogleMapsSectionSlice>;

/**
 * Component for "GoogleMapsSection" Slices.
 */
const GoogleMapsSection = ({ slice }: GoogleMapsSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686437.8600483006!2d8.768905970962411!3d48.88729411114551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f044c0fdf53a9%3A0x11d25a409387960!2sBavaria%2C%20Germany!5e0!3m2!1sen!2sin!4v1714993727336!5m2!1sen!2sin"
          width="800"
          height="600"
          loading="lazy"
          className="w-full rounded-2xl"
        ></iframe>
      </div>
    </section>
  );
};

export default GoogleMapsSection;
