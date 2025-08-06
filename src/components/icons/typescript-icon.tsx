import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function TypescriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 9.5 8 12l2 2.5" strokeWidth="2" stroke="hsl(var(--primary-foreground))" />
      <path d="M14 9.5 16 12l-2 2.5" strokeWidth="2" stroke="hsl(var(--primary-foreground))" />
      <path d="M5 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5Z" />
    </svg>
  );
}
