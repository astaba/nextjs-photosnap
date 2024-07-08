import { cn } from "@/lib/utils";
import styles from "./pane-grid-text.module.css";

interface PaneGridTextProps extends React.HTMLAttributes<HTMLDivElement> {
  textArea?: "over" | "left" | "right";
}

export default function PaneGridText({
  className,
  textArea,
  children,
}: PaneGridTextProps) {
  return (
    <div
      className={cn(
        `${styles.wrapper} edging`,
        styles.flowiser,
        // "row-start-2 col-start-2 row-end-3 -col-end-2 edging m-0 p-0 flex flex-col justify-center items-start sm:row-start-1 sm:row-end-2 sm:my-[var(--flower)] sm:px-[var(--flower)]",
        // {
        //   ["row-start-1 row-end-2 sm:col-start-1 sm:-col-end-1 sm:py-[var(--flower)] sm:my-0 sm:flex-row sm:justify-between sm:items-center"]:
        //     textArea === "over",
        //   ["sm:col-start-1 sm:col-end-4 sm:items-start"]: textArea === "left",
        //   ["sm:col-start-3 sm:-col-end-1 sm:items-end"]: textArea === "right",
        // },
        className,
      )}
    >
      {children}
    </div>
  );
}
