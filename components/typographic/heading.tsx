import { cn } from "@/lib/utils";
import { lusitana } from "@/lib/fonts";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Heading({
  heading,
  children,
  className,
}: HeadingProps) {
  const Component = heading || "h1";

  return (
    <Component
      className={cn(
        `${lusitana.className} capitalize text-4xl font-bold max-w-[15ch] sm:text-5xl`,
        className,
      )}
    >
      {children}
    </Component>
  );
}
