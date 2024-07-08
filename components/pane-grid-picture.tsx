import { getImageProps } from "next/image";

import { cn } from "@/lib/utils";
import styles from "./pane-grid-picture.module.css";

interface PaneGridPictureProps {
  className?: string;
  picArea?: "left" | "right" | "back";
  imgProps: {
    alt: string;
    src: {
      desktop?: string;
      tablet?: string;
      mobile: string;
    };
    imgClasses?: string;
  };
}

export default function PaneGridPicture({
  picArea,
  className,
  imgProps: { imgClasses, src, alt },
}: PaneGridPictureProps) {
  const common = { alt: alt, size: "100vw" };

  const desktop =
    src.desktop &&
    getImageProps({
      ...common,
      width: 830,
      height: 650,
      quality: 80,
      src: src.desktop,
    }).props.srcSet;

  const tablet =
    src.tablet &&
    getImageProps({
      ...common,
      width: 273,
      height: 650,
      quality: 80,
      src: src.tablet,
    }).props.srcSet;

  const {
    props: { ...rest },
  } = getImageProps({
    ...common,
    width: 375,
    height: 294,
    quality: 80,
    src: src.mobile,
  });

  return (
    <picture
      className={cn(
        styles.picture,
        // {
        //   ["sm:col-end-3 sm:justify-self-start"]: picArea === "left",
        //   ["sm:col-start-4"]: picArea === "right",
        //   ["sm:col-start-1 sm:justify-self-stretch"]: picArea === "back",
        // },
        className,
      )}
    >
      {desktop && <source media="(min-width: 900px)" srcSet={desktop} />}
      {tablet && <source media="(min-width: 550px)" srcSet={tablet} />}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        {...rest}
        className={cn(
          styles.img,
          // "w-full h-auto sm:h-full",
          // picArea === "back" && "h-full",
          // picArea === "left" && "sm:w-auto",
          // picArea === "right" && "sm:w-auto",
          imgClasses,
        )}
      />
    </picture>
  );
}

// .back {
//   --pic-col-start: 1;
//   --pic-justify-self: stretch;
// }

// return (
//     <picture className={styles.picture}>
//       {desktop && <source media="(min-width: 900px)" srcSet={desktop} />}
//       {tablet && <source media="(min-width: 550px)" srcSet={tablet} />}
//       {/* eslint-disable-next-line jsx-a11y/alt-text */}
//       <img {...rest} className={`sm:hidden ${styles.imgFull}`} />
//       {/* eslint-disable-next-line jsx-a11y/alt-text */}
//       <img {...rest} className={`hidden sm:block ${styles.imgAuto}`} />
//     </picture>
//   );
