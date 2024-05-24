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
    <Card className="shadow-xl">
      <CardHeader>
        <div className="flex gap-4 md:gap-6">
          <div className="rounded-full bg-red-300 p-4 md:p-6">
            <span className="font-semibold text-white">GK</span>
          </div>
          <div className="space-y-2">
            <CardTitle>{name}</CardTitle>
            <div className="flex gap-2">
              <TestimonialStar />
              <TestimonialStar />
              <TestimonialStar />
              <TestimonialStar />
              <TestimonialStar />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>{review}</CardContent>
    </Card>
  );
};

export default TestimonialCard;

export function TestimonialStar() {
  return (
    <div className="text-xl text-yellow-500 md:text-3xl">
      <IoMdStar />
    </div>
  );
}
