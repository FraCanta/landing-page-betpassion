import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)} {...props}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
      <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-wide text-text-primary sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">{description}</p>}
    </div>
  );
}
