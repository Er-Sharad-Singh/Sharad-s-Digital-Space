import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function Css3Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m14.5 9.5-5 5" strokeWidth="2" stroke="hsl(var(--primary-foreground))" />
      <path d="m9.5 9.5 5 5" strokeWidth="2" stroke="hsl(var(--primary-foreground))" />
    </svg>
  );
}
