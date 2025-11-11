import type { ReactNode } from "react";
import { cn } from "../lib/utils";

const Section = ({
  isBoxed = true,
  className,
  children,
}: {
  isBoxed?: boolean;
  className?: string;
  children: ReactNode;
}) => {
  const containerWidth = isBoxed ? "max-w-6xl mx-auto" : "w-full px-4";

  return (
    <div className={cn("min-h-screen", containerWidth, className ?? "")}>
      {children}
    </div>
  );
};

export default Section;
