import Logo from "./Logo";
import Navig from "./Navig";
import GetAnInvite from "./GetAnInvite";
import {
  Facebook,
  Youtube,
  Twitter,
  Pinterest,
  Instagram,
} from "./ui/social-icons";

const socials = [
  {
    label: "facebook",
    icon: <Facebook />,
    id: "facebook",
    href: "#",
  },
  {
    label: "instagram",
    icon: <Instagram />,
    id: "instagram",
    href: "#",
  },
  {
    label: "pinterest",
    icon: <Pinterest />,
    id: "pinterest",
    href: "#",
  },
  {
    label: "twitter",
    icon: <Twitter />,
    id: "twitter",
    href: "#",
  },
  {
    label: "youtube",
    icon: <Youtube />,
    id: "youtube",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-sm lg:py-md text-slate-50">
      <div className="wrapper grid grid-cols-3 gap-y-sm *:justify-self-center *:col-start-1 *:-col-end-1 sm:gap-5">
        {/* Page logo */}
        <Logo
          className="sm:col-end-2 sm:self-center sm:justify-self-start"
          textFillRgb="#FFF"
        />
        {/* Sns */}
        <ul className="flex gap-x-4 sm:justify-self-start sm:row-start-3 sm:col-end-2">
          {socials.map((social, i) => (
            <li key={i}>
              <a href={social.href} id={social.id} aria-label={social.label}>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
        {/* Nav */}
        <Navig
          type="onFooter"
          navStyles={{
            wrapper:
              "flex flex-col items-center gap-y-2 sm:row-start-2 sm:flex-row sm:justify-self-start sm:mb-md sm:gap-x-4 md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-3 md:flex-col md:items-start md:justify-self-center md:gap-y-2",
            link: "relative text-sm font-bold capitalize tracking-widest text-slate-50 transition-all hover:text-slate-300",
            active: "border-b-2 border-slate-700",
          }}
        />
        {/* Cta */}
        <div className="mt-md sm:col-start-3 sm:row-start-1 sm:mt-0 sm:justify-self-end">
          <GetAnInvite className="items-center gap-[0.25em] tracking-wider hover:underline hover:underline-offset-4" />
        </div>
        {/* Copyright */}
        <p className="text-slate-400 text-sm sm:col-start-3 sm:row-start-3 sm:justify-self-end sm:text-right">
          &copy;2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
