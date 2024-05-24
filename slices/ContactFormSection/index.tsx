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
        <div className="col-span-1 grid gap-4 lg:grid-cols-3">
          <div className="col-span-2">
            <div className="mb-4">
              <h2 className="text-center">Contact Form</h2>
            </div>
            <ContactForm />
          </div>
          <div className="rounded-2xl bg-lightG p-4">
            <h2>Our Newsletter</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quaerat quos accusamus iste consequatur soluta dolorem
              iusto facilis exercitationem similique blanditiis asperiores
              alias, amet voluptas dicta voluptatibus ullam ad ipsum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
