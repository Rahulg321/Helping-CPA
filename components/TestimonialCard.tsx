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
  review: KeyTextField | string;
};

const TestimonialCard = ({ name, review }: TestimonialCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="flex gap-2">
          <TestimonialStar />
          <TestimonialStar />
          <TestimonialStar />
          <TestimonialStar />
          <TestimonialStar />
        </div>
      </CardHeader>
      <CardContent>
        <p>{review}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

export function TestimonialStar() {
  return (
    <div className="text-3xl text-yellow-500">
      <IoMdStar />
    </div>
  );
}
