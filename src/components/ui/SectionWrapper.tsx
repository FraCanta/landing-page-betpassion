import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionWrapperProps = HTMLAttributes<HTMLElement>;

export function SectionWrapper({ className, ...props }: SectionWrapperProps) {
  return <section className={cn("py-14 sm:py-20", className)} {...props} />;
}
