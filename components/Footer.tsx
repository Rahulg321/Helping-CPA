import { footerLinks } from "@/lib/Navigation";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="block-space-large bg-mainB text-white">
      <div className="big-container grid grid-cols-1  gap-6 lg:grid-cols-3 ">
        <div>
          <h3 className="mb-2">Helping CPAs</h3>
          <span className="text-sm md:text-lg">
            343 W Erie St, Suite 600 Chicago,
            <br /> IL 60654 <br /> Call us: 312-651-4841 ©2024, Paro, Inc.
          </span>
        </div>
        <div className="space-y-2">
          {footerLinks.map((e, index) => {
            return (
              <Link
                href={e.navlink}
                key={index}
                className="block text-sm md:text-lg"
              >
                {e.navlabel}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-4">
          <div>
            <SocialMediaIcon icon={<BsTwitterX />} />
          </div>
          <div>
            <SocialMediaIcon icon={<FaLinkedin />} />
          </div>
          <div>
            <SocialMediaIcon icon={<FaInstagram />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

type SocialMediaIconProps = {
  icon: any;
  link?: any;
};

function SocialMediaIcon({ icon }: SocialMediaIconProps) {
  return (
    <div className="cursor-pointer rounded-full border p-4 text-xl text-white transition hover:text-yellow-400 md:text-2xl lg:text-3xl">
      {icon}
    </div>
  );
}
