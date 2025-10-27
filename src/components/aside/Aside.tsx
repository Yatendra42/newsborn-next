'use client';

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "./Aside.scss";
import PoliticsIcon from "@/assets/icons/politics";
import BusinessIcon from "@/assets/icons/business";
import TechnologyIcon from "@/assets/icons/technology";
import HealthIcon from "@/assets/icons/health";
import SportsIcon from "@/assets/icons/sports";
import ScienceIcon from "@/assets/icons/science";
import LifestyleIcon from "@/assets/icons/lifestyle";
import TravelIcon from "@/assets/icons/travel";
import WorldIcon from "@/assets/icons/world";
import EntertainmentNewIcon from "@/assets/icons/entertainment";

const categories = [
  { href: "/world", label: "World", Icon: WorldIcon },
  { href: "/business", label: "Business", Icon: BusinessIcon },
  { href: "/technology", label: "Technology", Icon: TechnologyIcon },
  { href: "/health", label: "Health", Icon: HealthIcon },
  { href: "/sports", label: "Sports", Icon: SportsIcon },
  { href: "/entertainment", label: "Entertainment", Icon: EntertainmentNewIcon },
  { href: "/science", label: "Science", Icon: ScienceIcon },
  { href: "/lifestyle", label: "Lifestyle", Icon: LifestyleIcon },
  { href: "/travel", label: "Travel", Icon: TravelIcon },
  { href: "/politics", label: "Politics", Icon: PoliticsIcon },
];

function Aside() {
  const pathname = usePathname();

  return (
    <aside>
      <h2>Categories</h2>

      <ul>
        {categories.map(({ href, label, Icon }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <li key={href} className={isActive ? "is-active" : undefined}>
              <Link
                href={href}
                className={isActive ? "aside-link active" : "aside-link"}
              >
                <Icon /> {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Aside;
