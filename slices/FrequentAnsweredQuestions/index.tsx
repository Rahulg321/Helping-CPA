import FaqQuestion from "@/components/FaqQuestion";
import { Accordion } from "@/components/ui/accordion";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FrequentAnsweredQuestions`.
 */
export type FrequentAnsweredQuestionsProps =
  SliceComponentProps<Content.FrequentAnsweredQuestionsSlice>;

/**
 * Component for "FrequentAnsweredQuestions" Slices.
 */
const FrequentAnsweredQuestions = ({
  slice,
}: FrequentAnsweredQuestionsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="narrow-container">
        <h1 className="mb-4 text-center">Faq</h1>
        <Accordion type="single" collapsible>
          {slice.items.map((e, index) => {
            return (
              <FaqQuestion
                id={`${e.question}`}
                trigger={e.question}
                content={e.answer}
              />
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FrequentAnsweredQuestions;
