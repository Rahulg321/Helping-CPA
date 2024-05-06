import ContactInfoCard from "@/components/ContactInfoCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

/**
 * Props for `ContactInfoSection`.
 */
export type ContactInfoSectionProps =
  SliceComponentProps<Content.ContactInfoSectionSlice>;

/**
 * Component for "ContactInfoSection" Slices.
 */
const ContactInfoSection = ({
  slice,
}: ContactInfoSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ContactInfoCard
            icon={<FaPhoneAlt />}
            cardDescription={
              " dolorem officiis ipsum ratione libero impedit neque necessitatibus perferendis dolor in commodi, blanditiis delectus iste eaque ipsa, animi pariatur?"
            }
            cardHeading={"+91 9803239930"}
            classname="bg-blue-200"
          />
          <ContactInfoCard
            icon={<MdEmail />}
            cardDescription={
              " dolorem officiis ipsum ratione libero impedit neque necessitatibus perferendi"
            }
            cardHeading={"rishab@gmail.com"}
            classname="bg-lightG"
          />
          <ContactInfoCard
            icon={<FaLocationDot />}
            cardDescription={
              " dolorem officiis ipsum ratione libero impedit neque necessitatibus perferendis dolor in commodi, blanditiis delectus iste eaque ipsa, animi pariatur?dolor in commodi, blanditiis delectus iste eaque ipsa, animi pariatur?"
            }
            cardHeading={"Ludhiana Punjab"}
            classname="bg-gray-200"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
