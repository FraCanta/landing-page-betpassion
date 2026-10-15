import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "whatsapp" | "whatsapp-dark";
type SharedProps = { variant?: Variant; children: ReactNode; className?: string };
type LinkProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; disabled?: boolean };
type NativeButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
export type ActionButtonProps = LinkProps | NativeButtonProps;

const styles: Record<Variant, string> = {
  primary: "bg-accent text-background hover:bg-accent-hover",
  secondary: "border border-border bg-surface-elevated text-text-primary hover:bg-surface",
  whatsapp: "bg-whatsapp text-background hover:brightness-95",
  "whatsapp-dark": "bg-[#004d20] text-white hover:bg-[#003d19]",
};

const base = "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50";

export function ActionButton(props: ActionButtonProps) {
  const { variant = "primary", children, className } = props;
  const classes = cn(base, styles[variant], className);

  if ("href" in props && props.href) {
    const { href, disabled, target, rel } = props;
    const anchorProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !["href", "disabled", "target", "rel", "variant", "children", "className"].includes(key)),
    ) as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel" | "className">;
    if (disabled) return <span aria-disabled="true" className={cn(classes, "pointer-events-none opacity-50")}>{children}</span>;
    return <a href={href} target={target} rel={target === "_blank" ? (rel ? `${rel} noopener noreferrer` : "noopener noreferrer") : rel} className={classes} {...anchorProps}>{children}</a>;
  }

  const buttonProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => !["href", "variant", "children", "className"].includes(key)),
  ) as Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;
  return <button className={classes} {...buttonProps}>{children}</button>;
}
