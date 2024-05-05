import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const NewsletterForm = () => {
  return (
    <form className="">
      <Input
        className="mb-4 w-fit px-6 py-6 text-lg placeholder:text-gray-300"
        placeholder="johndoe@gmail.com"
      />
      <Button className="bg-mainY px-8 py-6 text-lg" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default NewsletterForm;
