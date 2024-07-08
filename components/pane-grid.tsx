import { cn } from "@/lib/utils";
import styles from "./pane-grid.module.css";

interface PaneGridProps {
  children: React.ReactNode;
  className?: string;
  bgDark?: boolean;
}

export default function PaneGrid({
  className,
  children,
  bgDark,
}: PaneGridProps) {
  return (
    <div
      className={cn(
        `bg-slate-50 text-slate-950 ${styles.gridwise}`,
        bgDark && "bg-slate-950 text-slate-50",
        className,
      )}
    >
      {children}
    </div>
  );
}
