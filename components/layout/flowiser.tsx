import { cn } from "@/lib/utils";
import styles from "./flowiser.module.css";

interface FlowiserProps extends React.HTMLAttributes<HTMLDivElement> {
  sideText: boolean;
}

export default function Flowiser({
  className,
  children,
  sideText,
}: FlowiserProps) {
  return (
    <div
      className={cn(
        "sm:max-w-[38ch]",
        styles.flowiser,
        // BUG: Had forgot to set this
        sideText && styles.sideText,
        className,
      )}
    >
      {children}
    </div>
  );
}
