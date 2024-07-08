import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const assets = {
  home: {
    desktop: {
      hero: "/assets/home/desktop/create-and-share.jpg",
      first: "/assets/home/desktop/beautiful-stories.jpg",
      second: "/assets/home/desktop/designed-for-everyone.jpg",
    },
    tablet: {
      hero: "/assets/home/tablet/create-and-share.jpg",
      first: "/assets/home/tablet/beautiful-stories.jpg",
      second: "/assets/home/tablet/designed-for-everyone.jpg",
    },
    mobile: {
      hero: "/assets/home/mobile/create-and-share.jpg",
      first: "/assets/home/mobile/beautiful-stories.jpg",
      second: "/assets/home/mobile/designed-for-everyone.jpg",
    },
  },
  stories: {
    desktop: {
      hero: "/assets/stories/desktop/moon-of-appalacia.jpg",
      img_01: "/assets/stories/desktop/mountains.jpg",
      img_02: "/assets/stories/desktop/somwarpet.jpg",
      img_03: "/assets/stories/desktop/18-days-voyage.jpg",
      img_04: "/assets/stories/desktop/architecturals.jpg",
      img_05: "/assets/stories/desktop/world-tour.jpg",
      img_06: "/assets/stories/desktop/unforeseen-corners.jpg",
      img_07: "/assets/stories/desktop/king-on-africa.jpg",
      img_08: "/assets/stories/desktop/trip-to-nowhere.jpg",
      img_09: "/assets/stories/desktop/rage-of-the-sea.jpg",
      img_10: "/assets/stories/desktop/running-free.jpg",
      img_11: "/assets/stories/desktop/behind-the-waves.jpg",
      img_12: "/assets/stories/desktop/calm-waters.jpg",
      img_13: "/assets/stories/desktop/milky-way.jpg",
      img_14: "/assets/stories/desktop/dark-forest.jpg",
      img_15: "/assets/stories/desktop/somwarpet.jpg",
      img_16: "/assets/stories/desktop/land-of-dreams.jpg",
    },
    tablet: {
      hero: "/assets/stories/tablet/moon-of-appalacia.jpg",
    },
    mobile: {
      hero: "/assets/stories/mobile/moon-of-appalacia.jpg",
      img_01: "/assets/stories/mobile/mountains.jpg",
      img_02: "/assets/stories/mobile/somwarpet.jpg",
      img_03: "/assets/stories/mobile/18-days-voyage.jpg",
      img_04: "/assets/stories/mobile/architecturals.jpg",
      img_05: "/assets/stories/mobile/world-tour.jpg",
      img_06: "/assets/stories/mobile/unforeseen-corners.jpg",
      img_07: "/assets/stories/mobile/king-on-africa.jpg",
      img_08: "/assets/stories/mobile/trip-to-nowhere.jpg",
      img_09: "/assets/stories/mobile/rage-of-the-sea.jpg",
      img_10: "/assets/stories/mobile/running-free.jpg",
      img_11: "/assets/stories/mobile/behind-the-waves.jpg",
      img_12: "/assets/stories/mobile/calm-waters.jpg",
      img_13: "/assets/stories/mobile/milky-way.jpg",
      img_14: "/assets/stories/mobile/dark-forest.jpg",
      img_15: "/assets/stories/mobile/somwarpet.jpg",
      img_16: "/assets/stories/mobile/land-of-dreams.jpg",
    },
  },
  features: {
    hero: {
      desktop: "/assets/features/desktop/hero.jpg",
      tablet: "/assets/features/tablet/hero.jpg",
      mobile: "/assets/features/mobile/hero.jpg",
    },
    svgIcon: {
      icon_1: "/assets/features/desktop/responsive.svg",
      icon_2: "/assets/features/desktop/no-limit.svg",
      icon_3: "/assets/features/desktop/embed.svg",
      icon_4: "/assets/features/desktop/custom-domain.svg",
      icon_5: "/assets/features/desktop/boost-exposure.svg",
      icon_6: "/assets/features/desktop/drag-drop.svg",
    },
  },
  pricing: {
    hero: {
      desktop: "/assets/pricing/desktop/hero.jpg",
      tablet: "/assets/pricing/tablet/hero.jpg",
      mobile: "/assets/pricing/mobile/hero.jpg",
    },
    svgIcon: {
      icon_1: "/assets/pricing/desktop/check.svg",
    },
  },
  footer: {
    hero: {
      desktop: "/assets/shared/desktop/bg-beta.jpg",
      tablet: "/assets/shared/tablet/bg-beta.jpg",
      mobile: "/assets/shared/mobile/bg-beta.jpg",
    },
  },
};
