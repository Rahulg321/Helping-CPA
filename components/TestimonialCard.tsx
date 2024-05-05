import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { KeyTextField } from "@prismicio/client";
import { IoMdStar } from "react-icons/io";

type TestimonialCardProps = {
  name: KeyTextField | string;
  review: string;
};

const TestimonialCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Jon Snow</CardTitle>
        <CardDescription className="flex gap-2">
          <TestimonialStar />
          <TestimonialStar />
          <TestimonialStar />
          <TestimonialStar />
          <TestimonialStar />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Paro offered refreshing ideas for how to streamline our operations to
          make them more efficient. Their team was consistently helpful,
          intelligent and thoughtful.
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

function TestimonialStar() {
  return (
    <div className="text-3xl text-yellow-500">
      <IoMdStar />
    </div>
  );
}
