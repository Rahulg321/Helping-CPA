import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Book Keeping",
    href: "/services/book-keeping",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Year End Financials",
    href: "/services/year-end-financials",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Payroll Management",
    href: "/services/payroll-management",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Preparation of State Returns",
    href: "/services/preparation-of-state-returns",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Preparation of Federal Returns",
    href: "/services/preparation-of-federal-returns",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

const NavigationHeader = () => {
  return (
    <NavigationMenu className="bg-mainB">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-mainB text-lg hover:bg-gray-500 hover:text-white">
            <Link href="/services">Services</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationHeader;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
