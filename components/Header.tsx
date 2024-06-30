"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import Navig from "./Navig";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import useScrollRate from "@/hooks/useScrollRate";

export default function Header() {
  const [isWindowYOffset, setIsWindowYOffset] = useState(false);
  // FIX: Deal with that pathname
  const pathName = usePathname();
  const scrollRate = useScrollRate();

  useEffect(() => {
    const checkWindowYOffset = () => {
      window.scrollY > 50
        ? setIsWindowYOffset(true)
        : setIsWindowYOffset(false);
    };

    // NOTE:  Throttling scroll event to debounce checkWindowYOffset
    let isScroll = false;
    const setIsScroll = () => (isScroll = true);
    window.addEventListener("scroll", setIsScroll);
    const timer = setInterval(() => {
      if (isScroll) {
        isScroll = false;
        checkWindowYOffset();
      }
    }, 100);

    // NOTE: Clean up
    return () => {
      window.removeEventListener("scroll", setIsScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <header
      className={`fixed inset-0 bottom-auto z-30 bg-yellow-200/35 py-6 md:py-8 ${isWindowYOffset ? "shadow-lg" : ""}`}
    >
      {/* FIX: Add horizontal padding and maximum width to container */}
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <Logo />
          <div>
            <Navig
              type="onHeader"
              navStyles={{
                wrapper: "hidden gap-x-2 items-center md:flex",
                link: "relative rounded px-[1em] py-[0.5em] text-sm font-bold capitalize tracking-widest text-slate-950 ring-inset ring-slate-100 transition-all hover:ring",
                backdrop: "absolute inset-0 -z-30 rounded bg-slate-100",
              }}
            />
            {/* TODO: Theme toggler */}
            <MobileNav>
              <Navig
                type="onSidenav"
                navStyles={{
                  wrapper: "flex flex-col items-center gap-y-4",
                  link: "relative rounded px-[1em] py-[0.5em] text-sm font-bold capitalize tracking-widest text-slate-950 ring-inset ring-slate-100 transition-all hover:ring",
                  active: "bg-slate-100",
                }}
              />
            </MobileNav>
          </div>
        </div>
      </div>
      <span
        style={{ transform: `translateX(${scrollRate - 100}%)` }}
        className="absolute inset-0 top-auto h-1 w-full bg-clr-yellow transition-all duration-300"
      />
    </header>
  );
}
