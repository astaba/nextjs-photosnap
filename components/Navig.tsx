"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

import { SheetClose } from "./ui/sheet";

const links = [
  { to: "/", label: "home" },
  { to: "/stories", label: "stories" },
  { to: "/features", label: "features" },
  { to: "/pricing", label: "pricing" },
];

export default function Navig({
  navStyles,
  type,
}: {
  navStyles: {
    wrapper: string;
    link: string;
    active?: string;
    backdrop?: string;
  };
  type: "onHeader" | "onFooter" | "onSidenav";
}) {
  const pathname = usePathname();

  return (
    <nav className={navStyles.wrapper}>
      {links.map((link, index) => {
        const isActive = link.to === pathname ? true : false;
        const motionContent = (
          <Link key={index} href={link.to} className={navStyles.link}>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween" }}
                layoutId="backdrop"
                className={navStyles.backdrop}
              />
            )}
            {link.label}
          </Link>
        );

        const motionlessContent = (
          <Link
            key={index}
            href={link.to}
            className={clsx({
              [navStyles.link as string]: true,
              [navStyles.active as string]: isActive,
            })}
          >
            {link.label}
          </Link>
        );

        return {
          onHeader: motionContent,
          onSidenav: <SheetClose asChild>{motionlessContent}</SheetClose>,
          onFooter: motionlessContent,
        }[type];
      })}
    </nav>
  );
}
