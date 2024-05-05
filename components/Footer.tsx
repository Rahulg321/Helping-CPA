import { footerLinks } from "@/lib/Navigation";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="block-space flex justify-around bg-mainB px-8 text-white">
      <div>
        <h3 className="mb-4">Helping CPAs</h3>
        <span className="text-lg">
          343 W Erie St, Suite 600 Chicago,
          <br /> IL 60654 <br /> Call us: 312-651-4841 ©2024, Paro, Inc.
        </span>
      </div>
      <div>
        {footerLinks.map((e, index) => {
          return (
            <Link
              href={e.navlink}
              key={index}
              className="mb-4 block text-lg font-semibold"
            >
              {e.navlabel}
            </Link>
          );
        })}
      </div>
      <div>
        {footerLinks.map((e, index) => {
          return (
            <Link
              href={e.navlink}
              key={index}
              className="mb-4 block text-lg font-semibold"
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
    <div className="cursor-pointer rounded-full border p-4 text-3xl text-white transition hover:text-yellow-400">
      {icon}
    </div>
  );
}
