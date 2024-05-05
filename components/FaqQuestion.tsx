import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { KeyTextField } from "@prismicio/client";

type FaqQuestionProps = {
  id: string;
  trigger: string | KeyTextField;
  content: string | KeyTextField;
};

const FaqQuestion = ({ id, trigger, content }: FaqQuestionProps) => {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="text-xl">{trigger}</AccordionTrigger>
      <AccordionContent className="text-xl">{content}</AccordionContent>
    </AccordionItem>
  );
};

export default FaqQuestion;
