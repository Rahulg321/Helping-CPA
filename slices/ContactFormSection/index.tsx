import ContactForm from "@/components/ContactForm";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactFormSection`.
 */
export type ContactFormSectionProps =
  SliceComponentProps<Content.ContactFormSectionSlice>;

/**
 * Component for "ContactFormSection" Slices.
 */
const ContactFormSection = ({
  slice,
}: ContactFormSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <div className="mb-4">
          <h2 className="text-center">Contact Form</h2>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactFormSection;
