"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

type HeaderProps = {
  classname?: string;
};

const mobileNav = [
  { navlink: "/", navlabel: "Home" },
  { navlink: "/practice-areas", navlabel: "Practice Areas" },
  { navlink: "/our-firm", navlabel: "Our Firm" },
  { navlink: "/team-members", navlabel: "Team" },
  { navlink: "/blogs", navlabel: "Blog" },
  { navlink: "/contact", navlabel: "Contact" },
];

const desktopNav = [{ navlink: "/services", navlabel: "Services" }];

const Header = ({ classname }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className={clsx(
          " sticky top-0 z-50 bg-mainB px-2 py-2 text-white md:px-4 lg:px-12",
          classname,
        )}
      >
        <nav aria-label="Main-navigation">
          <ul className="flex flex-col  justify-between md:m-4 md:flex-row md:items-center md:rounded-xl">
            <div className="flex items-center justify-between">
              <NameLogo />
              <button
                aria-label="Open menu"
                className="block text-2xl text-black dark:text-white md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <MdMenu />
              </button>
            </div>
            <div
              className={clsx(
                "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-black pr-4 pt-14 text-white  transition-transform duration-300 ease-in-out md:hidden",
                isOpen ? "translate-x-0" : "translate-x-[100%]",
              )}
            >
              <button
                aria-label="Close menu"
                className="fixed right-4 top-3 block p-2 text-2xl text-white md:hidden "
                onClick={() => setIsOpen(false)}
              >
                <MdClose />
              </button>
              {mobileNav.map((item, index) => {
                return (
                  <Link
                    href={item.navlink}
                    key={index}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={clsx(
                      "",
                      pathname === item.navlink ? "underline" : "",
                    )}
                  >
                    {item.navlabel}
                  </Link>
                );
              })}
            </div>
            <DesktopMenu />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

function NameLogo({}: {}) {
  return (
    <div className="">
      <Link
        href="/"
        aria-label="Home page"
        className="text-mainC text-3xl font-bold md:text-4xl"
      >
        Helping CPAs
      </Link>
    </div>
  );
}

function DesktopMenu() {
  const pathname = usePathname();
  return (
    <div className="hidden gap-8 md:flex md:items-center">
      {desktopNav.map((item, index) => {
        return (
          <Link
            href={item.navlink}
            key={index}
            className={clsx(
              "hover:text-mainC hover:decoration-mainC font-bold transition  hover:underline hover:decoration-4 hover:underline-offset-8",
              pathname === item.navlink
                ? "text-mainC underline decoration-4 underline-offset-8"
                : "",
            )}
          >
            {item.navlabel}
          </Link>
        );
      })}
    </div>
  );
}
