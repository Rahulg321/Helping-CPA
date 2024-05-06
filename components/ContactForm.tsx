import React from "react";

const ContactForm = () => {
  return (
    <div className="">
      <form action="" className="grid grid-cols-2 gap-8">
        <input
          type="email"
          className="rounded-full border-none bg-lightG p-4 text-xl"
          placeholder="email"
        />
        <input
          type="text"
          className="rounded-full border-none bg-lightG p-4 text-xl"
          placeholder="phone number"
        />
        <input
          type="text"
          className="col-span-2 rounded-full border-none bg-lightG p-4 text-xl"
          placeholder="name"
        />

        <textarea
          name=""
          id=""
          cols={50}
          rows={5}
          className="col-span-2 rounded-3xl border-none bg-lightG p-4 text-xl"
          placeholder="Your Message"
        ></textarea>

        <button
          type="submit"
          className="w-fit rounded-2xl bg-mainY px-12 py-4 text-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
