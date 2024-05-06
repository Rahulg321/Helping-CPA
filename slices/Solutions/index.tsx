"use client";

import SolutionCard from "@/components/SolutionCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Item } from "@radix-ui/react-accordion";
import clsx from "clsx";
import { useState } from "react";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaChartBar } from "react-icons/fa";
import { PiRoadHorizonFill } from "react-icons/pi";

/**
 * Props for `Solutions`.
 */
export type SolutionsProps = SliceComponentProps<Content.SolutionsSlice>;

const selectCards = [
  {
    id: "business",
    heading: "For Businesses",
    tagline:
      "Get more hands on deck to meet tax and audit demand, prevent quality degradation and reduce turnover.",
  },
  {
    id: "accounting",
    heading: "For Accounting Firms",
    tagline:
      "Get more hands on deck to meet tax and audit demand, prevent quality degradation and reduce turnover.",
  },
];

const businessCards = [
  {
    icon: <HiOutlineClipboardDocumentList />,
    heading: "Maintain Accuracy and Compliance",
    tagline:
      "Ensure audit-ready books and optimize your tax strategy for better savings.",
  },
  {
    icon: <FaChartBar />,
    heading: "Keep pace with Growth",
    tagline:
      "Get an expert evaluation to bring your legacy systems and operations up to speed with rapid growth.",
  },
  {
    icon: <PiRoadHorizonFill />,
    heading: "Roadmap for Growth",
    tagline:
      "Entering a new market? Eyeing an acquisition? Bring on expertise from your industry.",
  },
  {
    icon: <RiLightbulbFlashLine />,
    heading: "Strengthen Decision Making",
    tagline:
      "Boost your forecasting, reporting and analytics to improve cash flow and identify risk or opportunity.",
  },
];

const accoutingCards = [
  {
    icon: <SlEnergy />,
    heading: "Productivity and Efficiency",
    tagline:
      "Gain project management support or internal advisory to improve procedures and operations.",
  },
  {
    icon: <FaPeopleGroup />,
    heading: "Fill Skill and Capacity Gaps",
    tagline:
      "Cover a sudden vacancy or meet niche and complex client advisory services.",
  },
  {
    icon: <PiRoadHorizonFill />,
    heading: "Roadmap for Growth",
    tagline:
      "Entering a new market? Eyeing an acquisition? Bring on expertise from your industry.",
  },
  {
    icon: <RiLightbulbFlashLine />,
    heading: "Strengthen Decision Making",
    tagline:
      "Boost your forecasting, reporting and analytics to improve cash flow and identify risk or opportunity.",
  },
];

const Solutions = ({ slice }: SolutionsProps): JSX.Element => {
  let selectedCards = [];
  const [cards, setCards] = useState("business");
  if (cards === "business") {
    selectedCards = businessCards;
  } else {
    selectedCards = accoutingCards;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <h1 className="mb-4">{slice.primary.heading}</h1>

        <div className="grid grid-cols-3">
          <div className="col-span-1">
            {selectCards.map((item, index) => {
              return (
                <div
                  className={clsx("mb-4 cursor-pointer p-4", {
                    "border-l-4 border-mainG": item.id === cards,
                    "text-muted-foreground": item.id !== cards,
                  })}
                  key={index}
                  onClick={(e) => {
                    setCards(item.id);
                  }}
                >
                  <h3>{item.heading}</h3>
                  <p>{item.tagline}</p>
                </div>
              );
            })}
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-4 p-4">
            {selectedCards.map((e, index) => {
              return (
                <SolutionCard
                  icon={e.icon}
                  heading={e.heading}
                  content={e.tagline}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
