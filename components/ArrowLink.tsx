import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowLinkProps extends React.HTMLAttributes<HTMLAnchorElement> { }

export default function ArrowLink({ className, children }: ArrowLinkProps) {
  return (
    <a href="#" className={cn("inline-flex capitalize", className)}>
      {children} <ExternalLink strokeWidth={2} size={18} />
    </a>
  );
}
